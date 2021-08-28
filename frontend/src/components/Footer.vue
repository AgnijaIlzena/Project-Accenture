<template>
    <div>
     <Contacts/>

    </div>
</template>

<script>
import Contacts from './Contact.vue'

export default {
    name: 'Footer',
    props: {
            subscription: String,
            logo: String
    },
    components: {
        Contacts,
    }
}
</script>

<style>
#footer-container{
    background-color: #bb8760;
    color: #4f0e0e;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    padding: 1rem;
}
</style>