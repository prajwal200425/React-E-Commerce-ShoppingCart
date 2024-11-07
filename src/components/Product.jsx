import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast ,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Product({ items , cart , setCart }) {

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
            <div className='container my-4'>
                <div className='row'>
                    {
                        items.map((product) => {
                            return (
                                <div className="col-lg-4 my-3 text-center col-md-6" key={product.id}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <Link to={`/product/${product.id}`}>
                                            <img src={product.imgSrc} className="card-img-top" alt={product.title} />
                                        </Link>
                                        <div className="card-body">
                                            <h5 className="card-title">{product.title}</h5>
                                            <span className="btn btn-primary mx-3"> &#x20b9;{product.price}</span>
                                            <a href="#" className="btn btn-warning" onClick={() => addToCart(product.id , product.price , product.title, product.description , product.imgSrc)}>Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}