<template>
    <header class="navbar">
        <div class="container">
            <div class="navbar-content">
                <routerLink class="navbar-logo" to="/">{{ title }}</routerLink>
                <ul class="navbar-list">
                    <li class="navbar-item" v-for="link of links" :key="link.alias">
                        <routerLink class="navbar-link" :to="link.url">{{ link.title }}</routerLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>


<script>

import {app, links} from '@/_config'
// import { RouterLink } from 'vue-router';

export default{
    data(){
        return{
            title: app.title,
            links: links
        }
    }
}

</script>