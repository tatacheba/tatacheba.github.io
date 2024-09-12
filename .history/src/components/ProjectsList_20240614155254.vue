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
            <h2 class="font-weight-bold text-h2 text-basil">
                {{ qaProjectData[0].dev }}
                {{ qaProjectData }}
            </h2>
        </v-card-title>

        <v-tabs v-model="tab" bg-color="transparent" color="basil" grow>
            <v-tab
                v-for="item in qaProjectData.project"
                :key="item.title"
                :text="item.text"
                :value="item.text"
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
import { title } from "process";

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
