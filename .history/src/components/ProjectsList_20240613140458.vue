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
                    <v-tabs-window-item
                        :value="item.value"
                        class="pa-4"
                        bg-color="#0c0c0c"
                    >
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
        tab: "tab-1",
        tabs: [
            {
                icon: "mdi-book-open-page-variant",
                text: "Readme",
                value: "tab-1",
            },
            {
                icon: "mdi-handshake-outline",
                text: "Code of Conduct",
                value: "tab-2",
            },
            {
                icon: "mdi-license",
                text: "MIT License",
                value: "tab-3",
            },
            {
                icon: "mdi-shield-lock-outline",
                text: "Security",
                value: "tab-4",
            },
        ],
    }),
};
</script>

<style scoped></style>
