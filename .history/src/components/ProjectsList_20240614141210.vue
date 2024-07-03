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
                <pre>{{ projectGroup }}}</pre>
            </v-tabs>
            <pre>{{ projectGroup }}}</pre>
        </div>
    </v-sheet>
</template>

<script lang="ts">
// import { defineComponent, ref } from "vue";
import type { Project } from "../types/ProjectsInterface.ts";

export default {
    name: "ProjectsList",
    props: {
        qaProjectData: {
            type: Array as () => Project[],
            required: true,
        },
    },
};
</script>

<style scoped>
.qa-project-group {
    margin-bottom: 20px;
}
</style>
