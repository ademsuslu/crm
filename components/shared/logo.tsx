import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
        <Image src="/assets/logo.png" width={170} height={95} className='object-cover' alt="Suslu-Crm" />
  )
}

export default Logo