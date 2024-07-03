<!-- MainContent.vue -->
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
        <v-divider>
            <section class="projects">
                <h2>Projects</h2>
                <ProjectsList :qaProjectData="qaProject" />
                <!-- <h3>Backend project</h3>
            <ProjectsList :qaProject="qaProject" />
            <h3>Frontend projects</h3>
            <ProjectsList :qaProject="qaProject" /> -->
            </section></v-divider
        >
        <v-divider>
            <section class="employment">
                <h2>Employment</h2>
                <EmploymentContent /></section
        ></v-divider>
        <v-divider>
            <section class="education">
                <h2>Education</h2>
                <EducationContent :educationData="educationData" /></section
        ></v-divider>
    </main>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import EducationContent from "../components/EducationContent.vue";
import EmploymentContent from "../components/EmploymentContent.vue";
import educationData from "../data/main/educationData.json";
import qaProject from "../data/main/qaProjectData.json";

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
            qaProject,
        };
    },
};
</script>

<style scoped src="@/assets/styles/main-content.css"></style>
