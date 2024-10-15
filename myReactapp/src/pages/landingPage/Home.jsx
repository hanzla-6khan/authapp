import "../../styles/home.css"

const Home = () => {
    return (
        <div>
            <section className="job-type-gride-details bg-blue-dark">
                <div className="block-header text-center mt-5">
                    <h2 className="heading-1 text-white mb-4">
                        All categories Rent & Relove
                    </h2>
                    <p>
                        We connect businesses with dependable, hard-working skilled
                        tradespeople and laborers — when and where you need them.
                    </p>
                </div>
                <div className="expanding-grid">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <ul className="grid-list">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="job-item">
                                                <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    src="https://skilled.peopleready.com/wp-content/uploads/sites/2/2021/02/trades-icon-60x60_carpenter.svg"
                                                    alt="Carpenters"
                                                    className="item-img"
                                                />
                                                <h3 className="job-title">Carpenters</h3>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="job-item">
                                                <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    src="https://skilled.peopleready.com/wp-content/uploads/sites/2/2021/02/trades-icon-60x60_welder.svg"
                                                    alt="Welders"
                                                    className="item-img"
                                                />
                                                <h3 className="job-title">Welders</h3>
                                            </div>
                                        </div>

                                        <div className="col-sm-4">
                                            <div className="job-item">
                                                <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    src="https://skilled.peopleready.com/wp-content/uploads/sites/2/2021/02/trades-icon-60x60_welder.svg"
                                                    alt="Welders"
                                                    className="item-img"
                                                />
                                                <h3 className="job-title">Welders</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <div className="job-item">
                                                <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    src="https://skilled.peopleready.com/wp-content/uploads/sites/2/2021/02/trades-icon-60x60_electrician.svg"
                                                    alt="Carpenters"
                                                    className="item-img"
                                                />
                                                <h3 className="job-title">Carpenters</h3>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="job-item">
                                                <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    src="https://skilled.peopleready.com/wp-content/uploads/sites/2/2021/02/trades-icon-60x60_plumber.svg"
                                                    alt="Welders"
                                                    className="item-img"
                                                />
                                                <h3 className="job-title">Welders</h3>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="job-item">
                                                <img
                                                    loading="lazy"
                                                    decoding="async"
                                                    src="https://skilled.peopleready.com/wp-content/uploads/sites/2/2021/02/trades-icon-60x60_machine-operator.svg"
                                                    alt="Welders"
                                                    className="item-img"
                                                />
                                                <h3 className="job-title">Welders</h3>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home