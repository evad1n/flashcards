<template>
    <div>
        <Navbar navigation="viewing"></Navbar>
        <div class="columns">
            <Sidebar></Sidebar>
            <div id="content">
                <main>
                    <button type="button" id="random-word" class="button">Random Word</button>
                    <div class="columns">
                        <div class="is-one-fifth" id="left">
                            <button type="button" id="left-button" class="button">
                                <img src />
                            </button>
                        </div>
                        <div class="is-three-fifths" id="word-content">
                            <Flashcard></Flashcard>
                        </div>
                        <div class="is-one-fifth" id="right">
                            <button type="button" id="right-button" class="button">
                                <img src />
                            </button>
                        </div>
                    </div>
                    <div id="controls">
                        <div id="word-controls">
                            <button type="button" id="new-word">New Word</button>
                        </div>
                        <div id="frequency-controls">
                            <button type="button" id="decrease-frequency">Decrease Frequency</button>
                            <span id="frequency"></span>
                            <button type="button" id="increase-frequency">Increase Frequency</button>
                        </div>
                    </div>
                </main>
                <footer class="footer">
                    <label class="paper-btn" for="history-modal">View Full History</label>
                </footer>
            </div>
        </div>

        <HistoryModal
            v-on:close-modal="historyModal = !historyModal"
            v-bind:class="{'is-active': historyModal}"
        ></HistoryModal>
    </div>
</template>

<script>
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import Flashcard from "../Viewing/Flashcard";
import HistoryModal from "../Modals/HistoryModal";

import * as dbhelper from "../../../db/dbhelper.js";

export default {
    name: "viewing",
    props: ["table_name"],
    components: { Navbar, Sidebar, Flashcard, HistoryModal },
    data() {
        return {
            cards: [],
            historyModal: false,
        };
    },
    methods: {
        newWord() {
            console.log("giff new word");
        },
    },
    computed: {},
    created: function () {
        // dbhelper.getEntries(this.table_name);
    },
    watch: {
        $route(to, from) {
            console.log("here is viewing");
        },
    },
};
</script>

<style scoped>
html,
body {
    min-height: 100vh;
}

body {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
}

#history-title {
    position: relative;
    top: -10px;
}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: center;
}

.top-border {
    border-top: solid;
}

ul li {
    border-bottom: solid;
    transition: background-color 0.1s;
    position: relative;
    height: 40px;
    box-sizing: border-box;
    padding-top: 2.4px;
}

ul li:hover {
    background-color: #aaaaaa;
    cursor: pointer;
}

#recent-new {
    position: absolute;
    width: 197.6px;
    top: 214px;
    display: none;
    padding-top: 0;
}

#recent-new-edit {
    position: absolute;
    width: 197.6px;
    top: 243.6px;
    display: none;
    padding-top: 2.4px;
}

#recent-old-edit {
    position: absolute;
    width: 197.6px;
    top: 681.6px;
    height: 42.4px;
    display: none;
    padding-top: 4.8px;
}

.current {
    background-color: #777777;
}

ul a {
    text-decoration: none;
}

ul a:link {
    color: inherit;
}

#content {
    margin-left: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
}

header {
    text-align: center;
}

h1 {
    margin: 20px;
    font-size: 4em;
    text-align: center;
}

main {
    text-align: center;
    flex: 1;
}

#main-content {
    flex-direction: row;
    height: 400px;
    width: 100%;
    margin: auto;
}

#left {
    position: relative;
    height: 150px;
    width: 150px;
    top: 125px;
}

#right {
    position: relative;
    height: 150px;
    width: 150px;
    top: 125px;
}

#word-content {
    border: solid;
    overflow: hidden;
    margin: 0;
    width: calc(100% - 300px);
    height: 100%;
}

#upper-content {
    display: flex;
    height: 100px;
}

#word {
    font-size: 3em;
    margin: 0;
}

/* #pronunciation{
    
}

#part-of-speech{
    
} */

#definition {
    font-size: 1.2em;
    padding-left: 10px;
    padding-right: 10px;
}

img {
    width: 150px;
}

#word-controls,
#frequency-controls {
    padding: 10px;
}

#frequency-controls {
    margin-bottom: 10px;
}

#frequency {
    padding: 10px;
}

footer {
    text-align: center;
    flex-shrink: 0;
    position: relative;
}

.hidden {
    display: none;
}

#random-word {
    width: 300px;
    height: 150px;
    font-size: 2em;
}
</style>