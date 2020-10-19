<template>
    <div>
<form>
        <label for="">Editar :</label>
        <input type="checkbox" v-model="edit"><br>
        <label for="">Nombre</label>
        <input type="text" v-model="form.name" :disabled="!edit"><br>

        <label for="">Email</label>
        <input type="text" v-model="form.email" :disabled="!edit"><br>

        <button @click.prevent="editUser" :disabled="!edit">Editar</button>
         <img alt="Welcome logo" src="../assets/loading.gif" v-if="loading">
    </form>
    </div>
</template>

<script>

import {mapGetters,mapState,mapActions} from 'vuex'
export default {
    name: 'EditUsercomp',
    props: ['id'],
    data: function(){
        return {
            form:{
                name:"",
                email:"",
            },
            edit: false,
            loading:false,
        }
    },
    computed: {
        ...mapGetters(['getUser']),
        ...mapState(['users'])
    },
    methods: {
            async setUser() {
            let user = this.getUser(this.id)
            //  console.log(user)
            
            
            if (user === undefined) {
                let resp = await this.fetchIdUser(this.id)
                user = resp.data()
            }
            
            this.form.name = user.name
            this.form.email = user.email 
        },
        editUser(){
            let user = this.form
            user.id = this.id
            this.loading=true
            let response = this.updateUser(user)
            response.then(()=>{
                
                console.log('Usuario actualizado')
                this.loading=false
                this.$router.push("/usuarios")
            }).catch(error=>{
                console.log(error)
        })
        },
        ...mapActions(['fetchIdUser','updateUser'])
    },
    // components: {},
    created(){
        this.setUser();
    }
}
</script>

<style scoped>
    
</style> 