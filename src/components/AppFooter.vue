<template>
    <div id="app-footer-container">
        <p>
            © 2024
        </p>
        <a href="mailto:christian.saccani99@gmail.com" id="mail">
            CHRISTIAN.SACCANI99@GMAIL.COM
        </a>
        <p id="update">
            LAST UPDATED 02.10.24
        </p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
#app-footer-container {
    margin-top: 6rem;
    padding-bottom: 6rem;
    border-bottom: 3px solid black;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    p {
        letter-spacing: 2px;
        cursor: default;
    }

    #mail {
        font-size: 14px;
        cursor: pointer;
        padding: .2rem;
        transition: background-color .3s linear;
        border-radius: 4px;
        text-decoration: none;
        color: inherit;
        letter-spacing: 2px;

        &:hover {
            background-color: whitesmoke;
        }
    }

    #update {
        color: rgb(175, 175, 175);;
    }
}
</style>
