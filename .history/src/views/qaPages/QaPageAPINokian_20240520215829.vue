<template>
    <main class="resume-main">
        <header class="header">
            <h2>
                API-testing automation project for
                <a target="_blank" href="https://www.nokiantyres.ru/"
                    >NOKIAN TYRES</a
                >
            </h2>
            <div>
                <h3>Diploma project QA.GURU in</h3>
                <a
                    href="https://github.com/tatacheba/apiTestForNokianTyres"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img
                        src="/public/images/github.png"
                        alt="apiTestForNokianTyres"
                /></a>
            </div>
        </header>
        <section class="qaapiautonokian">
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
                            src="@/assets/images/logo/intelij_idea.svg"
                            width="50"
                            height="50"
                            alt="IDEA"
                    /></a>
                    <a href="https://www.java.com/"
                        ><img
                            src="@/assets/images/logo/java.svg"
                            width="50"
                            height="50"
                            alt="Java"
                    /></a>
                    <a href="https://github.com/"
                        ><img
                            src="@/assets/images/logo/github.svg"
                            width="50"
                            height="50"
                            alt="Github"
                    /></a>
                    <a href="https://junit.org/junit5/"
                        ><img
                            src="@/assets/images/logo/junit5.svg"
                            width="50"
                            height="50"
                            alt="JUnit 5"
                    /></a>
                    <a href="https://gradle.org/"
                        ><img
                            src="@/assets/images/logo/gradle.svg"
                            width="50"
                            height="50"
                            alt="Gradle"
                    /></a>
                    <a href="https://github.com/allure-framework/allure2"
                        ><img
                            src="@/assets/images/logo/allure_report.svg"
                            width="50"
                            height="50"
                            alt="Allure"
                    /></a>
                    <a href="https://www.jenkins.io/"
                        ><img
                            src="@/assets/images/logo/jenkins.svg"
                            width="50"
                            height="50"
                            alt="Jenkins"
                    /></a>
                    <a href="https://github.com/google/gson"
                        ><img
                            src="@/assets/images/logo/gson.png"
                            width="auto"
                            height="50"
                            alt="GSON"
                    /></a>
                    <a href="https://rest-assured.io/"
                        ><img
                            src="@/assets/images/logo/rest-assured.png"
                            width="auto"
                            height="50"
                            alt="Rest-assured"
                    /></a>
                    <a href="https://telegram.org/"
                        ><img
                            src="@/assets/images/logo/telegram.svg"
                            width="auto"
                            height="50"
                            alt="Telegram"
                    /></a>
                </div>
            </div>
            <div class="verified">
                <h3><a name="verified">Verified checks</a></h3>
                <ul>
                    <li>
                        ✓ Search tyres by width/profile/diameter parameters.
                    </li>
                    <li>
                        ✓ Retrieval of tyres under the 'Indefinite Guarantee'.
                    </li>
                    <li>
                        Parametrized tests:
                        <ul>
                            <li>✓ Add product to cart.</li>
                            <li>✓ Check the shopping cart.</li>
                            <li>✓ Removing the product from the cart.</li>
                            <li>
                                ✓ Check that the cart is empty and the goods
                                have been removed.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="computer">
                <h3><a name="computer">Run tests from the terminal</a></h3>
                <p>Local start:</p>
                <div class="terminal">gradle clean <span>test</span></div>
            </div>

            <div class="running_tests">
                <h3>
                    <a name="running_tests">Running Tests in Jenkins</a>
                </h3>

                <img
                    src="@/assets/images/apitestqa/jenkins_project.jpeg"
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
                    src="@/assets/images/apitestqa/allure_main.jpeg"
                />

                <h3>Tests</h3>

                <img
                    title="Allure Tests"
                    src="@/assets/images/apitestqa/allure_tests.jpeg"
                />

                <h3>Graphics</h3>
                <img
                    title="Allure Graphics"
                    src="@/assets/images/apitestqa/allure_graphics.jpeg"
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
                    src="@/assets/images/apitestqa/dashboards.jpeg"
                />

                <h3>Test cases</h3>

                <img
                    title="TestOps Test cases"
                    src="@/assets/images/apitestqa/test_cases.jpeg"
                />
            </div>
            <div class="integration_jira">
                <h3>
                    <a name="integration_jira">Integration with Jira</a>
                </h3>
                <img
                    title="Integration with Jira"
                    src="@/assets/images/apitestqa/jira_task.jpeg"
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
                    src="@/assets/images/apitestqa/allure_telegram.jpeg"
                />
            </div>
        </section>
    </main>
</template>
<script lang="ts">
export default {
    name: "QaPageAPINokian",
};
</script>
<style scoped src="@/assets/styles/qapage.css">
/* @import "/src/assets/styles/qapage.css"; */
</style>
