import React from 'react'
import cards from '../assets/images/cards.png'
import pic1 from '../assets/images/pic1.png'
import pic2 from '../assets/images/pic2.png'

export default function Footer() {
    return (
        <>

            <div id="footer" className="container-lg">
                <div className="row">
                    <div className="col-md-3 col-sm-6 mb-md-0 mb-4">
                        <div className="text-uppercase text-md-start text-center">
                            <h3>QUICK INFO</h3>
                            <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt.</p>
                            <div className="ms-3 ms-md-0">
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <i className=" fa-solid fa-location-arrow text-orange"></i>
                                    <p>2491 Lorem Ipsum Dolor</p>
                                </div>
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <i className="fa-solid fa-phone text-orange"></i>
                                    <p>123 456 789</p>
                                </div>
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <i className="fa-solid fa-envelope text-orange"></i>
                                    <p>your@example.com</p>
                                </div>
                                <div className="d-flex align-items-center gap-3 mb-2">
                                    <i className="fa-solid fa-clock fa-flip-horizontal text-orange"></i>
                                    <p>Mon-Sat 8:00 AM - 8:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-6 mb-md-0 mb-4">
                        <div className="text-uppercase text-center">
                            <h3 className="mb-4">INFORMATION</h3>
                            <div>
                                <ul className="p-0">
                                    <li className="list-unstyled">Lorem ipsum</li>
                                    <li className="list-unstyled">Lorem ipsum</li>
                                    <li className="list-unstyled">Lorem ipsum</li>
                                    <li className="list-unstyled">Lorem ipsum</li>
                                    <li className="list-unstyled">Lorem ipsum</li>
                                    <li className="list-unstyled">Lorem ipsum</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 mb-md-0 mb-4 ps-md-5">

                        <div className="text-uppercase text-center">
                            <h3 className="mb-4">SERVICE</h3>
                            <div>
                                <ul className="p-0">
                                    <li className="list-unstyled">Lorem ipsum</li>
                                    <li className="list-unstyled">Lorem ipsum</li>
                                    <li className="list-unstyled">Lorem ipsum</li>
                                    <li className="list-unstyled">Lorem ipsum</li>
                                    <li className="list-unstyled">Lorem ipsum</li>
                                    <li className="list-unstyled">Lorem ipsum</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6 mb-md-0 mb-4 ps-md-5">
                        <div className="text-uppercase text-md-start text-center">

                            <h3 className="mb-4 ps-1">SOCIAL MEDIA</h3>
                            <div className="d-flex text-center flex-wrap align-items-center justify-content-md-start justify-content-center">
                                <div className="socialMedia me-2">

                                    <a className="px-3 py-2 facebook rounded-circle bg-orange" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                </div>
                                <div className="socialMedia me-2">

                                    <a className="instagram rounded-circle bg-orange" href="#"><i className="fa-brands fa-instagram"></i></a>
                                </div>
                                <div className="socialMedia me-2">

                                    <a className="twitter rounded-circle bg-orange" href="#"><i className="fa-brands fa-twitter"></i></a>
                                </div>
                                <div className="socialMedia">
                                    <a className="linkdin rounded-circle bg-orange" href="#"><i className="fa-brands fa-linkedin-in"></i></a>

                                </div>
                            </div>
                            <div className="pt-3 ps-2">
                                <p className="mb-2">we accept payment via</p>
                                <img className="img-fluid" src={cards} alt="" />
                                <div className="d-flex align-items-center justify-content-md-start justify-content-center gap-3 pt-3">
                                    <div>

                                        <img className="img-fluid" src={pic1} alt="" />
                                    </div>
                                    <div>

                                        <img className="img-fluid" src={pic2} alt="" />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <hr />
            <div className="container">

                <div className="row justify-content-center pb-4 pt-2">
                    <div className="col">
                        <p className="m-0 text-center text-grey link">
                            &copy; <a className="text-grey fw-bold text-decoration-none" href="/">Your Site Name</a>. All Rights Reserved. Designed by
                            <a className="text-grey fw-bold text-decoration-none" href="/"> Arham Affan</a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
