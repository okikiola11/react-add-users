import React, { useState, useRef } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Wrapper from '../Helper/Wrapper';
import ErrorModal from '../UI/ErrorModal';

import classes from './UserForm.module.css';

const UserForm = (props) => {
  const nameInputRef = useRef(); // ref - always holds the current value
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const errorHandler = () => {
    setError(null);
  };
 
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
                <input 
                  type='text' 
                  ref={nameInputRef}
                />
            </div>
            <div className='form-control'>
                <label>Age (Years)</label>
                <input 
                  type='number' 
                  ref={ageInputRef}
                />
            </div>

            <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </Wrapper>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
  )
}

export default UserForm;
