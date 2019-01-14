import React from 'react';

const Card = (props) => {
    return (
        <div style={{margin: '1em'}}>
            <img width="75" alt="" src={props.avatar_url} />
            <div style={{display: 'inline-block', marginLeft: 10, fontFamily: 'sans-serif', position: "absolute"}}>
                <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>{props.name}</div>
                <div>{props.company}</div>
            </div>
        </div>
    );
  };
  
export default Card;