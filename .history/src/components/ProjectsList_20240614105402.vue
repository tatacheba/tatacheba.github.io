<template>
    <v-sheet color="#333" rounded="lg" height="200">
        <div
            v-for="(item, index) in qaProjectData"
            :key="index"
            class="education-item"
        >
            <v-tabs
                v-model="item.title"
                :items="tabs"
                align-tabs="start"
                color="white"
                height="60"
                slider-color="red"
            >
                <template v-slot:tab="{ item }">
                    <v-tab :value="item.value" class="text-none">
                        {{ item.title }}
                    </v-tab>
                </template>

                <template v-slot:item="{ item }">
                    <v-tabs-window-item :value="item.value" class="pa-4">
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
export default {
    name: "ProjectsList",
    props: {
        qaProjectData: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
