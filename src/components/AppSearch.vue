<template>
  <div>
      <h1>let's search something...</h1>
      <div class="search">
          <p>image search</p>
          <input v-model="search" @keyup.enter="searchImg" type="text">
      </div>
      <div class="image" v-for="image in images" :key="image.id">
              <img :src="image.urls.regular" alt="">
       </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'AppSearch',
    methods: {
        ...mapActions(['searchImg'])
    },
    computed: {
        images () {
            return this.$store.getters.images
        },
        search: {
            get () {
                return this.$store.state.searchTerm
            },
            set (value) {
                this.$store.commit('setImage', value)
            }
        }
    }

}
</script>

<style>
.search {
    padding: 2px 16px;
    padding-top:8px;
    margin: auto;
    width: 100%;    
    height: 70px;
    background-color: white;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 4px;
}

.search:hover {
    box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
}

.search input[type="text"] {
  border: 1.4px solid #edeef0;
  height: 2rem;
  border-radius: 4px;
  width: 100%;
  margin: auto;
  justify-content: center;
}

input[type=text]:focus{
  outline: none;
  box-shadow: 0 0 0 1px rgb(208, 227, 245)
}

.image {
    margin: auto;
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 50vw);
    grid-gap: 1.5rem;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

p {
    margin: auto;
    font-size: 13px;
}
</style>