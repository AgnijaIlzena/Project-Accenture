<template>
    <div class="dropdown">
        <ul>
            <li
            v-for="option in options"
            :key="option.title"
            >
                <a :href="option.url">{{option.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'Dropdown',
        props: {
            options: Array,
        },
    }
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@400;700&display=swap');

    .dropdown {
        position: absolute;
        top: 4rem;
        right: 0;
        width: 20rem;
        background: #FFF;
        box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: -2px 3px 5px 0px rgba(0,0,0,0.75);
        z-index: 1;
    }

    .dropdown > ul {
        list-style: none;
        line-height: 2rem;
        margin: 0;
        padding: 0;
    }

    .dropdown > ul > li {
        padding: 0.5rem 1rem;
    }

    .dropdown > ul > li >a:hover {
        color: #bb7860;
        cursor: pointer;
    }

    .dropdown > ul > li > a {
        background-color: white;
        color: #4f0e0e;
        text-decoration: none;
    }    
</style>