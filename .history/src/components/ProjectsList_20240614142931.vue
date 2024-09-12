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
    <v-sheet color="#0d1117" elevation="3" rounded="lg">
        <v-tabs
            v-model="props"
            :items="tabs"
            align-tabs="center"
            color="white"
            height="60"
            slider-color="#f78166"
        >
            <template v-slot:tab="{ item }">
                <v-tab
                    :prepend-icon="item.icon"
                    :text="item.text"
                    :value="item.value"
                    class="text-none"
                ></v-tab>
            </template>

            <template v-slot:item="{ item }">
                <v-tabs-window-item :value="item.value" class="pa-4">
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
