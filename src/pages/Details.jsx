import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    let {id}=useParams()
    let [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
          .then(res => res.json())
          .then(a => setProduct(a));
    },[])
    return (
        <>
            <section className="container my-3">
                <div className="shadow p-2">
                        <div className='d-flex gap-4'>
                            <div className="col-lg-4 me-5">
                                <img src={product.thumbnail} alt style={{ height: 400 }} />
                            </div>
                            <div className="my-3 p-3">
                                <h5>{product.title}</h5>
                                <p>{product.description}</p>
                                <p className="my-4">$ {product.price}</p>
                                <p className='my-4 text-secondary'>{product.discountPercentage}%</p>
                                <div className="d-flex gap-2 mt-5 py-5">
                                    <button style={{ backgroundColor: 'skyblue', color: 'white', padding: 10, border: 'none' }}>Buy Now</button>
                                    <button style={{ backgroundColor: 'orange', color: 'white', padding: 10, border: 'none' }}>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                </div>
            </section>


        </>
    )
}

export default Details
