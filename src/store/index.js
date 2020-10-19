import Vue from 'vue'
import Vuex from 'vuex'
import {db} from '../firebase/firebaseDb'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users:[],
  },
  mutations: {
    ADD_USER(state, user){
      state.users.push({
        id:user.id,
        email:user.data().email,
        name: user.data().name,
        
      })
    },
    RESET_USERS(state){
      state.users = []
    }
  },
  actions: {
    fetchUsers({commit}){ 
      db.collection('users').onSnapshot((snap)=>{
        commit('RESET_USERS')
        snap.forEach(doc=>{
          commit('ADD_USER',doc)
        })
      })
    },
    fetchIdUser({},id_user){
      return db.collection('users').doc(id_user).get()
    },
    adduser({},user){
      return db.collection('users').add(user)
    },
    updateUser({},user){
      return db.collection('users').doc(user.id).update(user)
    },
  },
  getters:{
    getUser:(state)=>(id_user)=>{
      return state.users.find(user=>user.id == id_user)
    }
  },
  modules: {
  }
})
