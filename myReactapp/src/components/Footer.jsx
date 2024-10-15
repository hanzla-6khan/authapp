import('../styles/footer.css')
const Footer = () => {
    return (
        <>
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-5 col-12 ft-1">
                            <h3><span>Rent &</span>Relove</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
                            <div className="footer-icons">

                                <i className="fas fa-brands fa-twitter"></i>
                                <i className="fas  fa-instagram"></i>
                                <i className="fas fa-comments fa-2x text-gray-300"></i>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3 col-12 ft-2">
                            <h5>Quick Links</h5>
                            <ul>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="" href="/">Portfolio</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-4 col-12 ft-3">
                            <h5>Quick Links</h5>
                            <p><i className="fas fa-solid fa-phone-volume"></i> +92 03421518303</p>
                            <p><i className="fas fa-solid fa-envelope"></i> Fyp@gmail.com</p>
                            <p><i className="fas fa-solid fa-paper-plane"></i> ZABEST, University .</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Last-footer'>
                <p>Rent And Relove </p>
            </div>
        </>
    )
}

export default Footer