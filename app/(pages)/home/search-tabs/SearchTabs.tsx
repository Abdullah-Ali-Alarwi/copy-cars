import React from 'react'
import SearchPart from './SearchPart'
import ListPart from './ListPart'
import InputField from './InputField'

export default function SearchTabs() {
  return (
    <div className='absolute top-[550px] h-auto lg:h-[300px] w-full lg:w-[90%] left-1/2 transform -translate-x-1/2  lg:rounded-2xl bg-white z-10 '>
        <SearchPart/>
        <ListPart/>
        <InputField/>
   


    
      
    </div>
  )
}
