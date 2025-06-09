import {Button, Card} from 'react-bootstrap';
import '../css/mainProjects.css';
import imgRickAndMorty from '../img/apirickymorty.jpeg'
import db from '../database/db.json'
import pedidosya from '../img/pedidosya.jpg';
import { Link } from 'react-router-dom';

const MainProjects = () => {
  return (
    <div className="container d-flex justify-content-around flex-wrap mt-5 mb-5">
      <Card className="cards">
        <Card.Img src={imgRickAndMorty} className='cardsImg' />
        <Card.Body>
          <Card.Title>{db.proyectos[0].nombre}</Card.Title>
          <Card.Text>{db.proyectos[0].descripcion}</Card.Text>
          <Card.Text>{db.proyectos[0].tecnologias}</Card.Text>
          <Link
            to={db.proyectos[0].link}
            className="btn btn-success"
            target="_blank"
          >
            Git Hub Del Proyecto
          </Link>
        </Card.Body>
      </Card>

      <Card className="cards">
        <Card.Img src={pedidosya} className='cardsImg' />
        <Card.Body>
          <Card.Title>{db.proyectos[1].nombre}</Card.Title>
          <Card.Text>{db.proyectos[1].descripcion}</Card.Text>
          <Card.Text>{db.proyectos[1].tecnologias}</Card.Text>
          <Button variant="danger">En Proceso...</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MainProjects
