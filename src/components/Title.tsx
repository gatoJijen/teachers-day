import React from 'react'
import { Playwrite_DK_Loopet } from "next/font/google";

const playwrite = Playwrite_DK_Loopet({
  weight: ['100', '200', '300', '400'],
  display: 'swap',
});

const Title = () => {
  return (
    <header className={`${playwrite.className} text-white titleMedia text-center flex flex-col gap-2 `}>
      <h1 className='text-4xl font-bold'>Feliz Día del Profesor</h1>
      <p className='text-xl text-white/70'>Un día para recordar la importancia de sus enseñanzas</p>
    </header>
  )
}

export default Title