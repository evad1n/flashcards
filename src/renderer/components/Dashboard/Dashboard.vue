<template>
    <div>
        <Navbar v-on:list-modal="showModal = !showModal" navigation="none"></Navbar>
        <div class="columns">
            <ListCard v-for="(list, index) in lists" v-bind:name="list" v-bind:key="index"></ListCard>
        </div>
        <ListModal
            v-on:add-list="addList"
            v-on:close-modal="listModal = !listModal;"
            v-bind:class="{'is-active': listModal}"
        ></ListModal>
        <RenameModal
            v-on:rename-list="renameList"
            v-on:close-modal="renameModal = !renameModal;"
            v-bind:class="{'is-active': renameModal}"
        ></RenameModal>
        <ConfirmModal
            v-on:delete-list="deleteList"
            v-on:close-modal="confirmModal = !confirmModal;"
            v-bind:class="{'is-active': confirmModal}"
        ></ConfirmModal>
    </div>
</template>

<script>
import Navbar from "../Navbar";
import ListCard from "./ListCard";
import ListModal from "../Modals/ListModal";
import RenameModal from "../Modals/RenameModal";
import ConfirmModal from "../Modals/ConfirmModal";

import * as dbhelper from "../../../db/dbhelper.js";

export default {
    name: "dashboard",
    components: { Navbar, ListCard, ListModal, RenameModal, ConfirmModal },
    data() {
        return {
            navigation: "none",
            lists: [],
            listModal: false,
            renameModal: false,
            confirmModal: false,
        };
    },
    methods: {
        addList(data) {
            console.log(data);
            dbhelper.addTable(data.name, [...data.front,...data.back], data.front.length)
            this.refreshLists()
        },
        refreshLists() {
            this.lists = dbhelper.getTables().map(table => table.name)
            console.log(this.lists)
        },
        goToRename() {
            console.log("rename");
        },
        goToDelete() {
            console.log("delete");
        },
        renameList(data) {},
        deleteList(data) {},
    },
    created: function () {
        this.lists = dbhelper.getTables().map(table => table.name)
        console.log(this.lists)
    },
};
</script>