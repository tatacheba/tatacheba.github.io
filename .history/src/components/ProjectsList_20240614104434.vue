<template>
    <v-sheet color="#333" rounded="lg" height="200">
        <v-tabs
            v-model="selectedTab"
            :items="tabs"
            align-tabs="start"
            color="white"
            height="60"
            slider-color="red"
        >
            <template v-slot:item="{ item }">
                <v-tab
                    :text="item.text"
                    :value="item.value"
                    class="text-none"
                ></v-tab>
            </template>
        </v-tabs>

        <v-tabs-items v-model="selectedTab">
            <v-tab-item
                v-for="item in tabs"
                :key="item.value"
                :value="item.value"
                class="pa-4"
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, ratione debitis quis est labore voluptatibus! Eaque
                cupiditate minima, at placeat totam, magni doloremque veniam
                neque porro libero rerum unde voluptatem!
            </v-tab-item>
        </v-tabs-items>
    </v-sheet>
</template>

<script lang="ts">
export default {
    name: "ProjectsList",
    props: {
        qaProject: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            selectedTab: null,
            tabs: this.qaProjects.map((project, index) => ({
                value: `tab-${index + 1}`,
                text: project.title,
            })),
        };
    },
    console.log(this);
};
</script>

<style scoped></style>
