import React, { Fragment, useState } from 'react';
import Users from './components/Users/Users';
// import NewUser from './components/NewUser/NewUser';
import UserForm from './components/Users/UserForm';

// const DUMMY_USERS = [
//   {name: 'Okikiola Dare', age: 29, id: 'user1' },
//   {name: 'Daniel Simpson', age: 40, id: 'user2' }
// ];

const App = () => {
  const [users, setUsers] = useState('');

  const addUserHandler = (name, age) => {
    //console.log(user)
    setUsers((prevUsers) => {
      // return [user, ...prevUsers];
      // Get the userdata as an object
      return [...prevUsers, {name, age, id: Math.random().toString()}];
    });
    console.log(users)
  }

  return (
    // React.Fragment same as <></>
    <Fragment>
      {/* <NewUser onAddUser={addUserHandler} /> */}
      <UserForm onAddUser={addUserHandler} />
      <Users items={users} />
    </Fragment>
  );
}

export default App;
