<template>
    <v-card variant="text" class="project-card">
        <v-card-title class="text-start">
            <h3>{{ ProjectData[0].dev }} projects</h3>
        </v-card-title>

        <v-tabs
            v-model="selectedTab"
            height="60"
            slider-color="red"
            center-active
        >
            <v-tab v-for="item in ProjectData[0].projects" :key="item.text">
                {{ item.title }}
            </v-tab>
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="selectedTab">
                <v-tabs-window-item
                    v-for="item in ProjectData[0].projects"
                    :key="item.id"
                >
                    <v-card class="mx-auto" color="#333" :text="item.text">
                        <router-link :to="{ path: item.toroute }">
                            <v-btn
                                class="custom-btn"
                                :text="item.title"
                                variant="outlined"
                                block
                            >
                            </v-btn>
                        </router-link>
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
    name: "ProjectsList",
    props: {
        ProjectData: {
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
