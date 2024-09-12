<template>
    <main class="resume-main">
        <header class="resume-header">
            <h1>Chebotar Tatiana</h1>
            <!-- <ScrollButton /> -->
        </header>
        <section class="profile">
            <p>
                Certainly! Here's a corrected version of your text: Hi there!
                I'm Tatiana, a beginner in automated testing, but I have a
                passion for frontend development and other technical areas. I'm
                confident that my knowledge will help me dive into the world of
                software testing successfully.
            </p>
        </section>
        <v-divider></v-divider>
        <section class="projects">
            <h2>Projects</h2>
            <ProjectsList :projectData="qaProject" />
            <BackendProject :projectData="backendProject" />
        </section>
        <v-divider></v-divider>
        <section class="employment">
            <h2>Employment</h2>
            <EmploymentContent />
        </section>
        <v-divider></v-divider>
        <section class="education">
            <h2>Education</h2>
            <EducationContent :educationData="educationData" />
        </section>
    </main>
</template>

<script>
import ProjectsList from "../components/ProjectsList.vue";
import EducationContent from "../components/EducationContent.vue";
import EmploymentContent from "../components/EmploymentContent.vue";
import BackendProject from "../components/BackendProject.vue";

// Mock data imports from JSON files
import educationData from "../data/main/educationData.json";
import qaProject from "../data/main/qaProjectData.json";
import backendProject from "../data/main/backendProjectData.json";

export default {
    name: "MainContent",
    components: {
        EducationContent,
        EmploymentContent,
        ProjectsList,
        BackendProject,
    },
    data() {
        return {
            educationData,
            qaProject,
            backendProject,
        };
    },
};
</script>

<style scoped src="@/assets/styles/main-content.css"></style>
