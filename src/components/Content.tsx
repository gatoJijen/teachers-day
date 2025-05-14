import React from 'react'
import Text from './Text'
import Videos from './Videos'

const Content = () => {
  return (
    <section className='flex p-4 justify-center items-center gap-4'>
        <Text />
        <Videos />
    </section>
  )
}

export default Content