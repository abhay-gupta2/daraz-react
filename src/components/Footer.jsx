import React from 'react'

function Footer() {
    return (
        <>
            <footer className="bg-light my-4 py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            {/* Customer Care */}
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                                        <h3 className="h5 fw-bold text-dark mb-3">Customer Care</h3>
                                        <ul className="list-unstyled small">
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Help Center</a></li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">How to Buy</a></li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Returns &amp; Refunds</a>
                                            </li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">{/* Daraz */}
                                    <div className="col-12 col-md-4 mb-4 mb-md-0">
                                        <h3 className="h5 fw-bold text-dark mb-3">Daraz</h3>
                                        <ul className="list-unstyled small">
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">About Daraz</a></li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Careers</a></li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Daraz Blog</a></li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Terms &amp; Conditions</a>
                                            </li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Privacy Policy</a></li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Digital Payments</a>
                                            </li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Daraz Customer
                                                University</a></li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Daraz Affiliate
                                                Program</a></li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Review &amp; Win</a></li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Meet the winners</a>
                                            </li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Daraz University</a>
                                            </li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Sell on Daraz</a></li>
                                            <li><a href="#" className="text-secondary text-decoration-none hover:text-primary">Code of Conduct</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* App Links */}
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="d-flex gap-2">
                                        <div className="text-center text-md-start mb-3 d-flex">
                                            <img className="me-2" src="https://img.lazcdn.com/us/domino/da7668ef-2724-447a-951a-558dafdfb265_NP-60-60.png" alt="App Icon" style={{ height: 42, width: 42 }} />
                                            <div>
                                                <h3 className="h5 fw-bold txt-orange">Happy Shopping</h3>
                                                <p className="text-secondary d-inline small">Download App</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="d-flex gap-3">
                                        <div>
                                            <img src="https://img.lazcdn.com/us/domino/afd80417-f3df-464e-bc1a-78d790033ae6_NP-126-42.png" alt="App Store" className="mb-2 img-fluid" style={{ maxWidth: 180 }} />
                                            <img src="https://img.lazcdn.com/us/domino/b57e9929-aff3-47d4-b5ec-c0954f271088_NP-126-42.png" alt="Huawei AppGallery" className="mb-2 img-fluid" style={{ maxWidth: 180 }} />
                                        </div>
                                        <div><img src="https://img.lazcdn.com/us/domino/130438e4-2c46-4620-adee-5d6e33b011cb_NP-126-42.png" alt="Google Play" className="mb-2 img-fluid" style={{ maxWidth: 180 }} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
