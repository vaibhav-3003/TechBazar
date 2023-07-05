import React from 'react'
import FormatPrice from '../helper/FormatPrice';
import { Link } from 'react-router-dom';

const ListView = ({products}) => {
  return (
    <div>
      {
        products.map((e)=>{
          const {id,name,image,price,description} = e;

          return (
            <div>
              <figure>
                <img src={image} alt={name} />
              </figure>

              <div>
                <h3>{name}</h3>
                <p>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 99)}...</p>
                <Link to={`/singleProduct/${id}`}>
                  <button>Buy Now</button>
                </Link>
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default ListView
