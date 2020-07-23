<template>
    <div id="content">
        <header>    
            <h1>VOCABULARY EDITING</h1>
        </header>
        <main>
            <label class="add-button paper-btn hidden" for="modal-1">Add A New Word</label>
            <button id="top-view-dictionary" class="hidden" onclick="location.href='../viewing/index.html';">View the Dictionary</button>
            <div id="table-content">
                
            </div>
        </main>
        <footer>
            <label class="add-button paper-btn hidden" for="modal-1">Add A New Word</label>
            <button onclick="location.href='../viewing/index.html';">View the Dictionary</button>
            <p>&copy; Will Dickinson 2019</p>
        </footer>
    </div>
</template>

<script>
export default {
    name: "table",
    props: ["table_name"],
    components: {},
    methods: {
        // test() {
        //   ${'#.navbar-burger'}
        // }
    },
    computed: {}
};
</script>