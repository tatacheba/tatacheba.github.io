a
<template>
    <main class="resume-main">
        <header class="header">
            <h2>
                UI-testing automation project for
                <a target="_blank" href="https://www.nokiantyres.ru/"
                    >NOKIAN TYRES</a
                >
            </h2>
            <div>
                <h3>Diploma project QA.GURU in</h3>
                <a
                    href="https://github.com/tatacheba/autotestForNokianTyres"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                        src="/public/images/github.png"
                        alt="autotestForNokianTyres"
                /></a>
            </div>
        </header>
        <section class="qauiautonokian">
            <div class="content">
                <blockquote>
                    <h3>Contents:</h3>
                    <p v-scroll-to="'#tehnologist'">Technologies and tools</p>
                    <p v-scroll-to="'#verified'">Verified checks</p>

                    <p>
                        <router-link to="#computer"
                            >Run tests from the terminal</router-link
                        >
                    </p>
                    <p>
                        <router-link to=" name: runningtests"
                            >Running Tests in Jenkins</router-link
                        >
                    </p>
                    <p>
                        <router-link to="#reportallurereport"
                            >Report on test results in Allure
                            Report</router-link
                        >
                    </p>
                    <p>
                        <router-link to="#integrationalluretestops"
                            >Integration with Allure TestOps</router-link
                        >
                    </p>
                    <p>
                        <router-link to="#integrationjira"
                            >Integration with Jira</router-link
                        >
                    </p>
                    <p>
                        <router-link to="#notificationstelegrambot"
                            >Notifications in Telegram using a bot</router-link
                        >
                    </p>
                </blockquote>
            </div>
            <div id="tehnologist" ref="tehnologist">
                <h3><a>Technologies and tools</a></h3>
                <div class="tehnologistimg">
                    <a href="https://www.jetbrains.com/idea/"
                        ><img
                            src="@/assets/images/logo/intelijidea.svg"
                            alt="IDEA"
                    /></a>
                    <a href="https://www.java.com/"
                        ><img src="@/assets/images/logo/java.svg" alt="Java"
                    /></a>
                    <a href="https://github.com/"
                        ><img
                            src="@/assets/images/logo/github.svg"
                            alt="Github"
                    /></a>
                    <a href="https://junit.org/junit5/"
                        ><img
                            src="@/assets/images/logo/junit5.svg"
                            alt="JUnit 5"
                    /></a>
                    <a href="https://gradle.org/"
                        ><img
                            src="@/assets/images/logo/gradle.svg"
                            alt="Gradle"
                    /></a>
                    <a href="https://selenide.org/"
                        ><img
                            src="@/assets/images/logo/selenide.svg"
                            alt="Selenide"
                    /></a>
                    <a href="https://aerokube.com/selenoid/"
                        ><img
                            src="@/assets/images/logo/selenoid.svg"
                            alt="Selenoid"
                    /></a>
                    <a href="https://github.com/allure-framework/allure2"
                        ><img
                            src="@/assets/images/logo/allurereport.svg"
                            alt="Allure"
                    /></a>
                    <a href="https://www.jenkins.io/"
                        ><img
                            src="@/assets/images/logo/jenkins.svg"
                            alt="Jenkins"
                    /></a>
                </div>
                <blockquote>
                    <p>
                        In this project, automated tests are written in using
                        Selenide framework for UI testing. Gradle is used for
                        project building. JUnit 5 is utilized as the framework
                        for unit testing. Test execution is performed from
                        Jenkins . is used for running browsers in Docker Allure
                        Report, Allure TestOps, Jira, Telegram Bot are employed
                        for visualizing test results.
                    </p>
                </blockquote>
            </div>
            <div id="verified">
                <h3><a name="verified">Verified checks</a></h3>
                <ul>
                    <li>
                        ✓ Verifying the transition to the advanced guarantee
                        information page.
                    </li>
                    <li>
                        ✓ Checking the transition from the page &quot;Advanced
                        Guarantee&quot; to https://marketplace.nokiantyres.ru/
                    </li>
                    <li>✓ Check the Advanced Guarantee Activation Page.</li>
                    <li>✓ Check list of tyres with indefinite warranty.</li>
                    <li>
                        Parametrized tests:
                        <ul>
                            <li>✓ Bus center selection;</li>
                            <li>✓ Showroom selection.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="computer">
                <h3><a name="computer">Run tests from the terminal</a></h3>
                <p>Local start:</p>
                <div class="terminal">gradle clean <span>test</span></div>
                <p>Remote start:</p>
                <div class="terminal">
                    gradle clean <span>test</span> <br />-Duser=${USER} <br />
                    -Dpassword=${PASSWORD}
                </div>
            </div>

            <div class="runningtests">
                <h3>
                    <a name="runningtests">Running Tests in Jenkins</a>
                </h3>

                <img
                    src="@/assets/images/uitestqa/jenkinsproject.jpeg"
                    width="800"
                />
            </div>
            <div class="reportallurereport">
                <h3>
                    <a name="reportallurereport">
                        Report on test results in Allure report
                    </a>
                </h3>
                <h3>Main</h3>

                <img
                    title="Allure Overview Dashboard"
                    src="@/assets/images/uitestqa/alluremain.jpeg"
                />

                <h3>Tests</h3>

                <img
                    title="Allure Tests"
                    src="@/assets/images/uitestqa/alluretests.jpeg"
                />

                <h3>Graphics</h3>
                <img
                    title="Allure Graphics"
                    src="@/assets/images/uitestqa/alluregraphics.jpeg"
                />

                <h3>Example video about passing tests</h3>

                <img
                    title="Selenoid Video"
                    src="@/assets/images/uitestqa/video2.gif"
                    width="100%"
                    height="auto"
                    alt="video"
                />
            </div>
            <div class="integrationalluretestops">
                <h3>
                    <a name="integrationalluretestops"
                        >Integration with Allure TestOps</a
                    >
                </h3>
                <h3>Dashboards</h3>

                <img
                    title="TestOps dashboards"
                    src="@/assets/images/uitestqa/dashboards.jpeg"
                />

                <h3>Test cases</h3>

                <img
                    title="TestOps Test cases"
                    src="@/assets/images/uitestqa/testcases.jpeg"
                />
            </div>
            <div class="integrationjira">
                <h3>
                    <a name="integrationjira">Integration with Jira</a>
                </h3>
                <img
                    title="Integration with Jira"
                    src="@/assets/images/uitestqa/jiratask.jpeg"
                />
            </div>
            <div class="notificationstelegrambot">
                <h3>
                    <a name="notificationstelegrambot"
                        >Notifications in Telegram using a bot</a
                    >
                </h3>
                <img
                    title="Allure Overview Dashboard"
                    src="@/assets/images/uitestqa/alluretelegram.jpeg"
                />
            </div>
        </section>
    </main>
</template>
<script lang="ts">
export default {
    name: "QaPageIUNokian",
};
</script>
<style scoped src="@/assets/styles/qapage.css">
/* @import "/src/assets/styles/qapage.css"; */
</style>
