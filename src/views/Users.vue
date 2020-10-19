<!--COMENTARIO!!!
Quería poder editar los usuarios en la misma linea, como se hace al editar los registros en la base de firebase pero
no pude, asi que me conformaba con que me funcionara el checkbox y que editara al apretar el boton de cada linea,
su linea correspondiente, tampoco me funcionó :c y no tengo tiempo para seguir revisandolo sola :c, todavia me queda el
otro desafío T_T!-->

<template>
    <div>
    <h1>Usuarios</h1>   

    <router-link :to="`/usuario`">añadir nuevo usuario</router-link<
<br>
    <ul>
    <li v-for="user in users" :key="user.id">
    <span>Nombre:<router-link :to="`/usuarios/${user.id}`" >{{user.name}}</router-link></span></br>
    <span>Email: {{user.email}}</span></br><br>
    </li>
    </ul>

    </div>
</template>

<script>
//import EditUsercomp from '../components/EditUser
import {mapActions,mapState} from 'vuex'
export default {
    name: 'users-gallery',
    data: function(){
        return {
        }
    },
    computed: {
        ...mapState(['users']),

        },
    methods: {
        ...mapActions(['fetchUsers']),

        
        },
    
    components: {

    },
    created(){
        this.fetchUsers();

    }
}
</script>

<style scoped>
    
</style>
