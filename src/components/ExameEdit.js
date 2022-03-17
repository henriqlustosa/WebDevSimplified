import React from 'react'

function ExameEdit(props) {

     const {
    exame,
    handleExameChange
  } = props

  function handleChange(changes) {
    handleExameChange(exame.id, { ...exame, ...changes })
  }
  return (
    <>
      <input
        className="paciente-edit__input"
        type="text"
        value={exame.dataResultado}
        onInput={(e) => handleChange({ dataResultado: e.target.value })}

      />
      <input
        className="paciente-edit__input"
        type="text"
        value={exame.microorganismo}
        onInput={(e) => handleChange({ microorganismo: e.target.value })}
      />
        <input
        className="paciente-edit__input"
        type="text"
        value={exame.material}
        onInput={(e) => handleChange({ material: e.target.value })}
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}

export default ExameEdit;