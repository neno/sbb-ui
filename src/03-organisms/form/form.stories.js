import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Form from './index';

export default {
  title: '03-Organisms/Form'
};

export const LoginForm = () =>
  renderToStaticMarkup(<Form />);

  export const InvalidLoginForm= () =>
  renderToStaticMarkup(<Form invalid="true" />);