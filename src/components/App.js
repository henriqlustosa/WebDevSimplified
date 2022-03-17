import React, { useState, useEffect } from "react";
import PacienteList from "./PacienteList";
import "../css/app.css";
import { v4 as uuidv4 } from "uuid";
export const PacienteContext = React.createContext();
const LOCAL_STORAGE_KEY = 'pacienteWithReact.pacientes'
function App() {
  const [pacientes, setPacientes] = useState(samplePacientes);
  useEffect(() => {
  
      const pacienteJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
      if(pacienteJSON != null) setPacientes(JSON.parse(pacienteJSON))
    }
  , [])

   useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pacientes))
  }, [pacientes])

  const pacienteContextValue = {
	handlePacienteAdd,
	handlePacienteDelete,
  };
  function handlePacienteAdd() {
  	const newPaciente = {
      id: uuidv4(),
      nome: "New",
      prontuario: 1,
      vinculo: "NEW_FUNCIONARIO",
      orgaoPrefeitura: "NEW_SMS",
      rfMatricula: "NEW1",
      nomeMae: "NEW_NOME_MAE",
      usuarioId: uuidv4(),
      exames: [
        {
          id: uuidv4(),
          dataResultado: "2011-01-01",
          microorganismo: "NEW_A. BAUMANNII - MDR",
          material: "NEW_CATETER",
        },
        {
          id: uuidv4(),
          dataResultado: "2011-01-11",
          microorganismo: "NEW_E. FAECALIS VRE",
          material: "NEW_CATETER DUPLO J BILATERALCATETER",
        },
      ],
    };

    setPacientes([...pacientes, newPaciente]);
  }

  function handlePacienteDelete(id) {
    setPacientes(pacientes.filter((paciente) => paciente.id !== id));
  }

  return (
    <PacienteContext.Provider value={pacienteContextValue}>
      <PacienteList pacientes={pacientes}/>
    </PacienteContext.Provider>
  );
}

const samplePacientes = [
  {
    id: 1,
    nome: "Henrique Lustosa",
    prontuario: 11209913,
    vinculo: "FUNCIONARIO",
    orgaoPrefeitura: "SMS",
    rfMatricula: "H013026",
    nomeMae: "Sonia Maria Dias Lustosa",
    usuarioId: 1,
    exames: [
      {
        id: 1,
        dataResultado: "2022-03-11",
        microorganismo: "A. BAUMANNII - MDR",
        material: "CATETER",
      },
      {
        id: 2,
        dataResultado: "2022-03-10",
        microorganismo: "E. FAECALIS VRE",
        material: "CATETER DUPLO J BILATERALCATETER",
      },
    ],
  },
  {
    id: 2,
    nome: "Jose Vieira Dias Junior",
    prontuario: 11209914,
    vinculo: "FUNCIONARIO",
    orgaoPrefeitura: "SMS",
    rfMatricula: "H013028",
    nomeMae: "Maria da Conceicao",
    usuarioId: 1,
    exames: [
      {
        id: 1,
        dataResultado: "2022-03-13",
        microorganismo: "E. FAECIUM VRE",
        material: "CATETER",
      },
      {
        id: 2,
        dataResultado: "2022-03-09",
        microorganismo: "E. FAECALIS VRE",
        material: "CATETER VENOSO ",
      },
    ],
  },
];

export default App;
