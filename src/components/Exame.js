import React from 'react'

function Exame({dataResultado, microorganismo, material }) {
  return (
    <>
      <span>{dataResultado}</span>
      <span>{microorganismo}</span>
      <span>{material}</span>
    </>
  )
}

export default Exame;