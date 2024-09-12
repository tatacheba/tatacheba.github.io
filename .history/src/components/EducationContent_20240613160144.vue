<template>
    <section class="education">
        <div
            v-for="(item, index) in educationData"
            :key="index"
            class="education-item"
        >
            <a :href="item.href" target="_blank">
                <h3>{{ item.title }}</h3>
            </a>

            <p>
                {{
                    Array.isArray(item.qualification)
                        ? item.qualification.join(", ")
                        : item.qualification
                }}
            </p>
            <p>
                {{
                    Array.isArray(item.years)
                        ? item.years.join(", ")
                        : item.years
                }}
            </p>
            <div v-if="Array.isArray(item.serthref)">
                <a v-for="(link, i) in item.serthref" :key="i" :href="link"
                    >Certificate {{ i + 1 }}</a
                >
            </div>
            <div v-else>
                <li><a :href="item.serthref">Certificate</a></li>
            </div>
        </div>
    </section>
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
.education-item {
    margin-bottom: 20px;
}
</style>
