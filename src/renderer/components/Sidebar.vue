<template>
    <div id="sidebar" class="column is-one-fifth">
        <div id="search-box">
            <p><strong>Find A Word</strong></p>
            <input id="searchbar" type="text" placeholder="Search...">
        </div>
        <div id="history-list">
            <p id="history-title"><strong>Recently Added Words</strong></p>
            <ul>
                <li id="recent-new-edit" class="top-border">placeholder</li>
                <li id="recent-0" class="hidden top-border">word 0</li>
                <li id="recent-1" class="hidden">word 1</li>
                <li id="recent-2" class="hidden">word 2</li>
                <li id="recent-3" class="hidden">word 3</li>
                <li id="recent-4" class="hidden">word 4</li>
                <li id="recent-5" class="hidden">word 5</li>
                <li id="recent-6" class="hidden">word 6</li>
                <li id="recent-7" class="hidden">word 7</li>
                <li id="recent-8" class="hidden">word 8</li>
                <li id="recent-9" class="hidden">word 9</li>
                <li id="recent-old-edit" class="top-border">placeholder</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "list-card",
    props: ["name"],
    components: {},
    methods: {
        // test() {
        //   ${'#.navbar-burger'}
        // }
    },
    computed: {}
};
</script>