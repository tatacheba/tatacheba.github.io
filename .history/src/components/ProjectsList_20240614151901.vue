<template>
    <v-sheet color="#333" rounded="lg" height="400">
        <div
            v-for="(projectGroup, index) in qaProjectData"
            :key="index"
            class="qa-project-group"
        >
            <v-tabs
                align-tabs="start"
                color="white"
                height="60"
                slider-color="red"
            >
                <!-- Отображение вкладок (tabs) -->
                <template
                    v-for="(project, tabIndex) in projectGroup.projects"
                    :key="tabIndex"
                >
                    <v-tab :title="project.title" class="text-none">{{
                        project.title
                    }}</v-tab>
                    <v-tab-item v-for="item in items" :key="item.id">
                        <!-- Содержимое каждой вкладки -->
                    </v-tab-item>
                </template>
            </v-tabs>
        </div>
    </v-sheet>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { ProjectType } from "../types/ProjectsInterface.ts";

export default defineComponent({
    name: "ProjectsList",
    props: {
        qaProjectData: {
            type: Array as () => ProjectType[],
            required: true,
        },
    },
});
</script>

<style scoped>
.qa-project-group {
    margin-bottom: 20px;
}
</style>
