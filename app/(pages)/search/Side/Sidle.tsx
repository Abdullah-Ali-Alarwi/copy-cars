import React from 'react'
import Place from './Place'
import Filter from './Filter'
import FilterList from './FilterList'



export default function Sidle() {
  return (
    <div
      className="h-screen overflow-x-hidden  overflow-y-scroll scrollbar-hide "
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      <Place />
      <Filter />
      <FilterList />
    </div>
  );
}

