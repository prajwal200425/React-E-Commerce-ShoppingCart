import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Items from "./data"
import { useState } from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaCartArrowDown } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";


function Navbar({ setData , cart }) {
   const location = useLocation();
    const navigate = useNavigate();
    const [search, setSearch] = useState("")

    const filterByCategory = (category) => {
        const element = Items.filter((product) => product.category === category);
        console.log(element);
        setData(element);
    }

    const filterByPrice = (price) => {
        const element = Items.filter((product) => product.price >= price);
        setData(element);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${search}`);
        setSearch("");
    }

    return (
        <>
            <header className='sticky-top'>
                <div className="nav-bar">
                <button className='btn btn-primary'>
                <Link to={"/"} className="brand">
                    <GoHomeFill />

                    </Link>
                </button>
                    <div className='brand'> E-Commerce</div>
                    <form onSubmit={handleSubmit} className="search-bar">
                        <input
                            type="text"
                            placeholder='Search Products'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>
                    <Link to={"/cart"} className="cart">
                        <button type="button" className="btn btn-primary position-relative">
                        <FaCartArrowDown />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>
                        </button>
                    </Link>
                </div>

               {
                location.pathname == '/' &&(
                    <div className="nav-bar-wrapper">
                    <div className="items">Filter by {"->"}</div>
                    <div onClick={() => filterByCategory('mobiles')} className="items">Mobile</div>
                    <div className="items" onClick={() => filterByCategory('laptops')}>Laptops</div>
                    <div className="items" onClick={() => filterByCategory('tablets')}>Tablets</div>
                    <div className="items" onClick={() => filterByPrice("29999")}>{">="}29999</div>
                    <div className="items" onClick={() => filterByPrice("49999")}>{">="}49999</div>
                    <div className="items" onClick={() => filterByPrice("69999")}>{">="}69999</div>
                    <div className="items" onClick={() => filterByPrice("89999")}>{">="}89999</div>
                </div>
    )
               }
            </header>
        </>
    )
}

export default Navbar;