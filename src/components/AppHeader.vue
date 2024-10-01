<template>
    <div>
        <h1>SACCANI<br>CHRISTIAN</h1>
        <div id="social-container">
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
    </div>
</template>






<script setup>
// Logica del tuo header se necessaria
</script>

<style lang="scss" scoped>

h1 {
    line-height: 1.2;
    letter-spacing: 4px;
}

#social-container {
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;

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

</style>