<template>
    <div class="nanny-ogg-api">
        <h1>Nanny Ogg's Recipes</h1>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "NannyOggApi",
    data() {
        return {
            recipes: [],
            loading: true,
            currentPageIndex: 0,
        };
    },
    methods: {
        async fetchRecipes() {
            try {
                const response = await axios.get(
                    "http://localhost:3000/api/recipes"
                );
                this.recipes = response.data;
            } catch (error) {
                console.error("Error fetching recipes:", error);
            } finally {
                this.loading = false;
            }
        },

        goToPreviousPage() {
            console.log("Going to previous page");
            if (this.currentPageIndex > 0) {
                this.currentPageIndex--;
                console.log("Current page index:", this.currentPageIndex);
            }
        },

        goToNextPage() {
            console.log("Going to next page");
            if (this.currentPageIndex < this.recipes.length - 1) {
                this.currentPageIndex++;
                console.log("Current page index:", this.currentPageIndex);
            }
        },
    },
    mounted() {
        this.fetchRecipes();
    },
    computed: {
        currentRecipe() {
            return [this.recipes[this.currentPageIndex]];
        },
    },
};
</script>

<style scoped src="@/assets/styles/nanny-ogg-api.css"></style>
