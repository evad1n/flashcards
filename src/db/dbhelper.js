const Database = require('better-sqlite3');
const db = new Database('./src/db/flashcards.db', { fileMustExist: true, verbose: console.log });

process.on('exit', () => db.close());
process.on('SIGHUP', () => process.exit(128 + 1));
process.on('SIGINT', () => process.exit(128 + 2));
process.on('SIGTERM', () => process.exit(128 + 15));

export function getTables() {
    const tables = db.prepare(`SELECT name FROM lists ORDER BY name`)
    try {
        return tables.all()
    } catch (error) {
        console.log(error)
    }
}

export function getFrontFields(name) {
    const stmt = db.prepare(`SELECT front_fields FROM lists WHERE name = "${name}"`)
    try {
        return stmt.get()
    } catch (error) {
        console.log(error)
    }
}

export function addTable(name, columns, front_fields) {
    let cols = ``
    columns.forEach(col => {
        cols += `"` + col + `" text,`
    });
    cols = cols.substring(0, cols.length - 1) // Cut off last comma
    const stmt1 = db.prepare(`CREATE TABLE IF NOT EXISTS "${name}"(${cols})`)
    const stmt2 = db.prepare(`INSERT INTO "lists" (name, front_fields) VALUES (?, ?)`)

    try {
        stmt1.run()
        stmt2.run(name, front_fields)
    } catch (error) {
        console.log(error)
    }
}

/**
 * 
 * @param {string} table_name name of the table
 * 
 * Returns column names and number of front fields for a list
 */
export function describeTable(table_name) {
    const columns = db.prepare(`PRAGMA table_info(${table_name});`)
    const frontFields = db.prepare(`SELECT front_fields FROM lists WHERE name = $table`)
    try {
        let data = {}
        data.columns = columns.all()
        data.frontFields = frontFields.all({table: table_name})
        return data
    } catch (error) {
        console.log(error)
    }
}

export function editTable(name, new_name) {
    const stmt = db.prepare(`ALTER TABLE "${name}" RENAME TO "${new_name}";`)
    try {
        stmt.run()
    } catch (error) {
        console.log(error)
    }
}

export function deleteTable(table_name) {
    const dropTable = db.prepare(`DROP TABLE "${table_name}"`)
    const dropFromLists = db.prepare(`DELETE FROM lists WHERE name = ${table_name};`)
    try {
        dropTable.run()
        dropFromLists.run()
    } catch (error) {
        console.log(error)
    }
}

// Get all entries in a table ordered by first column
export function getEntries(table_name) {
    const stmt = db.prepare(`SELECT rowid, * FROM "${table_name}" ORDER BY 1`)
    try {
        return stmt.all()
    } catch (error) {
        console.log(error)
    }
}

export function addEntry(table_name, data) {
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

export function deleteEntry(table_name, id) {
    const stmt = db.prepare(`DELETE FROM ${table_name} WHERE rowid = ${id};`)
    try {
        stmt.run()
        console.log("Deleted entry (id = " + data.id + ")");
    } catch (error) {
        console.log(error)
    }
}