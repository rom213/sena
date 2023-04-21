import { useEffect, useState } from 'react'
import './App.css'
import background from '../public/perro.jpg'
import educacion from '../public/educacion.jpeg'
import deven from '../public/deveen.jpeg'
import Table from './component/tables/Table'



function  App() {
  const [first, setfirst] = useState(1)
  useEffect(() => {
    if (first===9) {
      setfirst(1)
    }
  }, [first])
  


  return (
   <div className="app" id="app" style={{backgroundImage:`url(${educacion})`}}>
    <h1 className='h'>Ejercicio  3</h1>
      <div className={`${first < 7 &&  'contenRes' }`}>
        {
          first==1 ?
          <div className='cont'> 
            <h3>{first}. ¿Qué hace el docente?</h3>
            <h4> explica y explora claramente sus conocimientos, enfocándose de manera central en el aprendizaje y memorización del alumno.</h4>
          </div>
          :first==2 ?
          <div className='cont'>
            <h3>{first}. ¿Cuál es el rol del Alumno?</h3>
            <h4>el rol del alumno es principalmente intentar comprender y memorizar la información dada por el docent</h4>
          </div>
          :first==3 ?
          <div className='cont'>
            <h3>{first}. ¿Cómo es el desarrollo de los contenidos, temas, actividades, competencias, objetivos?</h3>
            <h4>son contenidos previamente establecidos por un plan de área, lo único que cambia es la forma en que el profesor transmite estos conocimientos a los alumnos </h4>
          </div>
          :first==4 ?
          <div className='cont'>
            <h3>{first}. ¿Con que recursos prioritariamente se desarrollaba la enseñanza y el aprendizaje</h3>
            <h4>los recursos principales son los libros y el tablero o pizarra</h4>
          </div>
          :first==5 ?
          <div className='cont'>
            <h3>{first}. ¿Cómo se evaluaba?</h3>
            <h4>se evalúa por medio de exámenes de carácter oral o escrito </h4>
          </div>
          :first==6 ?
          <div className='cont'>
            <h3>{first}. ¿Para qué se evaluaba?</h3>
            <h4>se evalúa el conocimiento adquirido por el alumno en los temas que se han enseñado.</h4>
          </div>
          :first ==7 ?
          <div>
            <img className='img2' src={`${deven}`} alt="" />
          </div>
          :first ==8 ?
          <Table />:
          <div></div>

        }
        <button  className={`${first < 7 ? 'btn1' : 'btn'}`} onClick={()=>{setfirst(first+1)}}><h3>Next</h3></button>
      </div>
   </div>
  )
}

export default App


