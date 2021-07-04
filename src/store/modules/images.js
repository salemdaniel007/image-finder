import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey: 'BPMeaTgBArcukCqGAa5sxEOokYqh7zetMK0t7C6vXoQ',
});

const state = {
    images: [],
    searchTerm: null
};

const getters = { 
    images: state => state.images,
    searchTerm: state => state.searchTerm
};

const actions = {
    searchImg({ commit }) {
        const payload = state.searchTerm
      unsplash.search.getPhotos({
        query: payload,
        page: 1,
        perPage: 10,
        orientation: 'portrait',
      }).then(result => {
        if (result.errors) {
          // handle error here
          console.log('error occurred: ', result.errors[0]);
        } else {
          // handle success here
          const photo = result.response.results;
          console.log(photo);
          commit('setImage', photo)
        }
      });
        
    }
};

const mutations =  {
    setSearchTerm: (state, payload) => {state.searchTerm = payload},
    setImage: (state, result) => {state.images = result}
};

export default {
    state,
    getters,
    actions,
    mutations
};