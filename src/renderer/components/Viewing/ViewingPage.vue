<template>
    <div>
        <Navbar navigation="viewing"></Navbar>
        <div class="columns">
            <Sidebar></Sidebar>
            <div id="content">
                <main>
                    <button type="button" id="random-word" class="hidden">Random Word</button>
                    <div id="main-content" class="hidden">
                        <div id="left">
                            <button type="button" id="left-button" class="hidden">
                                <img src />
                            </button>
                        </div>
                        <div id="word-content">
                            <div class="flip-card move">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <h2 id="word"></h2>
                                        <h3 id="pronunciation"></h3>
                                        <h3 id="part-of-speech"></h3>
                                    </div>
                                    <div class="flip-card-back">
                                        <p id="definition"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="right">
                            <button type="button" id="right-button" class="hidden">
                                <img src />
                            </button>
                        </div>
                    </div>
                    <div id="controls" class="hidden">
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
                    <button onclick="location.href='editing.html';">Edit the Dictionary</button>
                    <p>&copy; Will Dickinson 2019</p>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

import * as dbhelper from "../../../db/dbhelper.js";

export default {
    name: "viewing",
    props: ["table_name"],
    components: { Navbar, Sidebar },
    data() {
        return {
            navigation: "none",
            cards: [],
        };
    },
    methods: {
        newWord() {
            console.log("giff new word");
        },
    },
    computed: {},
    created: function () {
        dbhelper.openDatabase(() => {
            dbhelper.getEntries(this.table_name, (rows) => {
                cards = rows;
                console.log(rows);
            });
        });
    },
};
</script>