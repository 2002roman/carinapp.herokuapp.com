<template>
    <div>
        <ul>
            <li v-for="project in projects">
            {{ project.projectname }}
            </li>
        </ul>
    </div>
</template>
<script>
const axios = require('axios')
axios.defaults.withCredentials = true
    export default{
        data(){
            return { 
                projects: []
            }
        },
        mounted(){
            var vueThis = this
            async function go() {
                try {
                    const wes = await axios('https://carinapp.herokuapp.com/user/projects')
                    vueThis.projects = wes.data.result
                }catch (e) {
                    console.error(e); 
                }
            }
            go()
        },
        methods:{
        }
    }    
</script>
<style>
</style>