import React from 'react';
import PacienteList from './PacienteList'


export const ThemeContext = React.createContext()

function App() {
 
  return (
	    <PacienteList pacientes={samplePacientes} />
  ) 
 
}

const samplePacientes = [
  {
    id: 1,
    nome: 'Henrique Lustosa',
    prontuario: 11209913,
    vinculo: 'FUNCIONARIO',
    orgaoPrefeitura: "SMS",
	rfMatricula: "H013026",
	nomeMae: "Sonia Maria Dias Lustosa",
	usuarioId:1
  },
  {
	id: 2,
    nome: 'Jose Vieira Dias Junior',
    prontuario: 11209914,
    vinculo: 'FUNCIONARIO',
    orgaoPrefeitura: "SMS",
	rfMatricula: "H013028",
	nomeMae: "Maria da Conceicao",
	usuarioId:1
  }
]

export default App;
