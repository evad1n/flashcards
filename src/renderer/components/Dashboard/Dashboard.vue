<template>
    <div>
        <Navbar v-on:list-modal="listModal = !listModal" navigation="none"></Navbar>
        <div class="columns">
            <div v-for="(list, index) in lists" v-bind:key="index" class="column is-one-third">
                <ListCard
                    v-on:rename-list="goToRename"
                    v-on:delete-list="goToDelete"
                    v-bind:name="list"
                ></ListCard>
            </div>
            <div class="column is-one-third">
                <div class="add-card" v-on:click="listModal = !listModal">
                    <img src="../../assets/plus.png" alt="plus">
                </div>
            </div>
        </div>
        <ListModal
            v-on:add-list="addList"
            v-on:close-modal="listModal = !listModal;"
            v-bind:class="{'is-active': listModal}"
        ></ListModal>
        <RenameModal
            :listData="currentList"
            v-on:rename="renameList"
            v-on:close-modal="renameModal = !renameModal;"
            v-bind:class="{'is-active': renameModal}"
        ></RenameModal>
        <ConfirmModal
            type="list"
            :name="currentList.name"
            v-on:confirm="deleteList"
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
            lists: [],
            listModal: false,
            renameModal: false,
            confirmModal: false,
            currentList: {
                name: "",
                front: [],
                back: [],
            },
            confirmPrompt: "",
        };
    },
    methods: {
        addList(data) {
            console.log(data);
            dbhelper.addTable(
                data.name,
                [...data.front, ...data.back],
                data.front.length
            );
            this.refreshLists();
        },
        refreshLists() {
            this.lists = dbhelper.getTables();
            console.log(this.lists);
        },
        goToRename(name) {
            this.renameModal = true;
            this.currentList.name = name;
            console.log(dbhelper.describeTable(name));
            // console.log(`rename ${name}`);
        },
        goToDelete(name) {
            this.confirmModal = true;
            this.currentList.name = name;
            this.confirmPrompt = `delete the ${name} list`;
        },
        renameList(data) {
            // rename the list
            console.log(`renamed ${name} list`);
            this.refreshLists();
        },
        deleteList() {
            dbhelper.deleteTable(this.currentList.name);
            console.log(`deleted list ${this.currentList.name}`);
            this.refreshLists();
        },
    },
    created: function () {
        this.lists = dbhelper.getTables();
        console.log(this.lists);
    },
};
</script>

<style scoped>
.columns {
    display: flex;
    flex-wrap: wrap;
}

.add-card {
    cursor: pointer;
    position: relative;
    margin: 2vh auto;
    width: 25vw;
    height: 30vh;
    border: solid 2px #bbbbbb;
    border-radius: 5px;
}

.add-card img{
    position: relative;
    display: block;
    margin: auto;
    width: 40%;
    top: 25%;
}

.add-card:hover{
    border: solid 2px #999;
    background-blend-mode: darken;
    filter: brightness(90%)
}
</style>