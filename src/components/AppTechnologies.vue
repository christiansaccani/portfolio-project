<template>
    <div id="app-techno-container">
        <h2 class="fade-in">HARD SKILLS</h2>
        <div id="techno-container">
            <img class="run-up" src="../assets/techno/javascript.svg" alt="javascript" />
            <img class="run-up" src="../assets/techno/react.svg" alt="react" />
            <img class="run-up" src="../assets/techno/vuejs.svg" alt="vuejs" />
            <img class="run-up" src="../assets/techno/java.svg" alt="java" />
            <img class="run-up" src="../assets/techno/python.svg" alt="python" />
            <img class="run-up" src="../assets/techno/vuetify.svg" alt="vuetify" />
            <img class="run-up" src="../assets/techno/scss.svg" alt="scss" />
            <img class="run-up" src="../assets/techno/tailwind.svg" alt="tailwind" />
            <img class="run-up" src="../assets/techno/bootstrap.svg" alt="bootstrap" />
            <img class="run-up" src="../assets/techno/mysql.svg" alt="mysql" />
        </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(() => {
    const images = document.querySelectorAll('.run-up');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 200);
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
#app-techno-container {
    margin-top: 4rem;
    padding-bottom: 8rem;
    border-bottom: 3px solid black;
    @media (max-width: 1024px) {
        padding-bottom: 4rem;
    }
    @media (max-width: 600px) {
        margin-top: 2rem;
    }
    
    h2 {
        font-size: 32px;
        margin-bottom: 6rem;
        opacity: 0;
        animation: fadeIn 1s ease-in forwards .75s;
        @media (max-width: 1024px) {
            margin-bottom: 4rem;
        }
        @media (max-width: 600px) {
            margin-bottom: 2rem;
            font-size: 26px;
        }
    }

    #techno-container {
        padding: 0 4rem;
        display: flex;
        justify-content: space-between;

        @media (max-width: 1024px) {
            padding: 0rem;
            flex-wrap: wrap;
        }

        img {
            height: 80px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.4s ease, transform 0.4s ease;

            @media (max-width: 1024px) {
                flex: 0 0 20%;
                margin-bottom: 2rem;
                text-align: center;
            }

            @media (max-width: 600px) {
                flex: 0 0 50%;
            }

            @media (max-width: 492px) {
                height: 60px;
            }

            &.visible {
                opacity: 1;
                transform: translateY(0);
            }

            &:hover {
                transform: translateY(-1rem); /* Effetto "salto" */
                transition: transform 0.3s ease-out;
            }
        }
    }
}
</style>
