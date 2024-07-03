<template>
    <v-list
        lines="three"
        variant="text"
        v-for="(item, index) in educationData"
        :key="index"
        class="education-item"
    >
        <v-card-title class="text-start">
            <h3>
                <a :href="item.href" target="_blank">
                    {{ item.title }}
                </a>
            </h3></v-card-title
        >
        <v-list-item
            variant="text"
            v-if="
                Array.isArray(item.qualification) &&
                Array.isArray(item.years) &&
                Array.isArray(item.serthref)
            "
        >
            <div v-for="(qual, i) in item.qualification" :key="i">
                <p>
                    {{ qual }} {{ item.years[i] }}
                    <a :href="item.serthref[i]" target="_blank">Certificate</a>
                </p>
            </div>
        </v-list-item>
        <v-list-item
            variant="text"
            :key="n"
            :title="item.title"
            :subtitle="item.qualification"
            v-else
        >
            <p>
                {{ item.qualification }}
                {{ item.years }}
                <a v-if="item.serthref" :href="item.serthref" target="_blank"
                    >Certificate
                </a>
            </p>
        </v-list-item>
    </v-list>
    <v-list lines="three">
        <v-list-item
            v-for="n in 3"
            :key="n"
            :title="'Item ' + n"
            subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit"
        ></v-list-item>
    </v-list>
</template>

<script>
export default {
    name: "EducationContent",
    props: {
        educationData: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style scoped></style>
