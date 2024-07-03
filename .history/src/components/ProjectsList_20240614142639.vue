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
                <!-- <pre>{{ projectGroup }}}</pre> -->
            </v-tabs>
            <!-- <pre>{{ projectGroup }}}</pre> -->
        </div>
    </v-sheet>

    <template>
        <v-card>
            <v-tabs v-model="tab" bg-color="primary">
                <v-tab value="one">Item One</v-tab>
                <v-tab value="two">Item Two</v-tab>
                <v-tab value="three">Item Three</v-tab>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one"> One </v-tabs-window-item>

                    <v-tabs-window-item value="two"> Two </v-tabs-window-item>

                    <v-tabs-window-item value="three">
                        Three
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>
    </template>
</template>

<script lang="ts">
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
</scrip>

<style scoped>
.qa-project-group {
    margin-bottom: 20px;
}
</style>
