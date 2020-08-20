import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import LoginForm from './index';

export default {
  title: '03-Organisms/LoginForm'
};

export const Desktop = () =>
  renderToStaticMarkup(<LoginForm />);