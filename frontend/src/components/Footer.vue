<template>
    <div id="footer-container">
    <h3>Created by Agnija and Agate</h3>
    <p>Accenture Javascript (Kurzeme) Bootcamp, 2021</p>
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
    font-size: 8pt;
    line-height: 10pt;
    flex-direction: column;
    align-items: center;
    list-style: none;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
}

h3, p {
    margin-bottom: 2px;
}
</style>