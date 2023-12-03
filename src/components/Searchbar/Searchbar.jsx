import { Button, Form, Input, SearchBar } from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const submitHandler = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const inputValue = form.elements.query.value.trim();

    return onSubmit(inputValue);
  };

  return (
    <SearchBar className="searchbar">
      <Form className="form" onSubmit={submitHandler}>
        <Button type="submit" className="button">
          <span className="button-label">Search</span>
        </Button>

        <Input
          className="input"
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </SearchBar>
  );
};

export default Searchbar;
