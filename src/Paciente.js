import React from 'react';


function Paciente(props){
    const {
        nome,
        prontuario,
        vinculo,
        orgaoPrefeitura,
        rfMatricula,
        nomeMae,
        usuarioId

    } = props

    return (
            <div>
                <div>
                    <h3>{nome}</h3>
                    <div>
                    <button>Edit</button>
                    <button>Delete</button>
                    </div>
                </div>
                <div>
                    <span>Prontuario: </span>
                    <span>{prontuario}</span>
                </div>
                <div>
                    <span>Vinculo: </span>
                    <span>{vinculo}</span>
                </div>
                <div>
                    <span>Órgão da Prefeitura: </span>
                    <div>{orgaoPrefeitura}</div>
                </div>
                
                <div>
                    <span>Matricula: </span>
                    <span>{rfMatricula} </span>
                </div>
                <div>
                    <span>Nome da mãe: </span>
                    <span>{nomeMae}</span>
                </div>
                <div>
                    <span>Usuario Id: </span>
                    <div>{usuarioId}</div>
                </div>
            </div>
    
        )
}

export default Paciente;