import React from 'react';

const SearchWallet = props => {
  const filterList = event => {
    let value = event.target.value;
    props.updateSearch(value);
  };

  return (
    <form>
      <input type="text" placeholder="Search" value={props.searchquery} onChange={filterList} />
    </form>
  );
};

export default SearchWallet;
