import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        videos: [],
        favorites: []
    },
    getters: {},
    mutations: {
        // Video data push to "SET_VIDEOS"
        SET_VIDEOS(state, videos) {
            state.videos = videos
        },
        // Favorite data push to "SET_FAVORITES"
        SET_FAVORITES(state, data) {
            state.favorites.push(data)
        },
        // Favorite data remove to "DELETE_FAVORITES"
        DELETE_FAVORITES(state, data) {
            state.favorites = state.favorites.filter(e => e.id != data.id)
        }
    },
    actions: {
        // With axios it pulls data from url.
        getVideos({commit}) {
            axios.get("https://my-json-server.typicode.com/modanisa/bootcamp-video-db/videos")
                .then(response => {
                    commit('SET_VIDEOS', response.data)
                })
        },
        // addOrRemoveFavoriteAction function, both remove and add operations are performed.
        addOrRemoveFavoriteAction({commit, state}, payload) {
            if (!state.favorites.some(e => e.id === payload.id)) {
                commit('SET_FAVORITES', payload)
            } else if (state.favorites.some(e => e.id === payload.id)) {
                commit('DELETE_FAVORITES', payload)
            }
        }
    }
})

export default store
