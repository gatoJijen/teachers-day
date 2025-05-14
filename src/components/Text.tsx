import React from 'react'
import { Playwrite_DK_Loopet } from "next/font/google";

const playwrite = Playwrite_DK_Loopet({
  weight: ['100', '200', '300', '400'],
  display: 'swap',
});

const Text = () => {
  return (
    <article className={`${playwrite.className} text-white/90 w-[70dvw] text-lg`}>
        <p>Profesora Yuli en este dia queremos agradecerle por la gran profesión que usted ha elegido, por ser esa profesora siempre presente,  apoyándonos día a día en esta etapa difícil de nuestra vida, regalándonos en cada dificultad  una sonrisa. Queremos darle gracias por ser esa gran profesora que ha dedicado su tiempo a nosotros, prepararnos para la vida y para triunfar con sus enseñanzas. Gracias por ser quien los estudiantes necesitamos en ciertos momentos. Gracias, por ayudarnos a construir el mañana.</p>
    </article>
  )
}

export default Text