<template>
    <div class="modal">
        <div v-on:click="$emit('close-modal')" class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Are you sure?</p>
                <button v-on:click="$emit('close-modal')" class="delete" aria-label="close"></button>
            </header>

            <section class="modal-card-body">
                <div class="content">Do you really want to delete the {{ type}} <strong>{{ name }}</strong>?</div>
            </section>

            <footer class="modal-card-foot">
                <button v-on:click="confirm" class="button is-danger">Yes</button>
                <button v-on:click="$emit('close-modal')" class="button">No</button>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    name: "list-modal",
    props: ["type", "name"],
    components: {},
    data() {
        return {};
    },
    methods: {
        confirm() {
            // Send data to parent
            this.$emit("confirm");
            // Close modal
            this.$emit("close-modal");
        },
    },
    computed: {},
};
</script>

<style scoped>
.modal-card-head {
    text-align: center;
}

.content{
    text-align: center;
}

footer{
    display: flex;
    justify-content:center;
}
</style>