import React from 'react';

function SearchBar({filterText, inStockOnly, onFilterChange, onInStockChange}){
   return(
    <form>
        <input type='text' 
        value={filterText}
        placeholder='Search...'
        onChange={e => onFilterChange(e.target.value)}/><br />

        <label>
            <input type='checkbox'
            checked={inStockOnly}
            onChange={e => onInStockChange(e.target.checked)}/>{' '}
            Only show products in stock
        </label>
    </form>
   );
}

export default SearchBar;