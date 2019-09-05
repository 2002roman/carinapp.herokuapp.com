<template>
  <div>
      <div class="row">
<form class="col s12">
  <div class="row" v-for="(input,index) in formCardOption.formOption">
    <div class="input-field col s4">
      <input v-bind:type="input.type" class="validate" v-bind:placeholder="input.label" v-model="formCardOption.formModels[index].model">
    </div>
  </div>
  <a class="waves-effect waves-light btn-large" v-on:click='send'>Button</a>
</form>
</div>
  </div>
</template>

<script>
 const axios = require('axios')
axios.defaults.withCredentials = true
    var vueThis
  export default{
    data(){
      return {
          formCardOption:{
              cardTitle: "CreateProject",
              cardEndText: "",
              formOption: [
                  {
                      name: "projectName",
                      type: "text",
                      label: "Project Name"
                  },
                  {
                      name: "footSizePart1",
                      type: "number",
                      label: "First part foot size"
                  },
                  {
                      name: "footSizePart2",
                      type: "number",
                      label: "Second part foot size"
                  },
                  {
                      name: "footSizePart3",
                      type: "number",
                      label: "Thirty part foot size"
                  },
                  {
                      name: "motorSpeed",
                      type: "number",
                      label: "Motor speed"
                  },
                  {
                      name: "motorTorque",
                      type: "number",
                      label: "Motor torque"
                  }
              ],
              sendButtonValue: "Create project",
              redirectParams: {
                  name: "Profile",
                  link: "profile"
              },
              formModels:[
                {
                    name: "projectName",
                    model:""

                },
                {
                    name: "footSizePart1",
                    model:""
                },
                {
                    name: "footSizePart2",
                    model:""                    
                },
                {
                    name: "footSizePart3",
                    model:""                    
                },
                {
                    name: "motorSpeed",
                    model:""
                },
                {
                    name: "motorTorque",
                    model:""
                }
              ]
          }
      }
    },
    methods:{
        send(){
            axios.post('https://carinapp.herokuapp.com/user/createProject',this.formCardOption.formModels).then(function (response) {
                
                })
            }
        },
  }
</script>

<style scoped>
  
</style>
