import React from 'react'
import './table.css'

const Table = () => {
  return (
    <div>
        <table className='conTable'>
            <tr>
                <th className='tr'>Educacion Tradicional</th>
                <th className='tr'>Formacion Profecional Integral</th>
            </tr>
            <br />
            <tr>
                <td><div>se centra en la trasmicion</div><div>de conocimientos y habilidades </div><div>de un profesor a un estudiante</div></td>
                <td><div>se enfoca en el desarrollo de habilidades</div><div> y competencias que son necesarias</div><div>para el mundo laboral</div></td>
            </tr>
            <br />
            <tr>
            <td><div>el profesor es el centro del procceso</div><div>de enseñanza y el estudiante</div><div>es un reseptor pasivo del conocimiento</div></td>
            <td><div>El estudiante es el centro del proceso de</div><div>aprendizaje y se espera que participe</div><div>activamente en su propio aprendizaje</div></td>
            </tr>
            <br />
            <tr>
                <td><div>la evaluacion en la educacion</div><div>tradicional se caracteriza por ser</div><div>una tarea puntual en un momento</div><div>particular</div></td>
                <td><div>se enfoca en </div><div>la evaluacion de competencias</div></td>
            </tr>

            <tr>
                <td><div>la educacion tradicional se enfoca en la</div><div>trasmicion de conocimientos y</div><div>habilidades especificas</div></td>
                <td><div>la Formacion por competencias </div><div>se enfoca en el desarrollo de habilidades y</div><div>competencias que permiten al estudiante </div><div>resolver problemas en situaciones reales.</div></td>
            </tr>
        </table>
    </div>
  )
}

export default Table