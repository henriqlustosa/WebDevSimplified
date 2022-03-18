import React, {useContext} from "react";
import ExameList from "./ExameList";
import {PacienteContext}  from './App'


function Paciente(props) {
  const {
    id,
    nome,
    prontuario,
    vinculo,
    orgaoPrefeitura,
    rfMatricula,
    nomeMae,
    exames,
  
  } = props;
 const {handlePacienteDelete, handlePacienteSelect} = useContext(PacienteContext)
  return (
    <div className="paciente">
      <div className="paciente__header">
        <h3 className="paciente__title">{nome}</h3>
        <div>
          <button 
          className="btn btn--primary mr-1"
           onClick={() => handlePacienteSelect(id)}
          >Edit</button>
          <button
           className="btn btn--danger"
           onClick={() => handlePacienteDelete(id)}
           >Delete</button>
        </div>
      </div>
      <div className="paciente__row">
        <span className="paciente__label">Prontuario: </span>
        <span className="paciente__value">{prontuario}</span>
      </div>
      <div className="paciente__row">
        <span className="paciente__label">Vinculo: </span>
        <span className="paciente__value">{vinculo}</span>
      </div>
      <div className="paciente__row">
        <span className="paciente__label">Órgão da Prefeitura: </span>
        <span className="paciente__value">{orgaoPrefeitura}</span>
      </div>

      <div className="paciente__row">
        <span className="paciente__label"> Matricula: </span>
        <span className="paciente__value">{rfMatricula} </span>
      </div>
      <div className="paciente__row">
        <span className="paciente__label">Nome da mãe: </span>
        <span className="paciente__value">{nomeMae}</span>
      </div>
     
      <div className="paciente__row">
        <span className="paciente__label">Exames:</span>
        <div className="paciente__value paciente__value--idented">
          <ExameList exames={exames} />
        </div>
      </div>
    </div>
  );
}

export default Paciente;
