import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '../static'

export const useTop = defineStore({
    id: 'top',
    state: () => ({
        url: 'https://api.themoviedb.org/3/movie/top_rated',
        top: null
    }),
    actions: {
       async getTop() {
        try {
            let res = await axios.get(`${this.url}?api_key=${apiKey}&language=ru-RU&page=1&`)
            let results = res.data.results
            this.top = results
            console.log(results, 'результаты');
        } catch (error) {
            console.log('Ошибка при получении топ10', error);
        }
       }
    }
})
