<template>
    <v-card class="project-card">
        <v-card-title class="text-start">
            <h3>{{ qaProjectData[0].dev }} projects</h3>
        </v-card-title>

        <v-tabs v-model="selectedTab" grow class="project-card_tab">
            <v-tab v-for="item in qaProjectData[0].projects" :key="item.text">
                {{ item.title }}
            </v-tab>
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="selectedTab">
                <v-tabs-window-item
                    value="{{item.text}}"
                    v-for="item in qaProjectData[0].projects"
                    :key="item.text"
                >
                    {{ item.text }}
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
.project-card {
    background-color: #333;
    color: #ecdfdf;
    padding-top: 10px;
}
.project-card_tab {
    background-color: #111111;
}
</style>
