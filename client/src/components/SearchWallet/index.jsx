import React from 'react';
import './style.scss';

const SearchWallet = props => {
  const filterList = event => {
    let value = event.target.value;
    props.updateSearch(value);
  };

  return (
    <form className="searchbar__wallet">
      <input type="text" placeholder="Search" value={props.searchquery} onChange={filterList} />
    </form>
  );
};

export default SearchWallet;
