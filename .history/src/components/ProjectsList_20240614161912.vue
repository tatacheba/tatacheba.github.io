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
            <v-tab-item
                v-for="item in qaProjectData[0].projects"
                :key="item.text"
            >
                <v-card color="basil" flat>
                    <v-card-text>
                        <a :href="item.toroute" target="_blank"
                            >sddddd{{ item.text }}</a
                        >
                    </v-card-text>
                </v-card>
            </v-tab-item>
        </v-tabs-items>
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
