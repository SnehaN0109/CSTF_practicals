import { useState } from 'react'
import Productcard from './Productcard';
import './App.css'

function App() {
  const [products, setproducts] = useState([{id:1,"name":"Dinner set","product":"utensils","img":"./dinnerset.jpg","description":"Very nice quality dinner"}]);


  return (
    <div>
      <h1>Product Catlog</h1>
      {
      products.map((product)=>
      (
          <Productcard
          key={product.id}
          name={product.name}
          img={product.img}
          description={product.description}
          />
      ))
    }
    </div>  
  );
}

export default App
