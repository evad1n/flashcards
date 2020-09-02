<template>
    <div>
        <Navbar navigation="editing"></Navbar>
        <Sidebar></Sidebar>
        <div id="content">
            <table class="table is-fullwidth is-striped">
                <thead>
                    <th>
                        <td v-for="(column, index) in schema.columns" v-bind:key="index">{{ column.name }}</td>
                    </th>
                </thead>
                <tbody>
                    <tr v-for="card in cards" v-bind:key="card.rowid">
                        <td v-for="(field, index) in card" v-bind:key="index">{{ field }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import AddModal from "../Modals/AddModal";
import EditModal from "../Modals/EditModal";
import ConfirmModal from "../Modals/ConfirmModal";

import * as dbhelper from "../../../db/dbhelper.js";

export default {
    name: "editing",
    props: [],
    components: { Navbar, Sidebar },
    data() {
        return {
            name: "",
            schema: {},
            cards: [],
            historyModal: false,
        };
    },
    methods: {
        prettify(sentence) {
            var words = sentence.split("_");
            console.log(words);
            for (let index = 0; index < words.length; index++) {
                words[index] = capitalizeFirstLetter(words[index]);
            }

            return words.join(" ");
        },
        capitalizeFirstLetter(word) {
            var letter = word.charAt(0);
            letter = letter.toUpperCase();
            word = word.substring(1, word.length);
            return letter + word;
        },
    },
    computed: {},
    created: function () {
        this.name = this.$route.params.name;
        this.cards = dbhelper.getEntries(this.name);
        this.schema = dbhelper.describeTable(this.name);
        console.log(`editing ${this.name}`);
        console.log(this.schema)
        console.log(this.cards)
    },
};
</script>

<style scoped>
/*edit page style*/
#add-button {
    margin-bottom: 10px;
}

#entry {
    width: 100%;
    border-spacing: 0;
}

#entry th {
    text-align: center;
}

#entry tr td {
    padding: 10px 0px;
}

#entry tr td:nth-of-type(1) {
    width: 125px;
}
#entry tr td:nth-of-type(2) {
    width: 120px;
}
#entry tr td:nth-of-type(3) {
    width: 50px;
}
#entry tr td:nth-of-type(4) {
    width: 500px;
}

#entry tr td:last-child {
    width: 200px;
}

#entry label {
    width: 80px;
    margin-right: 5px;
}

.focused {
    background-color: #ccc;
}
</style>