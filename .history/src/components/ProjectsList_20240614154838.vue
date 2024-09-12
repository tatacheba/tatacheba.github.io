<!-- <template>
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

                <template
                    v-for="(project, tabIndex) in projectGroup.projects"
                    :key="tabIndex"
                >
                    <v-tab class="text-none">{{ project.title }}</v-tab>
                </template>
            </v-tabs>
        </div>
    </v-sheet>
</template> -->
<template>
    <v-card color="basil">
        <v-card-title class="text-center justify-center py-6">
            <h1 class="font-weight-bold text-h2 text-basil">{{ props.dev }}</h1>
        </v-card-title>

        <v-tabs
            v-model="qaProjectData"
            bg-color="transparent"
            color="basil"
            grow
        >
            <v-tab
                v-for="item in items"
                :key="item"
                :text="item"
                :value="item"
            ></v-tab>
        </v-tabs>

        <v-tabs-window v-model="tab">
            <v-tabs-window-item v-for="item in items" :key="item" :value="item">
                <v-card color="basil" flat>
                    <v-card-text>dddd</v-card-text>
                </v-card>
            </v-tabs-window-item>
        </v-tabs-window>
    </v-card>
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
