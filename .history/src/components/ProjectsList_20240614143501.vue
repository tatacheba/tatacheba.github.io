<template>
    <v-sheet color="#333" rounded="lg" height="400">
        <div
            v-for="(item, index) in qaProjectData"
            :key="index"
            class="qa-project-group"
        >
            <v-tabs
                align-tabs="start"
                color="white"
                height="60"
                slider-color="red"
            >
                <template v-slot:tab="{ item }">
                    <v-tab
                        :title="item.title"
                        :text="item.text"
                        class="text-none"
                    ></v-tab>
                </template>
                <pre>{{ projectGroup.projects }}}</pre>
            </v-tabs>
            <!-- <pre>{{ projectGroup }}}</pre> -->
        </div>
    </v-sheet>
</template>

<script lang="ts">
import type { ProjectType } from "../types/ProjectsInterface.ts";

export default {
    name: "ProjectsList",
    props: {
        qaProjectData: {
            type: Array as () => ProjectType[],
            required: true,
        },
    },
};
</script>
