<template>
    <div class="resume-sidebar">
        <router-link to="/">
            <div class="profile-quote">
                <img src="/public/images/red.jpg" /></div
        ></router-link>
        <div class="contact-info">
            <h2>Contacts</h2>
            <div>
                <img
                    src="/public/images/location.png"
                    alt=""
                    srcset=""
                    width="20px"
                    height="20px"
                />
                Podgorica, Montenegro
            </div>
            <div>
                <img
                    src="/public/images/email.png"
                    alt=""
                    srcset=""
                    width="20px"
                    height="20px"
                />
                <a href="mailto:tanya.cheba12@gmail.com"
                    >tanya.cheba12@gmail.com</a
                >
            </div>
            <div>
                <img
                    src="/public/images/telegram.png"
                    alt=""
                    srcset=""
                    width="20px"
                    height="20px"
                />
                <a href="tg://resolve?domain=tatianacheb">@tatianacheb</a>
            </div>
            <div>
                <img
                    src="/public/images/github.png"
                    alt=""
                    srcset=""
                    width="20px"
                    height="20px"
                />
                <a href="https://github.com/tatacheba">tatacheba</a>
            </div>
        </div>

        <div class="skills">
            <h2>Skills</h2>
            <ul>
                <li>
                    AutoQA: Java(JUnit,TestNG), Selenium, Cucumber, <br />
                    Postman, Jest, Cypress,<br />
                    Playwright, Gradle, NPM, Git
                </li>
                <li>
                    Development: HTML, CSS,<br />
                    JS (Vue, React, Node), Java
                </li>
                <li>
                    Other: Photoshop, Figma,<br />
                    Illustrator, AutoCad,<br />
                    AD Inventor 3D, 3DMaya <br />
                </li>
            </ul>
        </div>

        <div class="project" id="project">
            <h2>Projects</h2>
            <div
                v-for="(item, index) in projects"
                :key="index"
                class="arrow-container"
                @click="toggleAccordion(index)"
            >
                {{ item.title }}
                <div
                    class="arrow"
                    :style="
                        ({
                            transform: item.open
                                ? 'rotate(0deg)'
                                : 'rotate(90deg)',
                        },
                        { height: item.open ? '0' : '100%' })
                    "
                ></div>
                <ul :class="item.title.toLowerCase()" v-show="item.open">
                    <router-link :to="{ path: item.torouter[0] }">
                        <li>{{ item.subtitle[0] }}</li>
                    </router-link>

                    <router-link :to="{ path: item.torouter[1] }">
                        <li>{{ item.subtitle[1] }}</li>
                    </router-link>

                    <router-link :to="{ path: item.torouter[2] }">
                        <li>{{ item.subtitle[2] }}</li>
                    </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            projects: [
                {
                    title: "QA",
                    open: false,
                    subtitle: [
                        "UI-Auto Nokian tyres",
                        "API-Auto Nokian tyres",
                        "Autotest Mobile Wiki",
                    ],
                    torouter: ["/qaiunokian", "/qaapinokian", "/qamobilewiki"],
                },
                {
                    title: "Backend",
                    open: false,
                    subtitle: ["API Book Nanny Ogg", "As", "Ai"],
                    torouter: ["/nannyoggapi", "/qaapinokian", "/qamobilewiki"],
                },
                {
                    title: "Web",
                    open: false,
                    subtitle: ["res", "es", "ki"],
                    torouter: ["/qaiunokian", "/qaapinokian", "/qamobilewiki"],
                },
            ],
        };
    },
    methods: {
        toggleAccordion(index) {
            this.projects[index].open = !this.projects[index].open;
        },
    },
};
</script>

<style scoped>
.contact-info p,
.skills ul {
    margin-bottom: 0.5rem;
    text-align: start;
}
.contact-info div {
    display: flex;
    height: 100%;
    gap: 10px;
    align-items: center;
    align-content: start;
}
.contact-info div a {
    padding-bottom: 3px;
}
.profile-quote img {
    width: 14rem;
    height: auto;
    border-radius: 5px;
    pointer-events: none;
}

#project div,
#project div:hover ul li {
    border-radius: 5px;
}
#project div ul li:hover {
    background-color: #272727 !important;
}

.project-entry ul li {
    text-align: end;
    height: auto;
    background-color: #444;
}

.project-entry {
    position: relative;
    background: #444;
    margin-bottom: 0;
    padding: 0;
}
.skills li {
    background-color: #444;
}
.project li {
    text-align: end;
    height: auto;
    background-color: #444;
}
.project ul a {
    text-decoration: none;
}

.arrow-container {
    position: relative;
    cursor: pointer;
    padding: 0.5rem;
    background-color: #444;
    transition: 0.3s ease-in-out;
    margin-bottom: 1rem;
}
.arrow-container:hover {
    background-color: #272727 !important;
}

.arrow {
    position: absolute;
    top: 1px;
    right: 0px;
    height: 100%;
    width: 24px;
    border-radius: 2px;
    background-color: red !important;
    transition: 0.3s ease-in-out;
}

.resume-sidebar {
    background-color: #0c0c0c;
    color: #fff;
    padding: 20px;
    position: relative;
    transition: margin-left 1s ease 0s;
    right: 0;
}

.resume-sidebar:hover {
    margin-left: -20px;
}
.resume-sidebar {
    grid-column: 2;
    right: 0;
    height: 100%;
}
</style>
