import React from 'react';

import FormField from '../../02-molecules/form-field'

import Label from '../../01-atoms/label'
import Icon from '../../01-atoms/icon'
import Input from '../../01-atoms/input'
import Error from '../../01-atoms/error'
import Button from '../../01-atoms/button'

const LoginForm = ({ invalid }) => (
  <form className='o-form'>
    <ol className='o-form__list'>
      <li className="o-form__list-item">
        <FormField>
          <Label htmlFor="benutzername">
            Benutzername 
          </Label>
          <Input
            classes={invalid && ['a-input--error']}
            attr={{
              "id": "benutzername",
              "name": "benutzername"
            }} />
          {invalid &&
            <Error>
              Pflichtfeld, bitte ausfüllen.
            </Error>
          }
        </FormField>
      </li>
      <li className="o-form__list-item">
        <FormField>
          <Label htmlFor="passwort">
            Passwort 
          </Label>
          <Input
            classes={invalid && ['a-input--error']}
            attr={{
              "id": "passwort",
              "name": "passwort"
            }} />
          {invalid &&
            <Error>
              Pflichtfeld, bitte ausfüllen.
            </Error>
          }
        </FormField>
      </li>
    </ol>
    <div className="o-form__footer u-text-center">
      <Button classes={["a-btn--primary a-btn--arrows"]}>
        <Icon name="arrow-right" />
        Login
        <Icon name="arrow-right" />
      </Button>
    </div>
  </form>
);

export default LoginForm;