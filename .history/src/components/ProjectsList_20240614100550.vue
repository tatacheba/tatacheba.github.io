<template>
    <v-sheet color="#333" rounded="lg" height="200">
        <v-tabs
            v-model=""
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
        qaProjectData: {
            type: Array,
            required: true,
        },
    },
};
console.log(this);
</script>

<style scoped></style>
