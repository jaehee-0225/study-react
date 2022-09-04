import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';


let YellowBtn = styled.button`
  background: ${ props => props.bg };
  color: ${ props => props.bg == 'blue' ? 'white' : 'black' };
  padding: 10px;
  border: 0;
`


function Detail(props){

  let [count, setCount] = useState(0);
  let {id} = useParams();
  let getItem = props.shoes.find(function(a){
    return a.id == id;
  }) 
  
  let [alert, setAlert] = useState(true);
  useEffect(()=> {
    setTimeout(()=> {
      setAlert(false);
    }, 2000)
  })


  return(
    
    <div className="container">      
      {
        alert == true 
        ? <div className="alert alert-warning">2초이내 구매시 할인</div>
        : null
      }
      {count}
      <button onClick={()=> { setCount(count+1) }}>버튼</button>
      <div className="row">
        <div className="col-md-6">
          <img src={'https://codingapple1.github.io/shop/' + (getItem.img) + '.jpg'} width="100%" />
        </div>
        <div className="col-md-6"> 
        
          <h4 className="pt-5">{getItem.title}</h4>
          <p>{getItem.content}</p>
          <p>{getItem.price}원</p>
          <button className="btn btn-danger">주문하기</button> 
          <YellowBtn bg="yellow">버튼</YellowBtn>
        </div>
      </div>
    </div> 
  )
}

export default Detail;

