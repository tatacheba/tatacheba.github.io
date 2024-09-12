<template>
    <v-card
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
        <v-card
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
        </v-card>
        <v-card v-else>
            <p>
                {{ item.qualification }}
                {{ item.years }}
                <a v-if="item.serthref" :href="item.serthref" target="_blank"
                    >Certificate
                </a>
            </p>
        </v-card>
    </v-card>
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
