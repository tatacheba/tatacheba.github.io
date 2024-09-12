<template>
    <!-- <v-card variant="text" class="project-card">
        <v-card-title class="text-start">
            <h3>{{ qaProjectData[0].dev }} projects</h3>
        </v-card-title>

        <v-tabs
            v-model="selectedTab"
            bg-color="transparent"
            color="white"
            height="60"
            slider-color="#f78166"
        >
            <v-tab
                bg-color="transparent"
                color="white"
                v-for="item in qaProjectData[0].projects"
                :key="item.text"
            >
                {{ item.title }}
            </v-tab>
        </v-tabs>

        <v-card-text>
            <v-tabs-window v-model="selectedTab">
                <v-tabs-window-item
                    value="{{item.text}}"
                    v-for="item in qaProjectData[0].projects"
                    :key="item.text"
                >
                    <v-card
                        class="mx-auto"
                        color="#333"
                        width="100%"
                        :text="item.text"
                        :title="item.title"
                    >
                        <template v-slot:actions>
                            <v-btn
                                append-icon="mdi-chevron-right"
                                :text="item.title"
                                variant="outlined"
                                block
                            ></v-btn>
                        </template>
                    </v-card>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
    </v-card> -->

    <v-sheet color="#0d1117" elevation="3" rounded="lg">
        <v-tabs
            v-model="tab"
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
