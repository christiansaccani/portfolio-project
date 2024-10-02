<template>
    <div id="app-work-container">
        <h2>JOBS</h2>
        <div id="work-container">
            <div class="work-card-right">
                <div>
                    <h3>
                        Catering Service
                    </h3>
                    <p>
                        I did the redesign of a catering service website, 
                        focusing on creating a more engaging and intuitive user experience through a sleek, 
                        responsive design that highlights the client’s offerings. 
                    </p>
                    <span>
                        not online yet
                    </span>            
                </div>
                <img class="fade-up" src="../assets/catering-project.png" alt="catering-project" />
            </div>  
            <hr>
            <div class="work-card-left">
                <img class="fade-up" src="../assets/boolivery-project.png" alt="boolivery-project" />
                <div>
                    <h3 class="txt-right">
                        Boolivery Project
                    </h3>
                    <p class="txt-right">
                        I led the front-end design of my final project, 
                        focusing on crafting a sleek and responsive interface that enhances user engagement 
                        while delivering an intuitive experience tailored to the project’s objectives.
                    </p>
                    <span class="txt-right">
                        local project
                    </span>            
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const images = document.querySelectorAll('.fade-up');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    images.forEach(image => {
        observer.observe(image);
    });
});
</script>

<style lang="scss" scoped>
#app-work-container {
    margin-top: 4rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid black;
    h2 {
        font-size: 32px;
        margin-bottom: 2rem;
    }
    #work-container {
        padding: 0 2rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        hr {
            width: 80%;
            height: 3px;
            background-color: rgb(175, 175, 175);
            border: none;
        }
        .work-card-right, .work-card-left {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 3px solid rgb(175, 175, 175);
            padding: 4rem;
            margin-top: 4rem;
            margin-bottom: 4rem;
            height: 600px;
            border-top: none;
            border-bottom: none;
            div {
                width: 30%;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                .txt-right {
                    text-align: end;
                }
                h3 {
                    font-size: 32px;
                }
                p {
                    font-size: 20px;
                    font-weight: 500;
                    line-height: 2;
                }
                span {
                    font-size: 18px;
                    color: green;
                    text-decoration: underline;
                    text-underline-offset: 5px;
                }
            }
            img {
                width: 100%;
                max-width: 40vw;
                transition: opacity 1s ease, transform 1s ease;
                opacity: 0;
                transform: translateY(20px);
            }
            img.visible {
                opacity: 1;
                transform: translateY(0);
            }
        }
    }
}
</style>
