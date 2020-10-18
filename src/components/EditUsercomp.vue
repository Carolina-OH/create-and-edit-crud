<!-- <template>
    <div>
        <label for="">Editar</label>
        <input type="checkbox" v-model="edit"><br>
        <label>Nombre</label>
        <input v-model="users.name" :disabled="!edit"></input><br>

        <label>Email</label>
        <input v-model="users.email" :disabled="!edit"></input>

        <button @click.prevent="updateUser" :disabled="!edit">Editar</button>

    </div>
</template>

<script>

import {mapState,mapActions} from 'vuex'
export default {
    name: 'EditUsercomp',
    props: ['id'],
    data: function(){
        return {
            users:{
                name:"",
                email:"",
            },
            edit: false
        }
    },
    // computed: {},
    methods: {
        editBook(){
            let user = this.users
            user.id = this.id
            let response = this.updateUser(user)
            response.then(()=>{
                alert('Usuario actualizado')
            }).catch(error=>{
                console.log(error)
        })
        },
        ...mapActions(['updateUser'])
    },
    // components: {},
}
</script>

<style scoped>
    
</style> !-->