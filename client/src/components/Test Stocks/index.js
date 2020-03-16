import React, { Fragment } from 'react';

const TestingStock = props => {
  const handleSignOut = () => {
    signOut()
      .then(() => {
        props.updateUserInformation(null);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <nav className="nav-bar">
      {(props.user && (
        <Fragment>
          <span>Name</span>
        </Fragment>
      )) || (
          <Fragment>
          </Fragment>
        )}
    </nav>
  );
};

export default TestingStock;
