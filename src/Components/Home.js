import React, {  useEffect, useContext } from "react";
import NewsContext from '../NewsContext/newsContext'
import News from './News'

const Home = () => {
  


  const newsContext = useContext(NewsContext)


  const {getNews} = newsContext;

 
  
  useEffect(() => {
    getNews()
  }, []); 
  return (
    <div>
      
     <News />
    </div>
  );
};

export default Home;
