import React from 'react';
import Card from '../UI/Card';

import classes from './Users.module.css';

const Users = (props) => {
  let content = (
    <p style={{textAlign: 'center', color: '#fff' }}>No Users found. You can create one</p>
  );
  
  if (props.items.length > 0) {
    content = (
      props.items.map((item) => (
        <li key={item.id}>{item.name} ({item.age} years old)</li>
      ))
    );
  }

  return (
    <Card className={classes.user}>
      <ul>
          {/* {props.items.map((item) => (
              <div className='form-control'>
                <div>Username: {item.name}</div>
                <div>Age: {item.age}</div>
              </div>
            ))
          } */}
          {content}
      </ul>
    </Card>
  )
}

export default Users;
