import axios from 'axios'
import { defineStore } from 'pinia'
import { apiKey } from '../static'


export const usePopularScroll = defineStore({
    id: 'popularScroll',
    state: () => ({
        url: 'https://api.themoviedb.org/3/',
        popularScrollMovies: null,
        popularScrollTvs: null,
    }),
    
    actions: {
        async getPopularScroll({type, page}) {
            try {
                const res = await axios.get(`${this.url}${type}/popular?api_key=${apiKey}&language=ru-RU&page=${page}`)
                const data = res.data.results
                if (type == 'movie') this.popularScrollMovies = data
                else this.popularScrollTvs = data
            } catch (error) {
                console.log(error);
            }
        }
    }
})
