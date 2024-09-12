<template>
    <section class="employment">
        <h2>Projects</h2>
    </section>
</template>

<script lang="ts">
export default {
    name: "EmploymentContent",
    data() {
        return {
            jobs: {
                href: "https://www.yandex.ru/",
                qualification: "Manual QA",
                title: "Yandex",
                years: "2019-2022",
            },
        };
    },
};
</script>

<style scoped>
.employment-entry ul {
    list-style-type: square;
}
li {
    margin-bottom: 0;
    padding: 0;
}
</style>
