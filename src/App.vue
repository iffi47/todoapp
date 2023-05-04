<template>
  <!-- App.vue -->
  <!-- <router-view :to="/auth"></router-view> -->
  <v-app id="app">
    <v-navigation-drawer v-if="store.state.isAuthenticated" v-model="drawer" app>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6 mt-4"> Task Taker</v-list-item-title>
          <v-list-item-subtitle> todo machine </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list dense nav>
        <v-list-item v-for="(  item, i  ) in   items  " :key="i" :value="item" :to="item.value">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>

          <v-list-item-title v-text="item.title"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar v-if="store.state.isAuthenticated" color="teal-darken-4" height="80" image="stars.jpg">
      <template v-slot:image>
        <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
      </template>

      <template v-slot:prepend>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Task Taker</v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn> -->
      <v-btn color="red" @click="logout">Logout</v-btn>
    </v-app-bar>

    <v-main>
      <!--  -->
      <RouterView></RouterView>
    </v-main>
  </v-app>
</template>
<script setup>
import { useStore } from 'vuex';
import { ref, onMounted, } from 'vue'
import { useRouter } from 'vue-router'
// import { RouterView } from 'vue-router'
const store = useStore()
const router = useRouter()
onMounted(() => {

  if (localStorage.getItem('authToken')) {
    console.log(store.state.isAuthenticated);
    // store.state.isAuthenticated = true
    console.log(!!localStorage.getItem('authToken'));
    store.commit('setAuthenticated', !!localStorage.getItem('authToken'))
    router.push('/')
  } else {
    store.commit('setAuthenticated', !!localStorage.getItem('authToken'))
    router.push('/auth')

    console.log(store.state.isAuthenticated);
  }
});
// const authentication = computed(() => store.getters.isAuthenticated)
const logout = function () {
  localStorage.removeItem('authToken')
  store.dispatch('logout')

  // store.commit('logout')
  router.push('/auth')
}

// const isAuthenticated = computed(() => store.getters.isAuthenticated)
const drawer = ref(null)
let items = ref([
  { title: 'TODO', icon: 'mdi-format-list-checks', value: '/' },

  { title: 'About', icon: 'mdi-help-box', value: '/about' }
]);
</script>
<style scoped></style>
