import axios from "axios";

const state = {
    images: [],
    searchTerm: ''
};

const getters = { 
    images: state => state.images
};

const actions = {
    async searchImg({ commit }, payload) {
        const response = await axios.get(
            `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${payload}&client_id=lvXVqeXA4ivpWG3izzLnCWrBu80zzmvaQZgfB1V_IOM`
        );
        console.log(response.data.results)
        commit('setImage', response.data.results)
    }
};

const mutations =  {
    setImage: (state, result) => {state.images = result}
};

export default {
    state,
    getters,
    actions,
    mutations
};