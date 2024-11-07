import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import items from "../components/data"
import Product from './Product'
import { ToastContainer, toast ,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ProductDetails = ({cart , setCart}) => {
  const { id } = useParams()
  const [product, setProduct] = useState({});
  const [related , setRelatedProduct] = useState([]);


  useEffect(() => {

    const filterProduct = items.filter((product) => product.id === Number(id));
    // console.log(filterProduct);

    if (filterProduct.length > 0) {
      setProduct(filterProduct[0]);
    }

    const relatedProduct = items.filter((p)=> p.category === product.category);
    console.log(relatedProduct)

   setRelatedProduct(relatedProduct);
  
  }, [id, product.category]);

  const addToCart = (id , price , title, description , imgSrc) =>{
    const item = { id , price , title, description , imgSrc }
    setCart([...cart , item]);
    console.log(cart);

    toast.success('Product Added on cart Succesfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
    
}


  return (
    <>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition: Bounce
/>
   
      <div className="container Details">
        <div className="img">
          <img src={product.imgSrc} alt="" />
        </div>
        <div className='text-center'>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <a href="#" className="btn btn-primary mx-3"> &#x20b9;{product.price}</a>
          <a href="#" className="btn btn-warning" onClick={() => addToCart(product.id , product.price , product.title, product.description , product.imgSrc)}>Add to cart</a>
        </div>
      </div>
      <h1 className='text-center mt-4'>Related Products</h1>
        <Product items={related} cart={cart} setCart={setCart}/>
    </>
  )
}

export default ProductDetails