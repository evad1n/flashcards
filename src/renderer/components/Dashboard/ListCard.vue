<template>
    <div class="card column is-one-third" v-on:click="goToViewing">
        <div class="card-content">
            <p class="title">{{ this.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "list-card",
    props: ["name"],
    components: {},
    methods: {
        goToViewing() {
            this.$router.push({ name: 'viewing', params: { table_name: this.name } })
        }
    },
    computed: {},
};
</script>