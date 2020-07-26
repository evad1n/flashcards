<template>
    <div class="modal">
        <div v-on:click="$emit('close-modal')" class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Full History</p>
                <button v-on:click="$emit('close-modal')" class="delete" aria-label="close"></button>
            </header>

            <section class="modal-card-body">
                <ul v-if="history.length > 0" id="full-history-list"></ul>
                <h4 v-else id="history-msg" style="margin-top: 10px;">No history yet!</h4>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: "list-card",
    props: ["name"],
    components: {},
    data() {
        return {
            history: []
        }
    },
    methods: {

    },
    computed: {},
};
</script>

<style scoped>
/*modal stuff*/
.modal-form {
    width: 50%;
}

#full-history {
    height: 80%;
    overflow: auto;
    text-align: center;
}

#full-history-list {
    width: 70%;
    margin: auto;
    border: 2px solid black;
}

#full-history-list li,
#full-history-list li label {
    padding-top: 4px;
    box-sizing: border-box;
    display: block;
    width: 100%;
    height: 50px;
    cursor: pointer;
    font-size: 1.4rem;
}

#full-history-list li:last-of-type {
    border-bottom: none;
}

h4,
h5 {
    text-align: center;
}

.btn-container {
    text-align: center;
    margin-top: 10px;
}

form {
    text-align: center;
}

input {
    margin: auto;
    width: 100%;
}

textarea {
    width: 100%;
    height: 100px;
}
</style>