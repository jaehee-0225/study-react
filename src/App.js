import { useState } from 'react';
import { Navbar, Container, Nav, ListGroup } from 'react-bootstrap';
import './App.css';
import data from './data.js';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Main from './routes/Main.js';
import Detail from './routes/Detail.js';
// import About from './routes/About.js';

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">..Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=> {navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=> {navigate('/detail')}} >Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Main shoes={shoes}/>} />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/event" element={<EventPage/>} >
          <Route path="one" element={<div>첫 주문시 양배푸즙</div>} />
          <Route path="two" element={<div>생일 쿠폰 </div>} />
        </Route>

        <Route path="*" element={<div>404 없엉~</div>} />
      </Routes>
      

      

    </div>
  );
}

function EventPage(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
