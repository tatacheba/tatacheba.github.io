<template>
    <main class="resume-main">
        <header class="resume-header">
            <h1>Chebotar Tatiana</h1>
        </header>
        <section class="profile">
            <p>
                Hi! My name is Tatiana Chebotar, and I am looking for a job in
                the field of test automation. I am a QA engineer with 3 years of
                experience in testing, specializing in manual testing of web,
                desktop, and mobile applications, with foundational knowledge in
                automation. I have experience in creating and running test
                cases, as well as testing databases using Fiddler and Postman. I
                am also skilled in preparing bug reports. Proficient in
                programming languages (Java, JavaScript) and frameworks (Gradle,
                Appium, Selenide, JUnit5, REST Assured, React, Vue), as well as
                CI/CD tools (Allure, Docker, Jenkins, GitHub). I am eager to
                further develop my skills in automation testing.
            </p>
        </section>
        <v-divider></v-divider>
        <section class="projects">
            <h2>Projects</h2>
            <ProjectsList :projectData="qaProject" />
            <BackendProjects :projectData="backendProject" />
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
// Components
import ProjectsList from "../components/ProjectsList.vue";
import EducationContent from "../components/EducationContent.vue";
import EmploymentContent from "../components/EmploymentContent.vue";
import BackendProjects from "@/components/BackendProjects.vue";

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
        BackendProjects,
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
