<template>
    <v-list
        lines="three"
        variant="text"
        bg-color="#333"
        color="primary"
        v-for="(item, index) in educationData"
        :key="index"
        class="education-item"
    >
        <v-list-item
            variant="text"
            :title="item.title"
            :href="item.href"
            target="_blank"
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
            :key="item.title"
            :title="item.title"
            :href="item.href"
            target="_blank"
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

<style scoped>
p a {
    color: #bbbbbb !important;
}
p a:hover {
    color: red !important;
}
</style>
