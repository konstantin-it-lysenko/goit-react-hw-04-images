import Button from 'components/Button/Button';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Searchbar from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import getImages from 'service/pixabay-api';
import { Container } from './App.styled';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix';

class App extends Component {
  state = {
    q: '',
    page: 1,
    results: [],
    isLoading: false,
    totalImages: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    const { q, page } = this.state;
    if (q !== prevState.q || page !== prevState.page) {
      this.searchByQuery();
    }
  }

  searchByQuery = async () => {
    const { q, page } = this.state;
    try {
      this.setState({ isLoading: true });
      const data = await getImages(q, page);
      console.log(data);
      this.setState(prevState => ({
        totalImages: data.totalHits,
        results: [...prevState.results, ...data.hits],
      }));
    } catch (err) {
      console.error(err);
      Notify.error(`Error: ${err.message}`);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  inputHandler = query => {
    if (!query) {
      Notify.warning('Please enter your request');
      return;
    }

    this.setState({ q: query, page: 1, results: [], totalImages: 0 });
  };

  loadMoreBtnHandler = async () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { results, isLoading, totalImages } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.inputHandler} />
        <ImageGallery images={results} />
        {isLoading && <Loader />}
        {!isLoading && !!totalImages && totalImages > results.length && (
          <Button onLoadMore={this.loadMoreBtnHandler} />
        )}
      </Container>
    );
  }
}

export default App;
