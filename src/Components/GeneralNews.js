import React, {  useEffect, useContext } from "react";

import NewsContext from '../NewsContext/newsContext'
import News from './News'
const GeneralNews = () => {
 const newsContext = useContext(NewsContext)
  const {articles,  generalNews} = newsContext;
  console.log(articles);
  useEffect(() => {
    generalNews("general")
  }, []); 
  return (
    <div>
       <News />
      
    </div>
  );
};

export default GeneralNews;
