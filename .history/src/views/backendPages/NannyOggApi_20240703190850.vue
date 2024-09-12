<template>
    <main class="resume-main">
        <header class="header">
            <h2>
                <a target="_blank" href="https://www.nokiantyres.ru/">
                    Nanny Ogg's Recipes API</a
                >
            </h2>
        </header>
        <section class="qauiautonokian">
            <div class="content">
                <blockquote>
                    <h3>Contents:</h3>
                    <p v-scroll-to="'#tehnologist'">Technologies and tools</p>
                    <p v-scroll-to="'#verified'">Verified checks</p>
                    <p v-scroll-to="'#computer'">Run tests from the terminal</p>
                    <p v-scroll-to="'runningtests'">Running Tests in Jenkins</p>
                    <p v-scroll-to="'#reportallurereport'">
                        Report on test results in Allure Report
                    </p>
                    <p v-scroll-to="'#integrationalluretestops'">
                        Integration with Allure TestOps
                    </p>
                    <p v-scroll-to="'#integrationjira'">
                        Integration with Jira
                    </p>
                    <p v-scroll-to="'#notificationstelegrambot'">
                        Notifications in Telegram using a bot
                    </p>
                </blockquote>
            </div>
            <div id="tehnologist" ref="tehnologist">
                <h3>Technologies and tools</h3>
                <div class="tehnologistimg">
                    <img
                        src="@/assets/images/logo/intelijidea.svg"
                        alt="IDEA"
                    />
                    <img src="@/assets/images/logo/java.svg" alt="Java" />
                    <img src="@/assets/images/logo/github.svg" alt="Github" />
                    <img src="@/assets/images/logo/junit5.svg" alt="JUnit 5" />
                    <img src="@/assets/images/logo/gradle.svg" alt="Gradle" />
                    <img
                        src="@/assets/images/logo/selenide.svg"
                        alt="Selenide"
                    />
                    <img
                        src="@/assets/images/logo/selenoid.svg"
                        alt="Selenoid"
                    />
                    <img
                        src="@/assets/images/logo/allurereport.svg"
                        alt="Allure"
                    />
                    <img src="@/assets/images/logo/jenkins.svg" alt="Jenkins" />
                </div>
                <p>
                    In this project, automated tests are written in using
                    Selenide framework for UI testing. Gradle is used for
                    project building. JUnit 5 is utilized as the framework for
                    unit testing. Test execution is performed from Jenkins. It
                    is used for running browsers in Docker Allure Report, Allure
                    TestOps, Jira, Telegram Bot are employed for visualizing
                    test results.
                </p>
            </div>
            <div id="verified">
                <h3>Verified checks</h3>
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
            <div id="computer">
                <h3><a name="computer">Run tests from the terminal</a></h3>
                <p>Local start:</p>
                <div class="terminal">gradle clean <span>test</span></div>
                <p>Remote start:</p>
                <div class="terminal">
                    gradle clean <span>test</span> <br />-Duser=${USER} <br />
                    -Dpassword=${PASSWORD}
                </div>
            </div>

            <div id="runningtests">
                <h3>Running Tests in Jenkins</h3>

                <img
                    src="@/assets/images/uitestqa/jenkinsproject.jpeg"
                    width="800"
                />
            </div>
            <div id="reportallurereport">
                <h3>Report on test results in Allure report</h3>
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
            <div id="integrationalluretestops">
                <h3>>Integration with Allure TestOps</h3>
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
            <div id="integrationjira">
                <h3>
                    <a name="integrationjira">Integration with Jira</a>
                </h3>
                <img
                    title="Integration with Jira"
                    src="@/assets/images/uitestqa/jiratask.jpeg"
                />
            </div>
            <div id="notificationstelegrambot">
                <h3>>Notifications in Telegram using a bot</h3>
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
<style scoped src="@/assets/styles/nanny-ogg-api.css"></style>
