import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  // const products =[
  //   {name:"Laptop",price:53000},
  //   {name:"Phone",price:343000},
  //   {name:"Watch",price:33000},
  //   {name:"Tablet",price:73000},
  // ]
  return (
   <div>
    {/* {
      products.map(product=> <Product name={product.name} price={product.price}></Product>)
    } */}
    {/* <Product name="Laptop"></Product> */}


    <Counter></Counter>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(33)
  // console.log(abc)

  // const increase = () =>{
  //   const newCount= count + 1;
  //   setCount(newCount)
  // }

  const increase = () => setCount(count +1)
  const decrease = () => setCount(count -1)

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}


// function Product(props){
//   return(
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }

export default App;
