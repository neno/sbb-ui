import React from 'react';

import FormField from '../../02-molecules/form-field'

import Label from '../../01-atoms/label'
import Input from '../../01-atoms/input'
import Error from '../../01-atoms/error'
import Button from '../../01-atoms/button'

const LoginForm = ({ invalid }) => (
  <form className='m-form'>
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
    <Button classes={["a-btn--primary"]}>
      <span>Login</span>
    </Button>
  </form>
);

export default LoginForm;