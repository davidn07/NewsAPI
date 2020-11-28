import react, {useReducer} from 'react'
import newsContext from './newsContext'
import newsReducer from './newsReducer'
import {GETNEWS, SETSEARCH} from './types'
import axios from 'axios'


const NewsState = props => {
const initialState = {
    articles: [],
}

const [state, dispatch] = useReducer(newsReducer, initialState)

var api = "https://newsapi.org/v2"

const newsSearch = async (text) => {
    const res = await axios.get(`${api}/everything?q=${text}&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)
    dispatch({
        type: SETSEARCH,
        payload: res.data.articles
    })
}

const newsSearchHealth = async (text) => {
    const res = await axios.get(`${api}/top-headlines?category=health&q=${text}&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

    dispatch({
        type: GETNEWS,
        payload: res.data.articles
    })
}

const newsSearchBusiness = async (text) => {
    const res = await axios.get(`${api}/top-headlines?category=business&q=${text}&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

    dispatch({
        type: GETNEWS,
        payload: res.data.articles
    })
}

const newsSearchEntairnment = async (text) => {
    const res = await axios.get(`${api}/top-headlines?category=entertainment&q=${text}&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

    dispatch({
        type: GETNEWS,
        payload: res.data.articles
    })
}

const newsSearchGeneral = async (text) => {
    const res = await axios.get(`${api}/top-headlines?category=general&q=${text}&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

    dispatch({
        type: GETNEWS,
        payload: res.data.articles
    })
}

const newsSearchScience = async (text) => {
    const res = await axios.get(`${api}/top-headlines?category=general&q=${text}&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

    dispatch({
        type: GETNEWS,
        payload: res.data.articles
    })
}

const getNews = async () => {
const res = await axios.get(`${api}/top-headlines?country=in&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

dispatch({
    type: GETNEWS,
    payload: res.data.articles
})
}

const healthNews = async () => {
    const res = await axios.get(`${api}/top-headlines?category=health&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

    dispatch({
        type: GETNEWS,
        payload: res.data.articles
    })
}

const businessNews = async () => {
    const res = await axios.get(`${api}/top-headlines?category=business&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

    dispatch({
        type: GETNEWS,
        payload: res.data.articles
    })
}

const entertainmentNews = async () => {
    const res = await axios.get(`${api}/top-headlines?category=entertainment&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

    dispatch({
        type: GETNEWS,
        payload: res.data.articles
    })
}

const generalNews = async () => {
    const res = await axios.get(`${api}/top-headlines?category=general&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

    dispatch({
        type: GETNEWS,
        payload: res.data.articles
    })
}

const scienceNews = async () => {
    const res = await axios.get(`${api}/top-headlines?category=science&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

    dispatch({
        type: GETNEWS,
        payload: res.data.articles
    })
}

return (
    <newsContext.Provider
    value={{
        articles: state.articles,
        search: state.search,
        getNews,
        newsSearch,
        healthNews,
        businessNews,
        entertainmentNews,
        newsSearchHealth,
        newsSearchBusiness,
        newsSearchEntairnment,
        generalNews,
        newsSearchGeneral,
        scienceNews,
        newsSearchScience
        
        
    }} >
        {props.children}
    </newsContext.Provider>
)
}

export default NewsState