<template>
    <div>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Table></Table>
    </div>
</template>

<script>
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import AddModal from "../Modals/AddModal"

import * as dbhelper from "../../../db/dbhelper.js";

export default {
    name: "editing",
    props: ["table_name"],
    components: {Navbar, Sidebar},
    methods: {
        // test() {
        //   ${'#.navbar-burger'}
        // }
    },
    computed: {}
};
</script>