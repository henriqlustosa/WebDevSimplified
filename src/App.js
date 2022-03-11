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
	usuarioId:1,
	exames: [
      {
        id: 1,
        dataResultado: '2022-03-11',
        microorganismo: 'A. BAUMANNII - MDR',
		material:'CATETER'
      },
      {
		id: 2,
        dataResultado: '2022-03-10',
        microorganismo: 'E. FAECALIS VRE',
		material:'CATETER DUPLO J BILATERALCATETER'
      }
    ]
  },
  {
	id: 2,
    nome: 'Jose Vieira Dias Junior',
    prontuario: 11209914,
    vinculo: 'FUNCIONARIO',
    orgaoPrefeitura: "SMS",
	rfMatricula: "H013028",
	nomeMae: "Maria da Conceicao",
	usuarioId:1,
	exames: [
		{
		  id: 1,
		  dataResultado: "2022-03-13",
		  microorganismo: 'E. FAECIUM VRE',
		  material:'CATETER'
		},
		{
		  id: 2,
		  dataResultado: '2022-03-09',
		  microorganismo: 'E. FAECALIS VRE',
		  material:'CATETER VENOSO '
		}
	  ]

  }
]

export default App;
