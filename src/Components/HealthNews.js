import React, {  useEffect, useContext } from "react";

import NewsContext from '../NewsContext/newsContext'
import News from './News'
const HealthNews = () => {
 const newsContext = useContext(NewsContext)
  const {articles,  generalNews} = newsContext;
  console.log(articles);
  useEffect(() => {
    generalNews("health")
  }, []); 
  return (
    <div>
       <News />
      
    </div>
  );
};

export default HealthNews;
