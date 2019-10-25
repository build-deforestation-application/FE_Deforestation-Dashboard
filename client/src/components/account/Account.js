import React from 'react';

const AccountCard = props => {
  const handleEdit = () => {
    console.log('edit request');
  };

  const handleDelete = () => {
    console.log('delete request');
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
