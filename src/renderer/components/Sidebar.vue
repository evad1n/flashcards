<template>
    <div id="sidebar" class="column is-one-fifth">
        <div id="search-box">
            <p>
                <strong>Find A Word</strong>
            </p>
            <input id="searchbar" type="text" placeholder="Search..." />
            <p class="control has-icons-left">
                <input class="input" type="text" placeholder="Search" />
                <span class="icon is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                </span>
            </p>
        </div>
        <div id="history-list">
            <p id="history-title">
                <strong>Recently Added Words</strong>
            </p>
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
    computed: {},
};
</script>

<style scoped>
#sidebar {
    position: fixed;
    background-color: #f1f1f1;
    margin: 0;
    padding: 0;
    width: 200px;
    height: 100%;
    border-right: solid;
    display: flex;
    flex-direction: column;
    font-size: 1.3em;
    transition: 0.5s;
}

#sidebar p {
    text-align: center;
    border-bottom: solid;
}

#search-box {
    margin-bottom: 40px;
    position: relative;
}

#searchbar {
    margin: auto;
    width: 160px;
    background-color: #dddddd;
}

.autocomplete-items {
    position: absolute;
    border: 1px solid #d4d4d4;
    border-bottom: none;
    border-top: none;
    z-index: 99;
    /*position the autocomplete items to be the same width as the container:*/
    top: 100%;
    left: 0;
    right: 0;
}
.autocomplete-items div {
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    border-bottom: 1px solid #d4d4d4;
}
.autocomplete-items div:hover {
    /*when hovering an item:*/
    background-color: #e9e9e9;
}
.autocomplete-active {
    /*when navigating through the items using the arrow keys:*/
    background-color: DodgerBlue !important;
    color: #ffffff;
}
</style>