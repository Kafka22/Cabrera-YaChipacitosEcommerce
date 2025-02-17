import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({product}) => {
  // console.log({product})

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={product.img} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name} </h5>
        <p className="card-text">${product.price},00 </p>
        {/* <Link className="btn btn-primary" to={"/item/"+ product.id} >Ver más</Link> */}
        <Link className="btn btn-primary" to={`/item/${product.id}`} >Ver más</Link>

      </div>
    </div>
  );
}
//alt+96 comillas invertidas
export default Item