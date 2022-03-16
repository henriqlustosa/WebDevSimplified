import React from 'react'
import Exame from './Exame'

function ExameList({ exames}) {
  const exameElements = exames.map(exame => {
    return <Exame key={exame.id} {...exame} />
  })
  return (
    <div className="exame-grid">
     {exameElements}
    </div>
  )
}

export default ExameList;