<template>
    <v-card
        variant="text"
        class="project-card"
        v-if="projectData && projectData.length"
    >
        <v-card-title class="text-start">
            <h3>{{ projectData[0].dev }} projects</h3>
        </v-card-title>

        <v-tabs
            v-model="selectedTab"
            height="60"
            slider-color="red"
            center-active
        >
            <v-tab v-for="item in projectData[0].projects" :key="item.title">
                {{ item.title }}
            </v-tab>
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="selectedTab">
                <v-tabs-window-item
                    v-for="item in projectData[0].projects"
                    :key="item.title"
                >
                    <v-card class="mx-auto" color="#333" :text="item.text">
                        <a href="htpp://nanny-oggs-cookbook.vercel.app/">
                            <v-btn class="custom-btn" variant="outlined" block>
                                {{ item.title }}
                            </v-btn>
                        </a>
                    </v-card>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { ProjectType } from "../types/ProjectsInterface.ts";

export default defineComponent({
    name: "BackendProject",
    props: {
        projectData: {
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
.v-tabs {
    background-color: #444;
}
.v-icon {
    background-color: #9c4949 !important;
}
</style>
