import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

import './sign-in-form.styles.scss';

const defaultFormFields = {
    email: '',
    password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
      };

    const signInWithGoogle = async () => {
      await signInWithGooglePopup();
    
  };
   
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const {user} = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
    resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


    return (
        <div className='sign-up container'>
            <h2>Ai un cont?</h2>
            <span>Intră în cont cu email si parola</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    type='email'
                    reqired="true"
                    onChange={handleChange}
                    name='email'
                    value={email} />
                <FormInput
                    label='Parola'
                    type='password'
                    reqired="true"
                    onChange={handleChange}
                    name='password'
            value={password} />
          <div className='buttons-container'>
          <Button type='submit'>Intră în cont</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Intră cu Google</Button>
          </div>
        </form>
      </div>
    );
};

export default SignInForm;