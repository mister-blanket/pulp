import React, {useState } from 'react';

const FunctionsBox = ({ filterType, setFilterType, filterInput, setFilterInput, sortDirection, setSort }) => {

  return(
    <div className='functions-box'>
      <FilterBox
        filterType={filterType}
        setFilterType={setFilterType}
        filterInput={filterInput}
        setFilterInput={setFilterInput}
      />
      <SortBox
        sortDirection={sortDirection}
        setSort={setSort}
      />
    </div>
  )
}

const FilterBox = ({ filterType, setFilterType, filterInput, setFilterInput }) => {

  const handleType = event => {
    setFilterType(event.target.value);
  }

  const handleInput = event => {
    setFilterInput(event.target.value);
  }

  return (
    <div className='filter-box'>
      <p><b>Filter by </b>
        <select onChange={handleType}>
          <option value='author'>Author</option>
          <option value='title'>Title</option>
          <option value='genre'>Genre</option>
        </select>

        <input
          className='input-box'
          type="text"
          placeholder='Query'
          value={filterInput}
          onChange={handleInput}
          autoFocus
        /></p>
    </div>
  )
}

const SortBox = ({ sortDirection, setSort }) => {

  const handleChange = event => {
    setSort(event.target.value);
  }

  return (
    <div className='sort-box'>
      <p><b>Sort by </b>
        <select onChange={handleChange}>
          <option value='rd-dsc'>Year Read &#8595;</option>
          <option value='rd-asc'>Year Read &#8593;</option>
          <option value='gr-dsc'>Rating &#8595;</option>
          <option value='gr-asc'>Rating &#8593;</option>
          <option value='yr-dsc'>Year Published &#8595;</option>
          <option value='yr-asc'>Year Published &#8593;</option>
        </select>
      </p>
    </div>
  )
}

export default FunctionsBox;
