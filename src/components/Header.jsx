import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Category from '../pages/Category'
import Details from '../pages/Details'

function Header() {
    return (
        <>
            <header className="container-fluid">
                <div className="container">
                    <ul className="t-white d-lg-flex d-md-flex  justify-content-end t-14 gap-4 d-none">
                        <li><a href="#">Save More on App</a></li>
                        <li><a href="#">Become a Seller</a></li>
                        <li><a href="#">Help &amp; Support</a></li>
                        <li onclick="lgn()"><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">भाषा परिवर्तन</a></li>
                    </ul>
                </div>
                <div className="my-2 container">
                    <div className="d-flex justify-content-between gap-3 pb-4">
                        <div className="item-start">
                            <a href="/">
                                <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt className="image-fluid" style={{ width: 127 }} />
                            </a>
                        </div>
                        <div className="">
                            <div className="row">
                                <div className="col-10">
                                    <form className="d-flex">
                                        <input type="text"  placeholder="Search in Daraz" className="srch" />
                                        <button className="text-white btn-bg border-0 rounded-end p-2"><i className="bi bi-search" /></button>
                                    </form>
                                </div>
                                <div className="col-2"><i className="bi bi-cart text-white fs-3" /></div>
                            </div>
                        </div>
                        <div className="col-lg-2" />
                    </div>
                </div>
            </header>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/category/:cid/' element={<Category />} />
                <Route path='/details/:id/' element={<Details />} />
            </Routes>
        </>
    )
}

export default Header
