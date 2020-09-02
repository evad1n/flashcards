const Database = require('better-sqlite3');
const db = new Database('./src/db/flashcards.db', { fileMustExist: true, verbose: console.log });

process.on('exit', () => db.close());
process.on('SIGHUP', () => process.exit(128 + 1));
process.on('SIGINT', () => process.exit(128 + 2));
process.on('SIGTERM', () => process.exit(128 + 15));


/** * Returns a list of tables in the database
 */
export function getTables() {
    const tables = db.prepare(`SELECT name FROM lists ORDER BY name`)
    try {
        let rows = tables.all()
        rows = rows.map((row) => row.name = prettify(row.name))
        return rows
    } catch (error) {
        console.log(error)
    }
}

/**
 * Adds a new table to the database with the specified schema
 * @param {string} table_name name of the table to add
 * @param {string[]} columns an array of the names of the columns
 * @param {int} front_fields a number representing the number of front fields in the table
 */
export function addTable(table_name, columns, front_fields) {
    table_name = sanitize(table_name)

    let cols = ``
    columns.forEach(col => {
        cols += `"` + col + `" text,`
    });
    cols = cols.substring(0, cols.length - 1) // Cut off last comma
    const stmt1 = db.prepare(`CREATE TABLE IF NOT EXISTS '${table_name}'(${cols})`)
    const stmt2 = db.prepare(`INSERT INTO "lists" (name, front_fields) VALUES (?, ?)`)

    try {
        stmt1.run()
        stmt2.run(table_name, front_fields)
    } catch (error) {
        console.log(error)
    }
}

/**
 * Returns column names and number of front fields for a list
 * @param {string} table_name name of the table
 */
export function describeTable(table_name) {
    table_name = sanitize(table_name)

    const columns = db.prepare(`PRAGMA table_info(${table_name});`)
    const frontFields = db.prepare(`SELECT front_fields FROM lists WHERE name = ?`)
    try {
        let data = {}
        data.columns = columns.all()
        data.frontFields = frontFields.all(table_name)
        return data
    } catch (error) {
        console.log(error)
    }
}

/**
 * Renames the table ... and maybe columns in the future
 * @param {string} table_name name of the table
 * @param {string} new_name new name for the table
 */
export function editTable(table_name, new_name) {
    table_name = sanitize(table_name)
    new_name = sanitize(new_name)

    const stmt = db.prepare(`ALTER TABLE "${table_name}" RENAME TO "${new_name}";`)
    try {
        stmt.run()
    } catch (error) {
        console.log(error)
    }
}

/**
 * deletes the table and its associations
 * @param {string} table_name name of the table
 */
export function deleteTable(table_name) {
    table_name = sanitize(table_name)

    const dropTable = db.prepare(`DROP TABLE '${table_name}'`)
    const dropFromLists = db.prepare(`DELETE FROM lists WHERE name = '${table_name}';`)
    try {
        dropTable.run()
        dropFromLists.run()
    } catch (error) {
        console.log(error)
    }
}

/**
 * Get all entries in a table ordered by first column
 * @param {string} table_name name of the table
 */
export function getEntries(table_name) {
    table_name = sanitize(table_name)

    const stmt = db.prepare(`SELECT rowid, * FROM "${table_name}" ORDER BY 1`)
    try {
        return stmt.all()
    } catch (error) {
        console.log(error)
    }
}

/**
 * Adds an entry to the specified table
 * @param {string} table_name name of the table
 * @param {string[]} data an array of the new data to insert
 */
export function addEntry(table_name, data) {
    table_name = sanitize(table_name)

    let cols = ``
    Object.keys(data).forEach(key => {
        cols += `@` + key + `,`
    });
    cols = cols.substring(0, cols.length - 1) // Cut off last comma

    let vals = ``
    Object.keys(data).forEach(key => {
        vals += '"' + data[key] + '",'
    });
    vals = vals.substring(0, vals.length - 1) // Cut off last comma

    const stmt = db.prepare(`INSERT INTO "${table_name}" (${vals}) VALUES (${cols})`)
    try {
        return stmt.run(data).lastInsertRowid
    } catch (error) {
        console.log(error)
    }
}

export function updateEntry(table_name, data) {
    table_name = sanitize(table_name)

    let cols = ''
    Object.keys(data).forEach(key => {
        if (key != "id") {
            cols += key + " = '" + data[key] + "',"
        }
    });
    cols = cols.substring(0, cols.length - 1) // Cut off last comma
    console.log(`UPDATE ${table_name} SET ${cols} WHERE rowid = ${data.id};`)

    const stmt = db.prepare(`UPDATE "${table_name}" SET ${cols} WHERE rowid = ${data.id};`)
    try {
        stmt.run()
        console.log("Edited entry (id = " + data.id + ") " + cols);
    } catch (error) {
        console.log(error)
    }
}

/**
 * deletes an entry with the specified id from the specified table
 * @param {string} table_name name of the table
 * @param {int} id id of the row to delete
 */
export function deleteEntry(table_name, id) {
    table_name = sanitize(table_name)

    const stmt = db.prepare(`DELETE FROM ${table_name} WHERE rowid = ${id};`)
    try {
        stmt.run()
        console.log("Deleted entry (id = " + data.id + ")");
    } catch (error) {
        console.log(error)
    }
}

/**
 * Sanitizes text for use in SQLite statements
 * @param {string} input text to sanitize
 */
function sanitize(input) {
    input = input.replace("'", "%")
    input = input.replace(" ", "_")
    return input
}

/**
 * Reverses the sanitizing function
 * @param {string} input text to prettify
 */
function prettify(input) {
    input = input.replace("%", "'")
    input = input.replace("_", " ")
    return input
}