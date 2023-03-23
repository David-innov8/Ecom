import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApiExample = () => {
  const [newsData, setNewsData]= useState(null)

  useEffect(()=>{
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2023-02-06&sortBy=publishedAt&apiKey=51af6c0872a74ef780d50674d1df60b3')
    .then(Response=>{
      setNewsData(Response.data)
    })
    .catch(Error=>{
        console.log(Error)
    })
  }, [])
  return (
    <div>
      {newsData && (
        <div>
          <h1>Current Weather in London:</h1>
          <p>{newsData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};

export default ApiExample;
