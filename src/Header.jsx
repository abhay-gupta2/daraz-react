import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Details from './Details'

function Header() {
    return (
        <>
            <header className="container-fluid">
                <section className="container">
                    <ul className="t-white d-flex justify-content-end t-14 gap-4">
                        <li><a href="#">Save More on App</a></li>
                        <li><a href="#">Become a Seller</a></li>
                        <li><a href="#">Help &amp; Support</a></li>
                        <li onclick="lgn()"><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                        <li><a href="#">भाषा परिवर्तन</a></li>
                    </ul>
                </section>
                <section className="my-2 container">
                    <div className="row pb-4">
                        <div className="col-lg-2 item-start">
                            <a href="/">
                                <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt className="image-fluid" style={{ width: 127 }} />
                            </a>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-10">
                                    <form className="d-flex">
                                        <input type="text" placeholder="Search in Daraz" className="srch" />
                                        <button className="text-white btn-bg border-0 rounded-end p-2"><i className="bi bi-search" /></button>
                                    </form>
                                </div>
                                <div className="col-lg-2"><i className="bi bi-cart text-white fs-3" /></div>
                            </div>
                        </div>
                        <div className="col-lg-2" />
                    </div>
                </section>
            </header>
            <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/category/:cid/' element={<Category/>}/>
            <Route path='/details/:id/' element={<Details/>}/>
            </Routes>
        </>
    )
}

export default Header
