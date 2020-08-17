import React from 'react';

const List = ({ languages}) => (
  <ul className='m-language-selector__list'>
    {languages && languages.map(language => (
      <li key={encodeURIComponent(language.name)}>
        <a className="m-language-selector__item" href={language.href} aria-label={language.label}>{language.name}</a>
      </li>
    ))}
  </ul>
);

export default List;