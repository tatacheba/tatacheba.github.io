<template>
    <main class="resume-main">
        <header class="resume-header">
            <h1>Chebotar Tatiana</h1>
        </header>
        <section class="profile">
            <p>
                Hi there! I'm Tatiana, a beginner in automated testing, but I
                have a passion for frontend development and other technical
                stuff. I'm confident that my knowledge will help me dive into
                the world of software testing successfully.
            </p>
        </section>
        <ProjectsList />
        <Employment />
        <Education />
    </main>
</template>

<script lang="ts">
import ProjectsList from "./ProjectsList.vue";
import Education from "./EducationContent.vue";
import Employment from "./EmploymentContent.vue";

export default {
    name: "MainContent",
    components: {
        Education,
        Employment,
        ProjectsList,
    },
};
</script>

<style scoped src="@/assets/styles/maincontent.css"></style>
