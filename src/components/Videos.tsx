import React from 'react'

const Videos = () => {
  return (
    <section className="video-container">
      <video className='w-[700px] ' controls>
        <source src="/videos/TeachersDay.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de video.
      </video>
    </section>
  )
}

export default Videos