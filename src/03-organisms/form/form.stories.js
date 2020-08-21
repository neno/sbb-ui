import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import Form from './index';

import FormField from '../../02-molecules/form-field'

import Label from '../../01-atoms/label'
import Icon from '../../01-atoms/icon'
import Input from '../../01-atoms/input'
import Error from '../../01-atoms/error'
import Button from '../../01-atoms/button'

export default {
  title: '03-Organisms/Form',
};

export const Default = () =>
  renderToStaticMarkup(<Form>
    <ol className='o-form__list'>
      <li className="o-form__list-item">
        <FormField>
          <Label htmlFor="firstname">
            First Name 
          </Label>
          <Input
            attr={{
              "id": "firstname",
              "name": "firstname"
            }} />
        </FormField>
      </li>
      <li className="o-form__list-item">
        <FormField>
          <Label htmlFor="lastname">
            Last Name 
          </Label>
          <Input
            attr={{
              "id": "lastname",
              "name": "lastname"
            }} />
        </FormField>
      </li>
    </ol>
    <div className="o-form__footer">
      <Button classes={["a-btn--primary a-btn--arrows"]} type="submit">
        <Icon name="arrow-right" />
        Submit
        <Icon name="arrow-right" />
      </Button>
    </div>
  </Form>
);

export const Invalid = () =>
  renderToStaticMarkup(<Form>
    <ol className='o-form__list'>
      <li className="o-form__list-item">
        <FormField>
          <Label htmlFor="firstname">
            First Name 
          </Label>
          <Input
            classes={['a-input--error']}
            attr={{
              "id": "firstname",
              "name": "firstname"
            }} />
          <Error>
            Pflichtfeld, bitte ausfüllen.
          </Error>
        </FormField>
      </li>
      <li className="o-form__list-item">
        <FormField>
          <Label htmlFor="lastname">
            Last Name 
          </Label>
          <Input
            classes={['a-input--error']}
            attr={{
              "id": "lastname",
              "name": "lastname"
            }} />
          <Error>
            Pflichtfeld, bitte ausfüllen.
          </Error>
        </FormField>
      </li>
    </ol>
    <div className="o-form__footer">
      <Button classes={["a-btn--primary a-btn--arrows"]} type="submit">
        <Icon name="arrow-right" />
        Submit
        <Icon name="arrow-right" />
      </Button>
    </div>
  </Form>);