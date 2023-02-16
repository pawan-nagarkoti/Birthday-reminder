import React, { useState } from 'react';
import data from './data';
import List from './List';

// function App() {
//   const [product, setProduct] = useState(data);
//   const handleDelete = (id) => {
//     const removeProduct = product.filter((value) => value.id !== id);
//     setProduct(removeProduct)
//   }
//   const handleDeleteAllUser = () => {
//     setProduct(data.length = 0)
//   }
//   return (
//     <>
//       {
//         product.length > 0 &&
//         product.map(({ age, id, image, name }, index) =>
//           <div key={index}>
//             <img src={image} width='20' height='20' />
//             <p>Name: {name}</p>
//             <p>Age : {age}</p>
//             <button onClick={() => handleDelete(id)}>delete</button>
//           </div>
//         )
//       }
//       <button onClick={handleDeleteAllUser}>Delete All</button>
//     </>
//   )
// }

const App = () => {
  const [product, setProduct] = useState(data);
  const handleDelete = () => {
    setProduct([])
  }
  return (
    <>
      <main>
        <section className='container'>
          <h3>{product.length} birthday today</h3>
          <List product={product} />
          <button onClick={handleDelete}>Delete All</button>
        </section>
      </main>
    </>
  )
}

export default App;
