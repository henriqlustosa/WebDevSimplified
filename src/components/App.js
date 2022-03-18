import React, { useState, useEffect } from "react";
import PacienteList from "./PacienteList";
import "../css/app.css";
import { v4 as uuidv4 } from "uuid";
import PacienteEdit from './PacienteEdit'

export const PacienteContext = React.createContext();

const LOCAL_STORAGE_KEY = 'pacienteWithReact.pacientes'

function App() {
  const [selectedPacienteId, setSelectedPacienteId] = useState()
  const [pacientes, setPacientes] = useState(samplePacientes)
  const selectedPaciente = pacientes.find(paciente => paciente.id === selectedPacienteId)
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
  handlePacienteSelect,
  handlePacienteChange
  };

  function handlePacienteSelect(id) {
    setSelectedPacienteId(id)
  }


  function handlePacienteAdd() {
  	const newPaciente = {
      id: uuidv4(),
      nome: '',
      prontuario: '',
      vinculo: '',
      orgaoPrefeitura: '',
      rfMatricula: '',
      nomeMae: '',
      usuarioId: uuidv4(),
      exames: [
        {
          id: uuidv4(),
          dataResultado: '',
          microorganismo: '',
          material: '',
        },
     
      ],
    };

    setPacientes([...pacientes, newPaciente]);
  }
  function handlePacienteChange(id, paciente) {
    const newPacientes = [...pacientes]
    const index = newPacientes.findIndex(r => r.id === id)
    newPacientes[index] = paciente
    setPacientes(newPacientes)
  }

  function handlePacienteDelete(id) {

     if (selectedPacienteId != null && selectedPacienteId === id) {
      setSelectedPacienteId(undefined)
    }
    setPacientes(pacientes.filter((paciente) => paciente.id !== id));
  }

  return (
    <PacienteContext.Provider value={pacienteContextValue}>
      <PacienteList pacientes={pacientes}/>
        {selectedPaciente && <PacienteEdit paciente={selectedPaciente} />}
      
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
