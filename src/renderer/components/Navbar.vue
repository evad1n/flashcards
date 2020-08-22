<template>
    <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <h1>FLASHCARDS</h1>

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
                        <a v-if="!hasNav" v-on:click="$emit('list-modal')" class="button">Create List</a>
                        <router-link v-else to="/dashboard" class="button">Dashboard</router-link>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'navbar',
    props: ['navigation'],
    components: { },
    data() {
        return {
            expandBurger: false
        };
    },
    methods: {
      // test() {
      //   ${'#.navbar-burger'}
      // }
    },
    computed: {
      hasNav() {
        return this.navigation != "none"
      }
    },
  }
</script>

<style scoped>
    h1{
        font-size: 2em;
    }
</style>