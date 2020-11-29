import React, {useReducer} from 'react'
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


const getNews = async () => {
const res = await axios.get(`${api}/top-headlines?country=in&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

dispatch({
    type: GETNEWS,
    payload: res.data.articles
})
}



const generalNews = async (type) => {
    const res = await axios.get(`${api}/top-headlines?category=${type}&pageSize=100&apiKey=77092229e2a6465daafadb1f1b3dafb7`)

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
        generalNews,        
    }} >
        {props.children}
    </newsContext.Provider>
)
}

export default NewsState