import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '../static'


export const useActors = defineStore('itemId',{
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        actorsMovie: null,
        actorsTv: null,
    }),
    actions: {
       async getActors({type, id}) {
        try {
            let res = await axios.get(`${this.url}${type}/${id}/credits?api_key=${apiKey}&language=ru-RU`)
        } catch (error) {
            console.log('Ошибка при получении актеров', error);
        }
       }
    }
})
