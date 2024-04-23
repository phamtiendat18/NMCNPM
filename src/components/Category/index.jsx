import React from 'react'
import { Link } from 'react-router-dom'

const Category = (props) => {

    const {id, name, getFilm} = props;

    const handleClick = () => {
        getFilm({id, name})
    }

  return (
    <div className='text-center border border-1 hover:bg-red-500 hover:text-white cursor-pointer border-red-500 rounded px-[5px] py-[10px]'onClick={handleClick}>
        {name}
    </div>
  )
}

export default Category