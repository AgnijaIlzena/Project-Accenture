<template>
    <div id="footer-container">
    <h3>Created by Agnija and Agate</h3>
    <p>Accenture Javascript (Kurzeme) Bootcamp, 2021</p>
    <p>France, Latvia</p>
    </div>
</template>

<script>

export default {
    name: 'Footer',
}
</script>

<style>
#footer-container{
    background-color: #bb8760;
    color: #4f0e0e;
    display: flex;
    font-size: 10pt;
    line-height: 14pt;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 1rem;
    position: static;
}

h3, p {
    margin-bottom: 2px;
}
</style>