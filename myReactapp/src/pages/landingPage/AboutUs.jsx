

const AboutUs = () => {
    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">About Us</h2>
            <div className="row">
                {/* Card 1 */}
                <div className="col-md-4">
                    <div className="card mb-4 py-3 border-left-success">
                        <div className="card-body">
                            <h5 className="card-title">Our Mission</h5>
                            <p className="card-text">
                                We aim to deliver high-quality services to our customers, ensuring their satisfaction and trust in our brand.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="col-md-4">
                    <div className="card mb-4 py-3 border-left-success">
                        <div className="card-body">
                            <h5 className="card-title">Our Vision</h5>
                            <p className="card-text">
                                To be a leading company in the industry, known for our innovative solutions and commitment to excellence.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="col-md-4">
                    <div className="card mb-4 py-3 border-left-success">
                        <div className="card-body">
                            <h5 className="card-title">Our Values</h5>
                            <p className="card-text">
                                We prioritize integrity, quality, and customer satisfaction in everything we do, ensuring our values guide our actions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <div className="card mb-4 py-3 border-left-success">
                        <div className="card-body">
                            <h5 className="card-title">Who We Are</h5>
                            <p className="card-text">
                                We are a dedicated team of professionals with a passion for delivering outstanding results. Our team comprises experts from diverse backgrounds, all working towards a common goal of achieving excellence in our field.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutUs