import { useState, useEffect } from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Loader from 'components/Loader/Loader';
import Button from 'components/Button/Button';
import getImages from 'service/pixabay-api';
import { Container } from './App.styled';
import { Notify } from 'notiflix';

const App = () => {
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    if (q !== '') {
      searchByQuery();
    }
  }, [q, page]);

  const searchByQuery = async () => {
    try {
      setIsLoading(true);

      const data = await getImages(q, page);

      setTotalImages(data.totalHits);
      setResults(prev => [...prev, ...data.hits]);
    } catch (err) {
      console.error(err);
      Notify.error(`Error: ${err.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const inputHandler = query => {
    if (!query) {
      Notify.warning('Please enter your request');
      return;
    }
    setQ(query);
    setPage(1);
    setResults([]);
    setTotalImages(0);
  };

  const loadMoreBtnHandler = () => {
    setPage(prev => prev + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={inputHandler} />
      <ImageGallery images={results} />
      {isLoading && <Loader />}
      {!isLoading && !!totalImages && totalImages > results.length && (
        <Button onLoadMore={loadMoreBtnHandler} />
      )}
    </Container>
  );
};

export default App;
