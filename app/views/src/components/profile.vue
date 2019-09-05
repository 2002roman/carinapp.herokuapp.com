<template>
    <div>
        <table class = "responsive-table">
         <thead>
            <tr>
                <th v-for="project in projects">
                    {{ project.projectname }}
                </th> 
            </tr>
         </thead>
         <tbody>
            <tr>
                <td v-for="project in projects">
                {{ project.id }}
                </td>
            </tr>
            
            <tr>
               <td v-for="project in projects">
                {{ project.status }}
                </td>
            </tr>

            <tr>
               <td v-for="project in projects">
                <button v-bind:disabled="!project.status" v-on:click="goView">View</button>
                </td>
            </tr>
            
          </tbody>
       </table>
        <button v-on:click="goToCreateProject">Create project</button>       
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
                    vueThis.projects = wes.data
                }catch (e) {
                    console.error(e); 
                }
            }
            go()
        },
        methods:{
            goToCreateProject (){
                 this.$router.push('createProject')
            },
            goView (){
                this.$router.go('https://carinapp.herokuapp.com/controlRobot')
                //  this.$router.push('controlRobot')            
            }
        }
    }    
</script>
<style>
</style>