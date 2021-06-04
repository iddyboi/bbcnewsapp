import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { NewsData } from './interfaces/NewsInterface';

import './App.css';
import NewsComponent from './components/NewsComponent';

function App() {
  let numbOfArticles = [1, 2, 3, 4, 5];
  let [currentArticle, setCurrentArticle] = useState(0);

  const [allnews, setAllnews] = useState<NewsData[]>([]);
  useEffect(() => {
    getAllNewsData();
  }, []);

  const getAllNewsData = () => {
    numbOfArticles.map(async (article) => {
      try {
        const response = await axios.get(`data/article-${article}.json`);
        const data = await response.data;
        setAllnews((prevData) => [...prevData, data]);
      } catch (error) {
        console.log(error);
      }
    });
  };
  const nextArticle = () => {
    setCurrentArticle((prevState) => prevState + 1);
  };
  const prevArticle = () => {
    setCurrentArticle((prevState) => prevState - 1);
  };
  return (
    <div className='App'>
      <Banner>
        <h2>News App</h2>
      </Banner>

      <FlexContainer>
        <NewsBody>
          <Title> {allnews[currentArticle]?.title}</Title>

          <ButtonWrapper>
            {currentArticle >= numbOfArticles.length ? null : (
              <Button onClick={nextArticle}>Next Article</Button>
            )}
            {currentArticle > 1 ? (
              <Button onClick={prevArticle}>Previous Article</Button>
            ) : null}
          </ButtonWrapper>

          {allnews[currentArticle]?.body.map(({ type, model }) => (
            <NewsComponent key={model?.text} type={type} model={model} />
          ))}
        </NewsBody>
        <NewsList>
          <h1>More news</h1>
          {allnews.map((news) => (
            <a href=''>
              {' '}
              <h2 style={{ marginBottom: '10px' }}>{news.title}</h2>
            </a>
          ))}
        </NewsList>
      </FlexContainer>
    </div>
  );
}

export default App;

const Button = styled.button`
  padding: 1rem 1.5rem;
  cursor: pointer;
  background-color: #2d2df3;
  color: #fff;
  border: none;
  width: 150px;
  font-weight: bold;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Banner = styled.header`
  background-color: rgb(184, 0, 0);
  color: #fff;
  padding: 1rem 0.5rem;
`;
const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;

  @media (min-width: 768px) {
    width: 60%;
    margin: 50px auto;
    flex-direction: row;
  }
`;

const Title = styled.h1``;

const NewsList = styled.aside`
  flex: 2;
  padding: 1rem;
`;

const NewsBody = styled.article`
  flex: 6;
  padding: 15px;
  display: grid;
  gap: 15px;

  h1 {
    margin: 1rem 0;
    font-size: 2rem;
  }
  p {
    line-height: 1.7;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-color: #0077ff;
    color: #fff;
    li {
      margin: 10px 0;
    }
  }
  @media (min-width: 768px) {
  }
`;
