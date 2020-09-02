<template>
    <div class="modal">
        <div v-on:click="$emit('close-modal')" class="modal-background"></div>
        <div class="columns wrapper">
            <div class="column is-1"></div>
            <div class="column is-5">
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Rename this list</p>
                        <button v-on:click="$emit('close-modal')" class="delete" aria-label="close"></button>
                    </header>

                    <section class="modal-card-body">
                        <div class="field">
                            <label class="label">Name</label>
                            <div class="control">
                                <input
                                    v-model="name"
                                    class="input"
                                    type="text"
                                    placeholder="List Name"
                                />
                            </div>
                        </div>

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
                    </section>

                    <footer class="modal-card-foot">
                        <button v-on:click="renameList" class="button is-success">Save changes</button>
                    </footer>
                </div>
            </div>
            <div class="column is-5">
                <Flashcard></Flashcard>
            </div>
            <div class="column is-1"></div>
        </div>
    </div>
</template>

<script>
import Flashcard from "../Viewing/Flashcard";

export default {
    name: "list-modal",
    props: ["listData"],
    components: { Flashcard },
    data() {
        return {
            name: this.listData.name,
            frontFields: [""],
            backFields: [""],
        };
    },
    methods: {
        renameList() {
            // Send data to parent
            this.$emit("rename", {
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
        isValid() {
            this.frontFields.forEach((field) => {
                if (field == "") {
                    return false;
                }
            });
            this.backFields.forEach((field) => {
                if (field == "") {
                    return false;
                }
            });
            return this.name != "";
        },
    },
    computed: {},
};
</script>

<style scoped>
    .wrapper{
        width: 100%;
    }

    .modal-card{
        width: 100%;
    }
</style>