import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import ToTop from './index';

export default {
  title: '01-Atoms/To Top',
};

export const Default = () => renderToStaticMarkup(<ToTop />);