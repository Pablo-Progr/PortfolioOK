import { Button, Form } from 'react-bootstrap'
import '../css/mainContact.css'

const MainContact = () => {
  return (
    <div className="container d-flex justify-content-center flex-column mt-5 mb-5">
      <Form className="form">
        <h2 className='d-flex justify-content-center'>Contactame</h2>
        <Form.Group
          className="mb-3 container"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Label className="m-3">Nombre</Form.Label>
          <Form.Control type="text" placeholder="Nombre" />
          <Form.Label className="m-3">Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" />
          <Form.Label className="m-3">Motivo de Contacto</Form.Label>
          <Form.Control type="text" placeholder="Motivo" />
          <Form.Label className="m-3">Mail</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
          <Form.Label className="m-3">Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
          <Button className="m-3" variant="success" type="submit">Enviar</Button>
        </Form.Group>
      </Form>
    </div>
  );
}

export default MainContact
