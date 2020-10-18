<template>
    <div>
        <label>Añadir Usuario</label><br>
        <label>Nombre</label>
        <input v-model="users.name"></input><br>

        <label>Email</label>
        <input v-model="users.email"></input>

        <button @click="createUser">Registrar</button>
    </div>
</template>

<script>

import {mapState,mapActions} from 'vuex'
export default {
    name: 'Userscomp',
    // props: {},
    data: function(){
        return {
            users:{
                name:"",
                email:"",
            }
        }
    },
    // computed: {},
    methods: {
        createUser(){
            this.adduser(this.users).then(()=>{
                alert('Usuario registrado exitosamente')
            }).catch(error=>{
                console.log(error)
            })
        },
        ...mapActions(['adduser'])
    },
    // components: {},
}
</script>

<style scoped>
    
</style>