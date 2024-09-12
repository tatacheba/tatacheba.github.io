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
                    <p v-scroll-to="'#tehnologist'">Technologies and tools</p>
                    <p v-scroll-to="'#verified'">Verified checks</p>
                    <p v-scroll-to="'#computer'">Run tests from the terminal</p>
                    <p v-scroll-to="'#runningtests'">
                        Running Tests in Jenkins
                    </p>
                    <p v-scroll-to="'#reportallurereport'">
                        Report on test results in Allure Report >
                    </p>
                    <p>
                        <a href="#integrationalluretestops"
                            >Integration with Allure TestOps</a
                        >
                    </p>
                    <p>
                        <a href="#notificationstelegrambot"
                            >Notifications in Telegram using a bot</a
                        >
                    </p>
                </blockquote>
            </div>
            <div class="tehnologist">
                <h3><a name="tehnologist">Technologies and tools</a></h3>
                <div class="tehnologistimg">
                    <a href="https://www.jetbrains.com/idea/"
                        ><img
                            src="@/assets/images/logo/intelijidea.svg"
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
                            src="@/assets/images/logo/allurereport.svg"
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
                            src="@/assets/images/logo/restassured.png"
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

            <div class="runningtests">
                <h3>
                    <a name="runningtests">Running Tests in Jenkins</a>
                </h3>

                <img
                    src="@/assets/images/apitestqa/jenkinsproject.jpeg"
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
                    src="@/assets/images/apitestqa/alluremain.jpeg"
                />

                <h3>Tests</h3>

                <img
                    title="Allure Tests"
                    src="@/assets/images/apitestqa/alluretests.jpeg"
                />

                <h3>Graphics</h3>
                <img
                    title="Allure Graphics"
                    src="@/assets/images/apitestqa/alluregraphics.jpeg"
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
                    src="@/assets/images/apitestqa/dashboards.jpeg"
                />

                <h3>Test cases</h3>

                <img
                    title="TestOps Test cases"
                    src="@/assets/images/apitestqa/testcases.jpeg"
                />
            </div>
            <div class="integrationjira">
                <h3>
                    <a name="integrationjira">Integration with Jira</a>
                </h3>
                <img
                    title="Integration with Jira"
                    src="@/assets/images/apitestqa/jiratask.jpeg"
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
                    src="@/assets/images/apitestqa/alluretelegram.jpeg"
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
@import "/src/assets/styles/qapage.css";
</style>
