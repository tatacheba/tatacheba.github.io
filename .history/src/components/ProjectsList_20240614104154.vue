<template>
    <v-sheet color="#333" rounded="lg" height="200">
        <v-tabs
            v-model="dev"
            :items="tabs"
            align-tabs="start"
            color="white"
            height="60"
            slider-color="red"
        >
            <!-- <template v-slot:tab="{ item }">
                <v-tab
                    :prepend-icon="item.icon"
                    :text="item.text"
                    :value="item.value"
                    class="text-none"
                ></v-tab>
            </template> -->

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
};
console.log(this);
</script>

<style scoped></style>
