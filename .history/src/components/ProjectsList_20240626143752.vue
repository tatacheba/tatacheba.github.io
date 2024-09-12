<template>
    <v-sheet color="#0d1117" elevation="3" rounded="lg">
        <v-tabs
            v-model="selectedTab"
            :items="qaProjectData"
            align-tabs="center"
            color="white"
            height="60"
            slider-color="#f78166"
        >
            <template v-slot:tab="{ item }">
                <!-- <v-tab
                    :label="item.projects"
                    :value="item.projects"
                    class="text-none"
                ></v-tab> -->
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

<style scoped></style>
