<template>
  <div>
      <h1>Let The Search Begin</h1>
      <div class="flex-container">
          <div class="search">
          <input placeholder="type in here to search" v-model="search" @keyup.enter="searchImg" type="text">
      </div>
        <button @click="searchImg">search</button>
      </div>
      <div class="flex">
          <div class="image" v-for="image in images" :key="image.id">
              <img :src="image.urls.raw + '&w=600&h=600'" alt="">
       </div>
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
                return this.$store.getters.searchTerm
            },
            set (value) {
                this.$store.commit('setSearchTerm', value)
            }
        }
    }

}
</script>

<style>
.search {
    display: flex;
    width: 85%;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    border-radius: 4px;
	box-shadow: inset 0px 3px 5px rgba(255,255,255,0.5), 0px 0px 10px rgba(0,0,0,0.15);
	background: rgb(2,0,36);
background: linear-gradient(45deg, rgba(2,0,36,0) 5%, rgba(255,255,255,.5) 6%, rgba(255,255,255,0) 9%, rgba(255,255,255,.5) 10%, rgba(255,255,255,0) 17%, rgba(255,255,255,.5) 19%, rgba(255,255,255,0) 21%);
	background-size: 150%;
	background-position: right;
    backdrop-filter: blur(5px);
}

.flex-container {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
}


.search input[type="text"] {
  margin: 10px;
  font-family: 'Lobster', cursive;
  border: 0.2px solid transparent;
  color: wheat;
  height: 2rem;
  border-radius: 4px;
  background-color: rgba(37, 36, 36, 0.15);  
}

input[type=text]:focus{
  outline: none;
  box-shadow: 0 0 0 1px rgb(208, 227, 245)
}

::placeholder {
  font-family: 'Lobster', cursive;
}

.image {
    margin: auto;
    margin-top: 2rem;
    justify-content: center;
}

.flex {
    display: flex;
    flex-flow: row wrap;
}

.image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(24, 23, 23, 0.2);
    transition: 0.3s;
    border-radius: 10px;
}

.image img:hover {
    box-shadow: 8px 16px 32px 8px rgba(112, 105, 105, 0.2);
}

p {
    margin: auto;
    font-size: 13px;
}

button {
    width: 120px;
    cursor: pointer;
	border: none;
	font-family: 'Comfortaa', cursive;
	color: rgba(255,255,255,0.5);
	font-size: 20px;
	border-radius: 4px;
	box-shadow: inset 0px 3px 5px rgba(255,255,255,0.5), 0px 0px 10px rgba(0,0,0,0.15);
	background: rgb(2,0,36);
background: linear-gradient(45deg, rgba(2,0,36,0) 5%, rgba(255,255,255,.5) 6%, rgba(255,255,255,0) 9%, rgba(255,255,255,.5) 10%, rgba(255,255,255,0) 17%, rgba(255,255,255,.5) 19%, rgba(255,255,255,0) 21%);
	background-size: 150%;
	background-position: right;
	transition: 1s;
}

button:hover {
	background-position: left;
	color: wheat;
	box-shadow: inset 0px 3px 5px rgba(255,255,255,1), 0px 0px 10px rgba(0,0,0,0.25);
}

button:focus {
	outline: none;
}
</style>