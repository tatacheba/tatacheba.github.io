<template>
    <div v-if="qaProjectData">
        <h3>QA Projects</h3>
        <ul>
            <li v-for="project in qaProjectData" :key="project.id">
                {{ project.name }}
            </li>
        </ul>
    </div>
    <div v-if="backendProjectData">
        <h3>Backend Projects</h3>
        <ul>
            <li v-for="project in backendProjectData" :key="project.id">
                {{ project.name }}
            </li>
        </ul>
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
