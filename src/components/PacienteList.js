import React from 'react';
import Paciente from './Paciente'
function PacienteList(props){
  const {
    pacientes,
    handlePacienteAdd,
    handlePacienteDelete
  } = props
return(
  
     <div className='paciente-list'>
       <div>
      {pacientes.map(paciente => {
        return (
          <Paciente
            key={paciente.id}
            handlePacienteDelete={handlePacienteDelete}
            {...paciente}
          />
        )
      })}
    </div>
     <div className="paciente-list__add-paciente-btn-container">
    <button
     className="btn btn--primary"
     onClick={handlePacienteAdd}
     >Add Paciente</button>
    </div>
    </div>
    
)
}


export default PacienteList;