<template v-for="(project, tabIndex) in projectGroup.projects" :key="tabIndex">
    <v-tab :title="project.title" class="text-none">{{ project.title }}</v-tab>
    <v-tabs-item :key="tabIndex">
        <a :href="project.toroute" target="_blank">{{ project.text }}</a>
    </v-tabs-item>
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
