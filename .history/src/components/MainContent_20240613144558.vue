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
        <EmploymentContent />
        <EducationContent :educationData="educationData" />
    </main>
</template>

<script>
import ProjectsList from "./ProjectsList.vue";
import EducationContent from "./EducationContent.vue";
import EmploymentContent from "./EmploymentContent.vue";
import educationData from "./educationData.json";

export default {
    name: "MainContent",
    components: {
        EducationContent,
        EmploymentContent,
        ProjectsList,
    },
    data() {
        return {
            educationData,
        };
    },
};
</script>

<style scoped src="@/assets/styles/main-content.css">
/* Добавьте стили по необходимости */
</style>
