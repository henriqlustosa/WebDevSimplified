import React, {useContext} from "react";
import ExameEdit from "./ExameEdit";
import { PacienteContext} from './App'

function PacienteEdit({paciente}) {
 const { handlePacienteChange } = useContext(PacienteContext)

  function handleChange(changes) {
    handlePacienteChange(paciente.id, { ...paciente, ...changes })
  }

  function handleExameChange(id, exame) {
    const newExames = [...paciente.exames]
    const index = newExames.findIndex(i => i.id === id)
    newExames[index] = exame
    handleChange({ exames: newExames })
  }


  return (
    <div className="paciente-edit">
      <div className="paciente-edit__remove-button-container">
        <button className="btn paciente-edit__remove-button">&times;</button>
      </div>
      <div className="paciente-edit__details-grid">
        <label htmlFor="nome" className="paciente-edit__label">
          Nome
        </label>
        <input
          type="text"
          name="nome"
          id="nome"
          value={paciente.nome}
          onInput={e => handleChange({ nome: e.target.value })}
          className="paciente-edit__input"
        />
        <label htmlFor="prontuario" className="paciente-edit__label">
          Prontuario
        </label>
        <input
          type="number"
          name="prontuario"
          id="prontuario"
          value={paciente.prontuario}
          onInput={e => handleChange({ prontuario: e.target.value })}
          className="paciente-edit__input"
        />

        <label htmlFor="orgaoDaPrefeitura" className="paciente-edit__label">
          Órgão da Prefeitura
        </label>
        <input
          type="text"
          name="orgaoDaPrefeitura"
          id="orgaoDaPrefeitura"
          value={paciente.orgaoPrefeitura}
          onInput={e => handleChange({ orgaoDaPrefeitura: e.target.value })}
          className="paciente-edit__input"
        />

        <label htmlFor="matricula" className="paciente-edit__label">
          Matricula
        </label>
        <input
          type="text"
          name="matricula"
          id="matricula"
          value={paciente.rfMatricula}
          onInput={e => handleChange({ rfMatricula: e.target.value })}
          className="paciente-edit__input"
        />

        <label htmlFor="nomeMae" className="paciente-edit__label">
          Nome da Mãe
        </label>
        <input
          type="text"
          name="nomeMae"
          id="nomeMae"
          value={paciente.nomeMae}
          onInput={e => handleChange({ nomeMae: e.target.value })}
          className="paciente-edit__input"
        />

        <label htmlFor="usuarioId" className="paciente-edit__label">
          Usuario ID
        </label>
        <input
          name="usuarioId"
          id="usuarioId"
          value={paciente.usuarioId}
          onInput={e => handleChange({ usuarioId: e.target.value })}
          className="paciente-edit__input"
        ></input>
      </div>
      <br />
      <label className="paciente-edit__label">Exames</label>
      <div className="paciente-edit__exame-grid">
    
      
        <div>Data do Resultado</div>
        <div>Microorganismo</div>
        <div>Material</div>
        <div></div>
        {paciente.exames.map(exame => (
          <ExameEdit
            key={exame.id}
            handleExameChange={handleExameChange}
            exame={exame}
          />
        ))}
      </div>
      <div className="paciente-edit__add-exame-btn-container">
        <button className="btn btn--primary">Add Exame</button>
      
      </div>
    </div>
  );
}

export default PacienteEdit;
