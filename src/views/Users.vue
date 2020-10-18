<!--COMENTARIO!!!
Quería poder editar los usuarios en la misma linea, como se hace al editar los registros en la base de firebase pero
no pude, asi que me conformaba con que me funcionara el checkbox y que editara al apretar el boton de cada linea,
su linea correspondiente, tampoco me funcionó :c y no tengo tiempo para seguir revisandolo sola :c, todavia me queda el
otro desafío T_T!-->

<template>
    <div>
    <h1>Usuarios</h1>   
    <userscomponent></userscomponent>
    <input type="checkbox" v-model="edit"><br>
    <ul>
    <li v-for="user in users" :key="user.email">
    <label>Nombre: </label>
    <input v-model="user.name" :disabled="!edit"><button @click.prevent="EditUser" :disabled="!edit">Editar</button></br>
    <label>Email: </label>
    <input v-model="user.email":disabled="!edit"><button @click.prevent="EditUser" :disabled="!edit">Editar</button></br><br>
    </li>
    </ul>

    </div>
</template>

<script>
import CreateUserscomp from '../components/CreateUserscomp.vue';
//import EditUsercomp from '../components/EditUser
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
    name: 'users-gallery',
     props: ['id'],
   
    data: function(){
        return {
            
            edit:false
        }
    },
    computed: {
        ...mapState(['users']),
        ...mapGetters(['getuser'])
        },
    methods: {
        ...mapActions(['fetchUsers','fetchIduser','updateUser']),

        async setUser(){
        let user = this.getuser(this.users.id)
        console.log(user)
        if(user === undefined){
            let resp = await this.fetchIduser(this.id)
            user = resp.data()
        }
        this.state.users.name = user.name
        this.state.users.email = user.email

        },
        EditUser(){
            let user = this.state.users
            user.id = this.id
            let response = this.updateUser(user)
            response.then(()=>{
                alert('Usuario actualizado')
            }).catch(error=>{
                console.log(error)
        })
        },
    },
    components: {
        'userscomponent':CreateUserscomp
    },
    created(){
        this.fetchUsers();
        this.setUser();
    }
}
</script>

<style scoped>
    
</style>
