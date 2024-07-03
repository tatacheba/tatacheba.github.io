<template>
    <div>
        <div v-if="qaProjectData && qaProjectData.length">
            <h3>QA Projects</h3>
            <ul>
                <li v-for="project in qaProjectData" :key="project.dev">
                    {{ project.dev }}
                </li>
            </ul>
            <v-card variant="text" class="project-card">
                <v-card-title class="text-start">
                    <h3>{{ qaProjectData[0].dev }} projects</h3>
                </v-card-title>

                <v-tabs
                    v-model="selectedTab"
                    height="60"
                    slider-color="red"
                    center-active
                >
                    <v-tab
                        v-for="item in qaProjectData[0].projects"
                        :key="item.id"
                    >
                        {{ item.title }}
                    </v-tab>
                </v-tabs>

                <v-card-text>
                    <v-tabs-window v-model="selectedTab">
                        <v-tabs-window-item
                            v-for="item in qaProjectData[0].projects"
                            :key="item.id"
                        >
                            <v-card class="mx-auto" color="#333">
                                <router-link :to="{ path: item.toroute }">
                                    <v-btn
                                        class="custom-btn"
                                        variant="outlined"
                                        block
                                    >
                                        {{ item.title }}
                                    </v-btn>
                                </router-link>
                            </v-card>
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>
            </v-card>
        </div>

        <div v-if="backendProjectData && backendProjectData.length">
            <h3>Backend Projects</h3>
            <ul>
                <li v-for="project in backendProjectData" :key="project.dev">
                    {{ project.dev }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import type { ProjectType } from "../types/ProjectsInterface.ts";

export default defineComponent({
    name: "ProjectsList",
    props: {
        qaProjectData: {
            type: Array as () => ProjectType[],
            required: false,
            default: () => [],
        },
        backendProjectData: {
            type: Array as () => ProjectType[],
            required: false,
            default: () => [],
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
