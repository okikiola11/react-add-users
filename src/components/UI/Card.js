import React from 'react';

import classes from './Card.module.css';

const Card = (props) => {
  return (
    // Accpting className from other components
    // you have to enable the component to accept className
    // ${props.classNames} *classNames can be anything else outside classNames
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  )
}

export default Card;
