import React, { useState, useEffect } from 'react'
import SearchForm from './SearchForm'

const api = {
    key: "LzGpAwmL2ADrmDy5AxGvNB9FhekFq5sR"
}

const News = () => {
    const[articles, setArticles] = useState([])
    const[term, setTerm] = useState('everything')
    const[isLoading, setIsLoading] = useState(true)

    useEffect(() =>{
            const fetchArticles = async () =>{
            try{
                const res = await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&api-key=${api.key}`)
                const articles = await res.json()
                console.log(articles.response.docs)
                setArticles(articles.response.docs)
                setIsLoading(false)
            } catch (error){
                console.error(error);
            }
        }
        fetchArticles()
    }, [term])

    return (
        <div>
            <div className='container has-text-centered'>
                <h1 className='is-size-5'>Iveskite temą</h1>
                <SearchForm searchText={(text) => setTerm(text)} />
            </div>

        {isLoading ? (<h1>Kraunasi...</h1>) : (
        <section>
            {articles.map((article) => {
                const {abstract, headline:{main}, byline:{original}, lead_paragraph, news_desk, section_name, web_url, _id, word_count, pub_date} = article

                return(
                    <div className='box' style={{width: 1000}} key={_id}>
                        <h2 className='title'>{main}</h2>
                        <p>{abstract}</p>                      
                        <p>{lead_paragraph}</p>

                        <ul>
                            <li>{original}</li>
                            <li><strong>Naujienų skyrius: </strong>{news_desk}</li>
                            <li><strong>Tema: </strong>{section_name}</li>
                            <li><strong>Žodių kiekis: </strong>{word_count}</li>
                            <li><strong>Straipsnio data: </strong>{pub_date}</li>
                        </ul>
                        <a href={web_url} target="_blank">Šaltinio nuorada</a>
                    </div>
                )
            })}
        </section>
        )}
        </div>
    )
}

export default News;
