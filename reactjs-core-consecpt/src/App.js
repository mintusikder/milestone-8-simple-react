import logo from './logo.svg';
import './App.css';

function App() {
  const products =[
    {name:"Laptop",price:53000},
    {name:"Phone",price:343000},
    {name:"Watch",price:33000},
    {name:"Tablet",price:73000},
  ]
  return (
   <div>
    {
      products.map(product=> <Product name={product.name} price={product.price}></Product>)
    }
    {/* <Product name="Laptop"></Product> */}
    </div>
  );
}

function Product(props){
  return(
    <div className='product'>
      <h3>Name: {props.name}</h3>
      <p>Price: {props.price}</p>
    </div>
  )
}

export default App;
