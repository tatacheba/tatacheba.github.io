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
                    <p v-scroll-to="'#tehnologist'">Technologies and tools</p>
                    <p v-scroll-to="'#verified'">Verified checks</p>
                    <p v-scroll-to="'#computer'">Run tests from the terminal</p>
                    <p v-scroll-to="'#runningtests'">
                        Running Tests in Jenkins
                    </p>
                    <p v-scroll-to="'#reportallurereport'">
                        Report on test results in Allure Report
                    </p>
                    <p v-scroll-to="'#notificationstelegrambot'">
                        Notifications in Telegram using a bot
                    </p>
                    <p v-scroll-to="'#videotest'">Testvideo</p>
                </blockquote>
            </div>
            <div id="tehnologist">
                <h3><a name="tehnologist">Technologies and tools</a></h3>
                <div class="tehnologistimg">
                    <img
                        src="@/assets/images/logo/intelijidea.svg"
                        width="50"
                        height="50"
                        alt="IDEA"
                    /><img
                        src="@/assets/images/logo/java.svg"
                        width="50"
                        height="50"
                        alt="Java"
                    /><img
                        src="@/assets/images/logo/github.svg"
                        width="50"
                        height="50"
                        alt="Github"
                    /><img
                        src="@/assets/images/logo/junit5.svg"
                        width="50"
                        height="50"
                        alt="JUnit 5"
                    /><img
                        src="@/assets/images/logo/gradle.svg"
                        width="50"
                        height="50"
                        alt="Gradle"
                    /><img
                        src="@/assets/images/logo/allurereport.svg"
                        width="50"
                        height="50"
                        alt="Allure"
                    />
                    <img
                        src="@/assets/images/logo/jenkins.svg"
                        width="50"
                        height="50"
                        alt="Jenkins"
                    />
                    <img
                        src="@/assets/images/logo/appium.svg"
                        width="auto"
                        height="50"
                        alt="Appium"
                    />
                    <img
                        src="@/assets/images/logo/restassured.svg"
                        width="auto"
                        height="50"
                        alt="Restassured"
                    />
                    <img
                        src="@/assets/images/logo/telegram.svg"
                        width="auto"
                        height="50"
                        alt="Telegram"
                    />
                    <img
                        src="@/assets/images/logo/browserstack.svg"
                        width="auto"
                        height="50"
                        alt="Browserstack"
                    />
                </div>
            </div>
            <div id="verified">
                <h3><a name="verified">Verified checks</a></h3>
                Check launch screens and search in the app.
            </div>
            <div id="computer">
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
            <div id="runningtests">
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
            <div id="reportallurereport">
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
            <div id="notificationstelegrambot">
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
            <div id="videotest">
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
<style scoped src="@/assets/styles/qapage.css"></style>
