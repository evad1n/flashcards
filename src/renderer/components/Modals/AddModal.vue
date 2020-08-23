<template>
    <div class="modal">
        <div v-on:click="$emit('close-modal')" class="modal-background"></div>
        <div class="columns">
            <div class="modal-card column is-one-third">
                <header class="modal-card-head">
                    <p class="modal-card-title">Create a New List</p>
                    <button v-on:click="$emit('close-modal')" class="delete" aria-label="close"></button>
                </header>

                <section class="modal-card-body">
                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input v-model="name" class="input" type="text" placeholder="List Name" />
                        </div>
                    </div>

                    <div>
                        <div
                            v-for="(field, column) in frontFields"
                            v-bind:key="column"
                            class="field"
                        >
                            <label class="label">Front Field {{ column + 1}}</label>
                            <div class="control">
                                <input
                                    v-model="frontFields[column]"
                                    class="input"
                                    type="text"
                                    :placeholder="'Front Field ' + (column + 1)"
                                />
                            </div>
                        </div>

                        <button v-on:click="frontFields.push('')" class="button">Add Front Field</button>
                    </div>

                    <div>
                        <div
                            v-for="(field, column) in backFields"
                            v-bind:key="column + frontFields.length"
                            class="field"
                        >
                            <label class="label">Back Field {{ column + 1 }}</label>
                            <div class="control">
                                <input
                                    v-model="backFields[column]"
                                    class="input"
                                    type="text"
                                    :placeholder="'Back Field ' + (column + 1)"
                                />
                            </div>
                        </div>

                        <button v-on:click="backFields.push('')" class="button">Add Back Field</button>
                    </div>
                </section>

                <footer class="modal-card-foot">
                    <button v-on:click="submitList" class="button is-success">Create List</button>
                </footer>
            </div>
            <div class="column is-one-third">
                <Flashcard></Flashcard>
            </div>
        </div>
    </div>
</template>

<script>
import Flashcard from "../Viewing/Flashcard";

export default {
    name: "list-modal",
    props: [],
    components: { Flashcard },
    data() {
        return {
            name: "",
            frontFields: [""],
            backFields: [""],
        };
    },
    methods: {
        submitList() {
            // Send data to parent
            this.$emit("add-list", {
                name: this.name,
                front: this.frontFields,
                back: this.backFields,
            });
            // Close modal
            this.$emit("close-modal");
            // Reset fields
            this.name = "";
            this.frontFields = [""];
            this.backFields = [""];
        },
    },
    computed: {},
};
</script>