import React from 'react';
import Paciente from './Paciente'
function PacienteList({pacientes}){

return(
    <>
     <div>
      {pacientes.map(paciente => {
        return (
          <Paciente
            key={paciente.id}
            {...paciente}
          />
        )
      })}
    </div>
    <button>Add Recipe</button>
    </>
)
}


export default PacienteList;