<template>
    <section class="projects">
        <h2>Projects</h2>
        <h3>QA projects</h3>

        <v-sheet color="#333" rounded="lg" height="200">
            <v-tabs
                v-model="tab"
                :items="tabs"
                align-tabs="start"
                color="white"
                height="60"
                slider-color="red"
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
                        Commodi, ratione debitis quis est labore voluptatibus!
                        Eaque cupiditate minima, at placeat totam, magni
                        doloremque veniam neque porro libero rerum unde
                        voluptatem!
                    </v-tabs-window-item>
                </template>
            </v-tabs>
        </v-sheet>
    </section>
</template>

<script lang="ts">
export default {
    name: "ProjectsList",

    data: () => ({
        : "QA",
        tabs: [
            {
                text: "UI-Auto Nokian tyres",
                value: "tab-1",
            },
            {
                text: "Code of Conduct",
                value: "tab-2",
            },
            {
                text: "MIT License",
                value: "tab-3",
            },
            {
                text: "Security",
                value: "tab-4",
            },
        ],
    }),
};
</script>

<style scoped></style>
