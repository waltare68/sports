import Nav from 'react-bootstrap/Nav';

function Modal_nav() {
  return (
    <Nav variant="tabs" >
      <Nav.Item>
        <Nav.Link href="#home2">Sign Up</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='#contact2'>Sign In</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Modal_nav;