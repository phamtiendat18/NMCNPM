import { Button, Modal } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import FilmButton from '../FilmButton';

const Film = ({ film }) => {
    const { sAnhQuangCao } = film;
    const [showButton, setShowButton] = useState(false);
    const handleHover = () => {
        setShowButton(true);
    }

    const handleOut = () => {
        setShowButton(false);
    }
  return (
    <div className='max-w-[30%] w-[30%] h-[400px] max-h-[400px] bg-center bg-cover bg-no-repeat flex flex-col justify-end' style={{backgroundImage: `url(${sAnhQuangCao})`}} onMouseOver={handleHover} onMouseOut={handleOut}>
        {showButton ? <FilmButton film={film}/> : ""}
    </div>
  )
}

export default Film