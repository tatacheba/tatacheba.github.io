<script setup lang="ts">
import { ref, onMounted } from "vue";
import type { Recipe } from "@/types/Recipe";

// Инициализация переменной с типом Recipe[]
const recipes = ref<Recipe[]>([]);

onMounted(async () => {
    try {
        const response = await fetch("http://localhost:3000/api/recipes");
        recipes.value = await response.json();
    } catch (error) {
        console.error("Error fetching recipes:", error);
    }
});
</script>

<template>
    <div>
        <h1>Recipes</h1>
        <ul>
            <li v-for="recipe in recipes" :key="recipe.id">
                {{ recipe.name }}
            </li>
        </ul>
    </div>
</template>
