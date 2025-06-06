import {Button, Card} from 'react-bootstrap';
import '../css/mainProjects.css';
import imgRickAndMorty from '../img/apirickymorty.jpeg'
import db from '../database/db.json'
import pedidosya from '../img/pedidosya.jpg';

const MainProjects = () => {
  return (
    <div className='container d-flex justify-content-around flex-wrap mt-5 mb-5'>
      
      <Card  className='.cards'>
      <Card.Img src={imgRickAndMorty} style={{width: '400px'}}/>
      <Card.Body>
        <Card.Title>{db.proyectos[0].nombre}</Card.Title>
        <Card.Text>
          {db.proyectos[0].descripcion}
        </Card.Text>
        <Card.Text>
          {db.proyectos[0].tecnologias}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card className='.cards'>
      <Card.Img src={pedidosya} style={{width: '400px'}} />
      <Card.Body>
        <Card.Title>{db.proyectos[1].nombre}</Card.Title>
        <Card.Text>
          {db.proyectos[1].descripcion}
        </Card.Text>
        <Card.Text>
          {db.proyectos[1].tecnologias}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default MainProjects
