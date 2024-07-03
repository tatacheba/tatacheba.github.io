<template>
    <main class="resume-main">
        <header class="header">
            <h2>Test automation project for Wikipedia mobile application</h2>
            <div>
                <h3>Diploma project QA.GURU in</h3>
                <a
                    href="https://github.com/tatacheba/emulatorMobileTests"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><img src="/public/images/github.png" alt="modiletests"
                /></a>
            </div>
        </header>
        <section class="qamodilewiki">
            <div class="content">
                <blockquote>
                    <h3>Contents:</h3>
                    <p><a href="#tehnologist">Technologies and tools</a></p>
                    <p><a href="#verified">Verified checks</a></p>
                    <p><a href="#computer">Run tests from the terminal</a></p>
                    <p><a href="#runningtests">Running Tests in Jenkins</a></p>
                    <p>
                        <a href="#reportallurereport"
                            >Report on test results in Allure Report</a
                        >
                    </p>
                    <p>
                        <a href="#notificationstelegrambot"
                            >Notifications in Telegram using a bot</a
                        >
                    </p>
                    <p>
                        <a href="#videotest">Testvideo</a>
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
                    <a href="https://github.com/allureframework/allure2"
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
                    <a href="https://appium.io"
                        ><img
                            src="@/assets/images/logo/appium.svg"
                            width="auto"
                            height="50"
                            alt="Appium"
                    /></a>
                    <a href="https://restassured.io/"
                        ><img
                            src="@/assets/images/logo/restassured.png"
                            width="auto"
                            height="50"
                            alt="Restassured"
                    /></a>
                    <a href="https://telegram.org/"
                        ><img
                            src="@/assets/images/logo/telegram.svg"
                            width="auto"
                            height="50"
                            alt="Telegram"
                    /></a>
                    <a href="https://www.browserstack.com/"
                        ><img
                            src="@/assets/images/logo/browserstack.svg"
                            width="auto"
                            height="50"
                            alt="Browserstack"
                    /></a>
                </div>
            </div>
            <div class="verified">
                <h3><a name="verified">Verified checks</a></h3>
                Check launch screens and search in the app.
            </div>
            <div class="computer">
                <h3><a name="computer">Run tests from the terminal</a></h3>
                <p>Local start on emulator:</p>
                <div class="terminal">gradle clean test -Ddevice=emulator</div>
                <p>Local startup on a real device:</p>
                <div class="terminal">gradle clean test -Ddevice=real</div>
                <p>Running in Browserstack:</p>
                <div class="terminal">
                    gradle clean test -Ddevice=browserstack
                </div>
            </div>

            <div class="runningtests">
                <h3>
                    <a name="runningtests">Running Tests in Jenkins</a>
                </h3>

                <img
                    src="@/assets/images/mobiletestqa/jenkinsdashboard.png"
                    width="800"
                />
                <h3>Build features in Jenkins:</h3>
                <p>
                    The assembly can be run through Browserstack, Appium, and a
                    real connected phone.
                </p>
            </div>
            <div class="reportallurereport">
                <h3>
                    <a name="reportallurereport">
                        Report on test results in Allure
                    </a>
                </h3>
                <h3>Main</h3>

                <img
                    title="Allure Overview Dashboard"
                    src="@/assets/images/mobiletestqa/alluremainpage.png"
                />

                <h3>Tests</h3>

                <img
                    title="Allure Tests"
                    src="@/assets/images/mobiletestqa/alluretestpage.png"
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
                    src="@/assets/images/mobiletestqa/telegrambot.png"
                />
            </div>
            <div class="videotest">
                <h3>
                    <a name="videotest">Testvideo</a>
                </h3>
                <img
                    title="videotest"
                    src="@/assets/images/mobiletestqa/testvideo.gif"
                />
            </div>
        </section>
    </main>
</template>
<script lang="ts">
export default {
    name: "QaPageMobileWiki",
};
</script>
<style scoped src="@/assets/styles/qapage.css">
/* @import "/src/assets/styles/qapage.cs"; */
</style>
