<template>
    <div class="card">
        <div class="card-content flip-card">
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
</template>

<script>
export default {
    name: "flashcard",
    props: ["entry"],
    components: {},
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
    created: function () {},
};
</script>

<style scoped>
.move{
    position: relative;
}

.flip-card {
    margin: 50px auto;
    width: 300px;
    height: 300px;
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
    border: solid 1px black;
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