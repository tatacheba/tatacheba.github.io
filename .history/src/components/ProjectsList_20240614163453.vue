<template>
    <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
            <h2 class="font-weight-bold text-h2 text-basil">
                {{ qaProjectData[0].dev }}
            </h2>
        </v-card-title>

        <v-tabs v-model="selectedTab" bg-color="transparent" color="basil" grow>
            <v-tab v-for="item in qaProjectData[0].projects" :key="item.text">
                {{ item.title }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="selectedTab">
            <v-tabs-item
                v-for="item in qaProjectData[0].projects"
                :key="item.text"
            >
                <v-card color="000" b-color="#4a4a4a" flat>
                    <v-card-text>
                        <a :href="item.toroute" target="_blank"
                            >dsds{{ item.text }}</a
                        >
                    </v-card-text>
                </v-card>
            </v-tabs-item>
        </v-tabs-items>
        <v-card-text>
            <v-tabs-window v-model="selectedTab">
                <v-tabs-window-item value="{{item.text}}">
                    One
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { ProjectType } from "../types/ProjectsInterface.ts";

export default defineComponent({
    name: "ProjectsList",
    props: {
        qaProjectData: {
            type: Array as () => ProjectType[],
            required: true,
        },
    },
    setup() {
        const selectedTab = ref(0); // Инициализация выбранной вкладки
        return { selectedTab };
    },
});
</script>

<style scoped>
.qa-project-group {
    margin-bottom: 20px;
}
</style>
