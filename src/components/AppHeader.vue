<template>
    <div>
        <h1 class="fade-in">SACCANI<br>CHRISTIAN</h1>
        <div id="social-container" class="fade-in">
            <a href="https://github.com/tuo-username" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/tuo-username/" target="_blank" rel="noopener noreferrer">
                <i class="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="mailto:tuo-email@example.com">
                <i class="fa-regular fa-envelope"></i>
            </a>
            <a href="https://www.instagram.com/tuo-username/" target="_blank" rel="noopener noreferrer">
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
        opacity: 0;
        animation: fadeIn 1s ease-in forwards;
    }
    #social-container {
        margin-top: 1.5rem;
        display: flex;
        gap: 1rem;
        opacity: 0;
        animation: fadeIn 1s ease-in forwards .25s;
        i {
            color: black;
            font-size: 24px;
            font-weight: 500;
            cursor: pointer;
            transition: all .3s linear;
            &:hover {
                color: rgb(115, 115, 115);
            }
        }
    }
    #intro-to-me {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 8rem 0;
        border-bottom: 3px solid black;
        p {
            font-size: 36px;
            font-weight: 500;
            text-align: center;
            max-width: 1120px;
            line-height: 2;
            color: rgb(115, 115, 115);
            opacity: 0;
            animation: fadeIn 1s ease-in forwards .5s;
            span {
                color: black;
            }
        }
    }
</style>
