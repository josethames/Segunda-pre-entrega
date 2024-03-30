import {useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';


import data from "../data/products.json";

export const ItemDetailContainer = () =>{
     const [product, setProducts] = useState([null])

     useEffect(() => {
      const get = new Promise((resolve, reject) => {
          setTimeout(() => resolve(data), 2000);
      });
      
      get.then((data) => {
     });
     }, []);

     if(!product) return <div>loading</div>;
return (
<Container className="mt-4">
   <h1> {product.name}</h1>
   <img src={product.img} alt="s" />
    </Container>
);
};