<template>
    <v-sheet color="#333" rounded="lg" height="400">
        <div
            v-for="(projectGroup, index) in qaProjectData"
            :key="index"
            class="qa-project-group"
        >
            <v-tabs
                v-model="selectedTab[index]"
                :items="projectGroup.projects"
                align-tabs="start"
                color="white"
                height="60"
                slider-color="red"
            >
                <template v-slot:tab="{ item }">
                    <v-tab :value="item.text" class="text-none">
                        {{ item.title }}
                    </v-tab>
                </template>

                <template v-slot:item="{ item }">
                    <v-tabs-window-item :value="item.text" class="pa-4">
                        <a :href="item.toroute" target="_blank">{{
                            item.title
                        }}</a>
                    </v-tabs-window-item>
                </template>
            </v-tabs>
        </div>
    </v-sheet>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import  ProjectType  from "../types/ProjectsInterface";

export default defineComponent({
    name: "ProjectsList",
    props: {
        qaProjectData: {
            type: Array as () => ProjectType[],
            required: true,
        },
    },
    setup(props) {
        const selectedTab = ref<string[]>(
            props.qaProjectData.map((group) => group.projects[0].text)
        );
        return { selectedTab };
    },
});
</script>

<style scoped>
.qa-project-group {
    margin-bottom: 20px;
}
</style>
