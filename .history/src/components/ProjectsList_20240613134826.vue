<template>
    <section class="projects">
        <h2>Projects</h2>
        <h3>QA projects</h3>
        <v-card>
            <v-tabs v-model="tab" bg-color="transparent">
                <v-tab value="one">Item One</v-tab>
                <v-tab value="two">Item Two</v-tab>
                <v-tab value="three">Item Three</v-tab>
            </v-tabs>

            <v-card-text>
                <v-tabs-window v-model="tab">
                    <v-tabs-window-item value="one">
                        <v-card class="mx-auto" max-width="344">
                            <v-img
                                height="200px"
                                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                                cover
                            ></v-img>

                            <v-card-title>
                                Top western road trips
                            </v-card-title>

                            <v-card-subtitle>
                                1,000 miles of wonder
                            </v-card-subtitle>

                            <v-card-actions>
                                <v-btn
                                    color="orange-lighten-2"
                                    text="Explore"
                                ></v-btn>

                                <v-spacer></v-spacer>

                                <v-btn
                                    :icon="
                                        show
                                            ? 'mdi-chevron-up'
                                            : 'mdi-chevron-down'
                                    "
                                    @click="show = !show"
                                ></v-btn>
                            </v-card-actions>

                            <v-expand-transition>
                                <div v-show="show">
                                    <v-divider></v-divider>

                                    <v-card-text>
                                        I'm a thing. But, like most politicians,
                                        he promised more than he could deliver.
                                        You won't have time for sleeping,
                                        soldier, not with all the bed making
                                        you'll be doing. Then we'll go with that
                                        data file! Hey, you add a one and two
                                        zeros to that or we walk! You're going
                                        to do his laundry? I've got to find a
                                        way to escape.
                                    </v-card-text>
                                </div>
                            </v-expand-transition>
                        </v-card>
                    </v-tabs-window-item>

                    <v-tabs-window-item value="two"> Two </v-tabs-window-item>

                    <v-tabs-window-item value="three">
                        Three
                    </v-tabs-window-item>
                </v-tabs-window>
            </v-card-text>
        </v-card>

        <v-row>
            <v-col cols="12" md="4">
                <v-card
                    subtitle="This is a card subtitle"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
                    title="This is a title"
                ></v-card>

                <div class="text-center text-caption">Using Props Only</div>
            </v-col>

            <v-col cols="12" md="4">
                <v-card>
                    <template v-slot:title> This is a title </template>

                    <template v-slot:subtitle>
                        This is a card subtitle
                    </template>

                    <template v-slot:text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi, ratione debitis quis est labore voluptatibus!
                    </template>
                </v-card>

                <div class="text-center text-caption">Using Slots Only</div>
            </v-col>

            <v-col cols="12" md="4">
                <v-card>
                    <v-card-item>
                        <v-card-title>AAAAAAAAAA</v-card-title>

                        <v-card-subtitle
                            >This is a card subtitle</v-card-subtitle
                        >
                    </v-card-item>

                    <v-card-text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Commodi, ratione debitis quis est labore voluptatibus!
                    </v-card-text>
                </v-card>

                <div class="text-center text-caption">Using Markup Only</div>
            </v-col>
        </v-row>
    </section>
</template>

<script lang="ts">
export default {
    name: "ProjectsList",

    data: () => ({
        show: false,
        tab: null,
    }),
};
</script>

<style scoped></style>
