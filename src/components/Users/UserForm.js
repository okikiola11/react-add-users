import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Wrapper from '../Helper/Wrapper';
import ErrorModal from '../UI/ErrorModal';

import classes from './UserForm.module.css';

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const usernameChangeHandler = event => {
      setEnteredName(event.target.value);
  }

  const ageChangeHandler = event => {
      setEnteredAge(event.target.value);
  }

  const errorHandler = () => {
    setError(null);
  };
 
  const submitHandler = (e) => {
    e.preventDefault();

    // const userData = {
    //     name: enteredName,
    //     age: enteredAge,
    // };
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0)',
      });
      return;
    }
    // props.onSaveUser(userData);
    props.onAddUser(enteredName, enteredAge);

    setEnteredName('');
    setEnteredAge('');
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal 
          title={error.title} 
          message={error.message} 
          onConfirm={errorHandler} 
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
            <div className='form-control'>
                <label>Username</label>
                <input type='text' onChange={usernameChangeHandler} value={enteredName || ''} />
            </div>
            <div className='form-control'>
                <label>Age (Years)</label>
                <input type='number' onChange={ageChangeHandler} value={enteredAge || ''} />
            </div>

            <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  )
}

export default UserForm;
