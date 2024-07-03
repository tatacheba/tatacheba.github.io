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
            <div
                v-if="
                    Array.isArray(item.qualification) &&
                    Array.isArray(item.years) &&
                    Array.isArray(item.serthref)
                "
            >
                <div v-for="(qual, i) in item.qualification" :key="i">
                    <p>
                        {{ qual }} {{ item.years[i] }}
                        <a :href="item.serthref[i]">Certificate</a>
                    </p>
                </div>
            </div>
            <div v-else>
                <p>
                    {{ item.qualification }}
                    {{ item.years }}
                    <a v-if="item.serthref" :href="item.serthref"
                        >Certificate
                        <img src="/public/images/diploma.png" alt="" srcset=""
                    /></a>
                </p>
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
education-item > p > a {
    border: 2px solid black;
    margin-top: 5px;
    height: 20px;
}
</style>
