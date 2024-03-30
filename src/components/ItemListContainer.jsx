import { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';

import data from "../data/products.json";

export const ItemListContainer = () =>{
     const [products, setProducts] = useState([])

     useEffect(() => {
      const get = new Promise((resolve, reject) => {
          setTimeout(() => resolve(data), 2000);
      });
      
      get.them((data) => {
          setProducts(data);
     });
     }, []);

return (
 <Container className="mt-4">{products.map((product) => (  
<h1>{product.name}</h1>
))}
</Container>
);
};

