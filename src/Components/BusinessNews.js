import React, {  useEffect, useContext } from "react";

import NewsContext from '../NewsContext/newsContext'
import News from './News'
const BusinessNews = () => {
 const newsContext = useContext(NewsContext)
  const {articles,  generalNews} = newsContext;
  console.log(articles);
  useEffect(() => {
    generalNews("business")
  }, []); 
  return (
    <div>
       <News />
      
    </div>
  );
};

export default BusinessNews;
