import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '../static'


export const useItemid = defineStore('itemId',{
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        movie: null,
        tv: null,
    }),
    actions: {
       async getItemId({type, id}){
        try {
            let res = await axios.get(`${this.url}${type}/${id}?api_key=${apiKey}&language=ru-RU&`)
            if (type == 'movie') {
                this.movie = res.data
            } else {
                this.tv = res.data
            }
        } catch (error) {
            console.log('при получении данных по id', error);
        }
       }
    }
})
