<template>
    <v-sheet color="#0d1117" elevation="3" rounded="lg">
        <v-tabs
            v-model="selectedTab"
            :items="mappedProjects"
            align-tabs="center"
            color="white"
            height="60"
            slider-color="#f78166"
        >
            <template v-slot:tab="{ item }">
                <v-tab
                    :label="item.projects.title"
                    :value="item.projects.text"
                    class="text-none"
                ></v-tab>
            </template>

            <template v-slot:item="{ item }">
                <v-tabs-window-item :item="item" class="pa-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi, ratione debitis quis est labore voluptatibus! Eaque
                    cupiditate minima, at placeat totam, magni doloremque veniam
                    neque porro libero rerum unde voluptatem!
                </v-tabs-window-item>
            </template>
        </v-tabs>
    </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import type { ProjectType } from "../types/ProjectsInterface.ts";

export default defineComponent({
    name: "ProjectsList",
    props: {
        qaProjectData: {
            type: Array as () => ProjectType[],
            required: true,
        },
    },
    setup(props) {
        const selectedTab = ref(0); // Инициализация выбранной вкладки

        const mappedProjects = computed(() => {
            return props.qaProjectData.map((project) => ({
                projects: project.projects,
                title: project.projects.title, // Assuming 'projectName' is the property you want to use as the label for the tab
            }));
        });

        return { selectedTab, mappedProjects };
    },
});
</script>

<style scoped></style>
