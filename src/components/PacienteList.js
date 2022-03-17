import React, { useContext } from 'react';
import Paciente from './Paciente'
import { PacienteContext} from './App'


function PacienteList({pacientes}){
  const {handlePacienteAdd}= useContext(PacienteContext)

  return(
  
     <div className='paciente-list'>
       <div>
      {pacientes.map(paciente => {
        return (
          <Paciente key={paciente.id}{...paciente}/>
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