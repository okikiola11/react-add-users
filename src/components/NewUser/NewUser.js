import React from 'react';
import UserForm from '../Users/UserForm';

// This is invalid
// Not used in this project
const NewUser = (props) => {
  const saveUserHandler = (enteredUserData) => {
      const saveUserData = {
          ...enteredUserData,
          id: Math.random().toString(),
      };

      props.onAddUser(saveUserData);
  };

  return (
    <div>
        <UserForm onSaveUser={saveUserHandler} />
    </div>
  )
}

export default NewUser;
