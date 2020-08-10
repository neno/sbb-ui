import React from 'react';

import Icon from '../../01-atoms/icon'
import Input from '../../01-atoms/input'
import Button from '../../01-atoms/button'

const SearchForm = ({ pages = [], currentPage }) => {
  return (
    <form className='m-search-form'>
      <label class="sr-only" for="search">
        Suchbegriff
      </label>
      <Input attr={{
        "placeholder": "Placeholder Text",
        "id": "search"
      }}/>
      <Button classes={["a-btn--primary a-btn--icon"]}>
        <span className="sr-only">
          Suche
        </span>
        <Icon name="magnifying-glass" />
      </Button>
    </form>
  );
};

export default SearchForm;
