import React from 'react';

import Icon from '../../01-atoms/icon'
import Input from '../../01-atoms/input'
import Button from '../../01-atoms/button'

const SearchForm = ({ pages = [], currentPage }) => {
  return (
    <form className='m-search-form'>
      <label class="sr-only" for="search-term">
        Suchbegriff
      </label>
      <Input
        classes={["a-input--search"]}
        attr={{
          "placeholder": "Suchbegriff",
          "id": "search-term"
        }}
      />
      <div className="m-search-form__submit">
        <Button classes={["a-btn--primary a-btn--icon a-btn--search"]}>
          <span className="sr-only">
            Suche
          </span>
          <Icon name="magnifying-glass" />
        </Button>
      </div>
    </form>
  );
};

export default SearchForm;
