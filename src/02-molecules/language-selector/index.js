import React from 'react';

import Icon from '../../01-atoms/icon'
import Input from '../../01-atoms/input'
import Button from './button'
import List from './list'

const LanguageSelector = ({ classes = [], languages }) => {
  return (
    <div className={`m-language-selector ${classes.join(' ')}`}>
      <Button />
      <List languages={languages}/>
    </div>
  );
};

export default LanguageSelector;
