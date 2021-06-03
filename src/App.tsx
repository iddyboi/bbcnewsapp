import axios from 'axios';
import { useEffect, useState } from 'react';
import { NewsData } from './interfaces/NewsInterface';

import './App.css';

function App() {
  const [news, setNews] = useState<NewsData | null>(null);
  useEffect(() => {
    newsDAta();
  }, []);

  const newsDAta = async () => {
    try {
      const response = await axios.get('data/article-1.json');
      const data = await response.data;
      console.log(data);
      setNews(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='App'>
      <h1>news app</h1>
      {news?.title}
      {news?.body.map(({ type, model }) => (
        <>
          <h2>{type}</h2>
          <p>{model?.text}</p>
          <img src={model?.url} alt={model?.altText} />
          <ul>
            {model?.items?.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </>
      ))}
    </div>
  );
}

export default App;
