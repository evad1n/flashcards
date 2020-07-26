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

<style scoped>
    /*edit page style*/
#add-button{
    margin-bottom: 10px; 
}

#entry{
    width: 100%;
    border-spacing: 0;
}

#entry th{
    text-align: center;
}

#entry tr td{
    padding: 10px 0px;
}

#entry tr td:nth-of-type(1){
    width: 125px;
}
#entry tr td:nth-of-type(2){
    width: 120px;
}
#entry tr td:nth-of-type(3){
    width: 50px;
}
#entry tr td:nth-of-type(4){
    width: 500px;
}

#entry tr td:last-child{
    width: 200px;
}

#entry label{
    width: 80px;
    margin-right: 5px;
}

.focused{
    background-color: #ccc;
}
</style>