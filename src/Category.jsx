import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Category() {
    let {cid}=useParams()
    let [product, setProduct] = useState([])
    useEffect(() => {
        fetch(`https://dummyjson.com/products/category/${cid}`)
          .then(res => res.json())
          .then(a => setProduct(a.products));
    },[])
  return (
    <>
          <section className="container">
              <div className="my-2 fs-4">
                  <p style={{textTransform:'capitalize',fontWeight:'bold', fontSize:44}}>{cid}</p>
              </div>
              <div className="row g-3">
                {product.map((a)=>(<div className="col-lg-3">
                      <Link to={`/details/${a.id}`}>
                          <div className="price shadow p-2" style={{overflow:'hidden'}}>
                              <img src={a.thumbnail} alt />
                              <p className="text-dark">{a.title}</p>
                              <div className="d-flex gap-2 ">
                                  <p className="txt-orange">{a.price}</p>
                                  <p className="text-secondary">{a.discountPercentage}%</p>
                              </div>
                          </div>
                      </Link>
                  </div>))}
              </div>
          </section>

    </>
  )
}

export default Category
