import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Home() {
  let [cat, setCat] = useState([])
  let [product, setProduct] = useState([])
  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then(res => res.json())
      .then(a => setCat(a));

    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(a => setProduct(a.products));
  }, [])
    return (
        <>
            <section className="container">
                {/* Carousel Section */}
                <div className="d-flex gap-2">
                    <div id="carouselExampleIndicators" className="carousel slide slider">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={2} aria-label="Slide 3" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={3} aria-label="Slide 4" />
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={4} aria-label="Slide 5" />
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://img.lazcdn.com/us/domino/67feea0c-6e2a-4efc-9e0e-c9adc6944b0d_NP-1976-688.jpg_2200x2200q80.jpg" className="d-block w-100" alt />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.lazcdn.com/us/domino/b0b8ba6c-415c-4942-b7bb-99abac3913af_NP-1976-688.jpg_2200x2200q80.jpg" className="d-block w-100" alt />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.lazcdn.com/us/domino/495d4b91-7be5-4369-9a77-b1508d81487e_NP-1976-688.png_2200x2200q80.png" className="d-block w-100" alt />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.lazcdn.com/us/domino/d04e8cdb-5cc0-47a7-bbe8-64a95201d56e_NP-1976-688.jpg_2200x2200q80.jpg" className="d-block w-100" alt />
                            </div>
                            <div className="carousel-item">
                                <img src="https://img.lazcdn.com/us/domino/371352d2-ecdb-431c-988c-0b2cbc46b7c5_NP-1976-688.jpg_2200x2200q80.jpg" className="d-block w-100" alt />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* Download Card Section */}
                    <div className="download-card">
                        <div className="download-header">
                            <img className="download-icon" src="https://img.lazcdn.com/us/domino/1ee015d6a5c62fd0339c88c657c1c183.jpg_120x120q80.jpg" alt />
                            <p className="download-title">Download the App</p>
                        </div>
                        <div className="download-block">
                            <span className="fa fa-star download-star" />
                            <span className="download-rating">4.8 Rated</span>
                            <div className="download-text">Download App</div>
                            <div className="download-feature">
                                <img className="download-feature-icon" src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png" alt />
                                <p className="download-feature-text">Free Delivery</p>
                            </div>
                            <div className="download-feature">
                                <img className="download-feature-icon" src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png" alt />
                                <p className="download-feature-text">Time Limited</p>
                            </div>
                        </div>
                        <div className="download-links">
                            <img className="download-app-image" src="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01da6D0K1Khogk708ZP_!!6000000001196-0-tps-150-150.jpg_360x360q80.jpg" alt />
                            <div className="download-store-links">
                                <img className="download-store-icon" src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01uAl8kB1wEv2DNjdhB_!!6000000006277-2-tps-125-36.png" alt />
                                <img className="download-store-icon mt-2" src="https://img.lazcdn.com/g/tps/imgextra/i1/O1CN01QJGFfc1S0mKngu4rQ_!!6000000002185-2-tps-125-36.png" alt />
                            </div>
                        </div>
                        <span className="download-footer">Download the App Now!</span>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="bg-image" style={{ backgroundImage: 'url("https://img.lazcdn.com/us/domino/a7381fc8-f8e1-482c-9ea5-00785b64bf01_NP-1920-500.gif_2200x2200q80.gif")', height: 200, width: 1100, backgroundSize: 'auto', backgroundPosition: 'top' }}>
                </div>
                <div className="fs-4 my-2">
                    <p>Flash Sale</p>
                </div>
                <div className="d-flex justify-content-between txt-orange border-bottom p-4 bg-white">
                    <div className="pt-2">On Sale Now</div>
                    <div className="text-uppercase fs-5 border border-warning p-2 hover-bg-warning hover-text-white">
                        <a href="#" className="txt-orange">Shop all products</a>
                    </div>
                </div>
                <div className="row my-3 t-14">
                    {product.slice(0,6).map((a)=>(
                        <div className="col-lg-2 p-1">
                            <Link to={`/details/${a.id}`}>
                        <div className="fs">
                            <img src={a.thumbnail} />
                            <h6>{a.title}</h6>
                            <p className="txt-orange">$ {a.price}</p>
                            <div className='d-flex justify-content-between px-4'>
                            <p className='text-secondary'>{a.rating} <i class="bi bi-star-fill txt-orange"></i></p>
                            <p>{a.discountPercentage}%</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    ))}
                </div>
                <div className=" mt-3 " style={{ fontSize: 22 }}>Category
                    <div className="row  mt-4">
                        <div className="col-lg-12 ctgry">
                        {cat.slice(0,8).map((a)=>(<Link to={`/category/${a.slug}`}>
                                <div className='pt-5'>
                                    <p>{a.name}</p>
                                </div>
                            </Link>))}
                        </div>
                        <div className="col-lg-12 ctgry">
                        {cat.slice(8,16).map((a)=>(<Link to={`/category/${a.slug}`}>
                                <div className='pt-5'>
                                    <p>{a.name}</p>
                                </div>
                            </Link>))}
                        </div>
                    </div>
                </div>
                {/* just for you */}
                <div>
                    <p>Just For You</p>
                </div>
                <div className="row">
                    {product.slice(6,18).map((a)=>(
                        <div className="col-lg-2 jfy">
                        <Link to={`/details/${a.id}`}>
                        <img src={a.thumbnail} />
                            <h6 style={{height:20, overflow:'hidden',textAlign:'center'}}>{a.title}</h6>
                            <div className='px-4'>
                                <p>$ {a.price}</p>
                                <p>{a.discountPercentage}%</p>
                            </div>
                        </Link>
                    </div>
                    ))}
                    
                </div>
                {/* just for you */}
            </section>



        </>
    )
}

export default Home
