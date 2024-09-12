<template>
    <div class="nanny-ogg-api">
        <h1>Nanny Ogg's Recipes</h1>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <div class="book-container">
                <div class="book">
                    <div
                        v-for="(recipe, index) in currentRecipe"
                        :key="index"
                        class="page"
                        :class="{ active: index === currentPageIndex }"
                    >
                        <h2>{{ recipe.title }}</h2>
                        <p><strong>Servings:</strong> {{ recipe.servings }}</p>
                        <h3>Ingredients:</h3>
                        <ul>
                            <li
                                v-for="ingredient in recipe.ingredients"
                                :key="ingredient.name"
                            >
                                {{ ingredient.quantity
                                }}{{ ingredient.unit || ""
                                }}{{ ingredient.name }}
                                <span v-if="ingredient.optional"
                                    >(optional)</span
                                >
                            </li>
                        </ul>
                        <h3>Instructions:</h3>
                        <ol>
                            <li
                                v-for="instruction in recipe.instructions"
                                :key="instruction"
                            >
                                {{ instruction }}
                            </li>
                        </ol>
                        <h3>Notes:</h3>
                        <ul>
                            <li v-for="note in recipe.notes" :key="note">
                                {{ note }}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="nav-button left" @click="goToPreviousPage">
                    &lt;
                </div>
                <div class="nav-button right" @click="goToNextPage">&gt;</div>
            </div>
        </div>
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
