import React from 'react'
import Global from '../context/GlobalContext'
import Contact from '../components/Contact';
import Layouts from '../components/Layout'

export default function PageContact() {
  return (
    <Layouts>
        <Global>
          <Contact />
        </Global>
    </Layouts>
  )
}
