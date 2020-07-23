<template>
    <input class="modal-state" id="history-modal" type="checkbox">
    <div class="modal">
        <label class="modal-bg" for="history-modal"></label>
        <div id="full-history" class="modal-body modal-form">
            <label class="btn-close" for="history-modal">X</label>
            <h2 class="modal-title">Full History</h2>
            <ul id="full-history-list">
            </ul>
            <h4 id="history-msg" style="margin-top: 10px;">No history yet!</h4>
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