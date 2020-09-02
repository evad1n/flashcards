<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <div class="navbar-item">
                <img src="../assets/cropped.png" width="64px" height="64px" />
                <h1>FLASHCARDS</h1>
            </div>

            <a
                v-on:click="expandBurger = !expandBurger"
                v-bind:class="{'is-active': expandBurger}"
                role="button"
                class="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div v-bind:class="{'is-active': expandBurger}" class="navbar-menu">
            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <!-- <router-link to="/splash">Go to splash</router-link> -->
                        <router-link v-if="navigation=='viewing'" to="/editing" class="button">Edit</router-link>
                        <router-link v-if="navigation=='editing'" to="/viewing" class="button">View</router-link>
                        <a
                            v-if="!hasNav"
                            v-on:click="$emit('list-modal')"
                            class="button"
                        >Create List</a>
                        <router-link v-else to="/dashboard" class="button">Dashboard</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "navbar",
    props: ["navigation"],
    components: {},
    data() {
        return {
            expandBurger: false,
        };
    },
    methods: {

    },
    computed: {
        hasNav() {
            return this.navigation != "none";
        },
    },
};
</script>

<style scoped>
h1 {
    font-size: 30px;
    height: 50px;
}

.navbar-item{
    padding: 0;
}

.navbar-item img{
    max-height: none;
    padding: 0 5%;
}

.buttons a{
    margin-left: 2%;
}
</style>