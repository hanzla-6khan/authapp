import '../styles/banner.css';
import videoSrc from "../assets/videos/lab3.mp4"; // Ensure this path is correct

const Banner = () => {
    return (
        <section className="banner">
            <video autoPlay muted loop className="video-background">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="banner-content">
                <h2>Find Cars , Mobiles and more...</h2>
                <div className="card">
                    <div className="row g-3">
                        <div className="col-lg-6">
                            <div className="job-search">
                                <h4>Looking For a Cars</h4>
                                <div className="d-flex align-items-center">
                                    <select className="form-select" name="disciplines">
                                        <option selected disabled>
                                            Which Industry?
                                        </option>
                                        {/* Add more options as needed */}
                                    </select>
                                    <button type="submit" className="btn btn-primary btns ms-2">
                                        <i className="bi bi-arrow-right me-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="people-search">
                                <h4>Looking For Property</h4>
                                <div className="d-flex align-items-center">
                                    <select className="form-select" name="disciplines">
                                        <option selected disabled>
                                            Which Industry?
                                        </option>
                                        {/* Add more options as needed */}
                                    </select>
                                    <button type="submit" className="btn btn-primary btns ms-2">
                                        <i className="bi bi-arrow-right me-2"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
