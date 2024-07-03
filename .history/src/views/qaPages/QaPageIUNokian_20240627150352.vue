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
                    <p><a href="#tehnologist">Technologies and tools</a></p>
                    <p><a href="#verified">Verified checks</a></p>
                    <p><a href="#computer">Run tests from the terminal</a></p>
                    <p><a href="#running_tests">Running Tests in Jenkins</a></p>
                    <p>
                        <a href="#report_allure_report"
                            >Report on test results in Allure Report</a
                        >
                    </p>
                    <p>
                        <a href="#integration_allure_testops"
                            >Integration with Allure TestOps</a
                        >
                    </p>
                    <p><a href="#integration_jira">Integration with Jira</a></p>
                    <p>
                        <a href="#notifications_telegram_bot"
                            >Notifications in Telegram using a bot</a
                        >
                    </p>
                </blockquote>
            </div>
            <div class="tehnologist">
                <h3><a name="tehnologist">Technologies and tools</a></h3>
                <div class="tehnologist_img">
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
                            src="@/assets/images/logo/allure_report.svg"
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
            <div class="verified">
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

            <div class="running_tests">
                <h3>
                    <a name="running_tests">Running Tests in Jenkins</a>
                </h3>

                <img
                    src="@/assets/images/uitestqa/jenkins_project.jpeg"
                    width="800"
                />
            </div>
            <div class="report_allure_report">
                <h3>
                    <a name="report_allure_report">
                        Report on test results in Allure report
                    </a>
                </h3>
                <h3>Main</h3>

                <img
                    title="Allure Overview Dashboard"
                    src="@/assets/images/uitestqa/allure_main.jpeg"
                />

                <h3>Tests</h3>

                <img
                    title="Allure Tests"
                    src="@/assets/images/uitestqa/allure_tests.jpeg"
                />

                <h3>Graphics</h3>
                <img
                    title="Allure Graphics"
                    src="@/assets/images/uitestqa/allure_graphics.jpeg"
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
            <div class="integration_allure_testops">
                <h3>
                    <a name="integration_allure_testops"
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
                    src="@/assets/images/uitestqa/test_cases.jpeg"
                />
            </div>
            <div class="integration_jira">
                <h3>
                    <a name="integration_jira">Integration with Jira</a>
                </h3>
                <img
                    title="Integration with Jira"
                    src="@/assets/images/uitestqa/jira_task.jpeg"
                />
            </div>
            <div class="notifications_telegram_bot">
                <h3>
                    <a name="notifications_telegram_bot"
                        >Notifications in Telegram using a bot</a
                    >
                </h3>
                <img
                    title="Allure Overview Dashboard"
                    src="@/assets/images/uitestqa/allure_telegram.jpeg"
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
