<template>
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <p class="title">{{ this.name }}</p>
            </div>
            <div class="flip-card-back">
                <div class="button-list">
                    <button v-on:click="goToViewing" class="button">VIEW</button>
                    <button v-on:click="goToEditing" class="button">EDIT</button>
                    <button v-on:click="emitRename" class="button">RENAME</button>
                    <button v-on:click="emitDelete" class="button">DELETE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "list-card",
    props: ["name"],
    components: {},
    data() {
        return {};
    },
    methods: {
        goToViewing() {
            this.$router.push({
                name: "viewing",
                params: this.name,
            });
        },
        goToEditing() {
            this.$router.push({
                name: "editing",
                params: this.name,
            });
        },
        emitRename() {
            this.$emit("rename-list", this.name);
        },
        emitDelete() {
            this.$emit("delete-list", this.name);
        },
    },
    computed: {},
};
</script>

<style scoped>
.title {
    width: 100%;
    height: 100%;
    position: relative;
    top: 40%;
}

.button-list {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

button {
    width: 60%;
    margin: auto;
}

.flip-card {
    margin: 5vh auto;
    width: 25vw;
    height: 30vh;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    border: solid 2px #bbbbbb;
    border-radius: 5px;
}

.flip-card-front {
    background-color: rgb(250, 250, 250);
}

.flip-card-back {
    background-color: rgb(250, 250, 250);
    transform: rotateY(180deg);
}
</style>