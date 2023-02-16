import React from 'react';

const List = ({ product }) => {
  console.log(product)
  return (
    <>
      {product.map(({ name, image, age }, index) =>
        <div key={index} className='person'>
          <img src={image} alt={name} />
          <div>
            <h4>{name}</h4>
            <p>Age : {age}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default List;