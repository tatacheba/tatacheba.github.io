<template>
    <v-card
        class="employment-entry"
        variant="text"
        :title="jobs.title"
        :href="jobs.href"
        target="_blank"
    >
        <h4>{{ jobs.qualification }} {{ jobs.years }}</h4>

        <ul>
            <li>
                Manual testing of web/desktop/mobile applications according to
                documentation.
            </li>
            <li>Backend testing using Fiddler/Charles/DevTools tools.</li>
            <li>Creating bug reports in the bug tracking system.</li>
            <li>
                Checking/reproducing reported tickets by assessors-testers on
                different environments.
            </li>
            <li>
                Working with emulators like VirtualOS, Mobile farm, Android
                Studio.
            </li>
            <li>Working with tools like ADB, PowerShell, Linux terminal.</li>
        </ul>
    </v-card>
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
    margin-left: 20px;
}
li {
    margin-bottom: 0;
    padding: 0;
    margin-left: 20px;
    font-style: italic;
    color: #bbbbbb;
}
</style>
