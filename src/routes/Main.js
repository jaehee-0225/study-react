
import {Routes, Route, NavLink, useNavigate, Outlet} from 'react-router-dom';
import bg from '../image/bg.png';


function Main(props){

  return(
    <>
      <div className='main_bg' style={{ backgroundImage : 'url(' + bg + ')', backgroundSize: 'cover', backgroundPosition: 'center', marginBottom: '40px' }}></div>

      <div className='container'>
        <div className='row' >
          {
            props.shoes.map(function(a, i){
              return(
                <NavLink 
                  className='col-md-4' key={i} to={"/detail/" + [i]}
                  style={{color: "black", textDecoration: "none" }}  
                >
                  <img src={'https://codingapple1.github.io/shop/' + (props.shoes[i].img) + '.jpg'} width="35%" alt="item img"/>
                  <h4>{props.shoes[i].title} {props.shoes[i].id}</h4>
                  <p>{props.shoes[i].content}</p>
                  <p>{props.shoes[i].price}원</p>
                </NavLink>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Main;