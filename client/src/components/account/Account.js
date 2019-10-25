import React from 'react';
import { put } from '../../services/queryBackend';
import { del } from '../../services/queryBackend';

const AccountCard = props => {
  const handleEdit = () => {
    console.log('edit request');
    // put(`endpoint`, body.req);
    // endpoints are down, unknown request shape
  };

  const handleDelete = () => {
    console.log('delete request');
    // del(`endpoint`, body.req);
    // endpoints are down, unknown request shape
  };

  return (
    <div>
      <h1>{props.name}</h1>
      <button onClick={() => handleEdit()}>Edit</button>
      <button onClick={() => handleDelete()}>Delete</button>
    </div>
  );
};

export default () => {
  const storage = window.localStorage.getItem('post');
  const parse = JSON.parse(storage);
  console.log(parse);

  return (
    <>
      {parse.map((x, i) => (
        <AccountCard name={x} key={i} />
      ))}
    </>
  );
};
