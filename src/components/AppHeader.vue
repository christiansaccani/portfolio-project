<template>
    <div>
        <h1 class="fade-in">SACCANI<br>CHRISTIAN</h1>
        <div id="social-container" class="fade-in">
            <a href="https://github.com/christiansaccani" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/christian-saccani-a9445a208/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="mailto:christian.saccani99@gmail.com" id="mail">
                <i class="fa-regular fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/christian_saccani/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-instagram"></i>
            </a>
        </div>
        <div id="intro-to-me">
            <p class="fade-in">
                Passionate about software and web development, I bring my international experience to craft innovative and optimized solutions, 
                working together towards a sustainable future with efficient code that <span>reduces environmental impact</span>
            </p>
        </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
    h1 {
        line-height: 1.2;
        letter-spacing: 4px;
        opacity: 1;
        animation: fadeIn 1s ease-in forwards;
    }
    #social-container {
        margin-top: 1.2rem;
        display: flex;
        gap: 1rem;
        opacity: 1;
        animation: fadeIn 1s ease-in forwards .25s;
        i {
            color: black;
            font-size: 24px;
            font-weight: 500;
            cursor: pointer;
            padding: .3rem;
            transition: background-color .3s linear;
            border-radius: 24px;
            &:hover {
                background-color: white;
            }
        }
    }
    #intro-to-me {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 8rem 0;
        border-bottom: 3px solid black;

        @media (max-width: 1024px) {
            padding: 4rem 0;
        }

        @media (max-width: 600px) {
            padding: 2rem 0;
        }

        p {
            font-size: 36px;
            font-weight: 500;
            text-align: center;
            max-width: 1120px;
            line-height: 2;
            color: rgb(115, 115, 115);
            opacity: 1;
            animation: fadeIn 1s ease-in forwards .5s;

            @media (max-width: 1024px) {
                font-size: 32px;
            }
            @media (max-width: 600px) {
                font-size: 22px;
            }
            @media (max-width: 492px) {
                font-size: 18px;
            }
            span {
                color: black;
            }
        }
    }
</style>
