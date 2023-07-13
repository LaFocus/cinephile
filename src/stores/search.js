import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '../static'

export const useSearch = defineStore({
    id: 'searchPage ',
    state: () => ({
        url: 'https://api.themoviedb.org/3/search/',
        search: null
    }),
    actions: {
       async getSearch(str) {
        try {
            let res = await axios.get(`${this.url}movie?api_key=${apiKey}&query=${str}&language=ru-RU`)
            let results = res.data.results
            const arrayWithPhoto = results.filter(movie => movie.backdrop_path != null)
            // console.log(arrayWithPhoto);
            this.search = arrayWithPhoto
        } catch (error) {
            console.log('Ошибка при поиске', error);
        }
       }
    }
})
