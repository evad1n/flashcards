<template>
    <div>
        <Navbar v-on:list-modal="showModal = !showModal" navigation="none"></Navbar>
        <div class="columns">
            <ListCard v-for="(list, index) in lists" v-bind:name="list" v-bind:key="index"></ListCard>
        </div>
        <ListModal
            v-on:add-list="addList"
            v-on:close-modal="showModal = !showModal;"
            v-bind:class="{'is-active': showModal}"
        ></ListModal>
    </div>
</template>

<script>
import Navbar from "../Navbar";
import ListCard from "./ListCard";
import ListModal from "../Modals/ListModal";

import * as dbhelper from "../../../db/dbhelper.js";

export default {
    name: "dashboard",
    components: { Navbar, ListCard, ListModal },
    data() {
        return {
            navigation: "none",
            lists: [],
            showModal: false,
        };
    },
    methods: {
        addList(data) {
            console.log(data);
            dbhelper.getTables((rows) => {
                lists = rows.map(row => row.name);
            });
        },
    },
    created: function () {
        dbhelper.openDatabase(() => {
            dbhelper.getTables((rows) => {
                lists = rows.map(row => row.name);
            });
        });
    },
};
</script>