import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
           <>
           <div id="portfolio">
            <div className="container-fluid p-0">
                <div className="row g-0">
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="src/Bootstrap-template/assets/img/portfolio/fullsize/1.jpg" title="Project Name">
                            <img className="img-fluid" src="src/Bootstrap-template/assets/img/portfolio/thumbnails/1.jpg" alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/2.jpg" title="Project Name">
                            <img className="img-fluid" src="src/Bootstrap-template/assets/img/portfolio/thumbnails/2.jpg" alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/3.jpg" title="Project Name">
                            <img className="img-fluid" src="src/Bootstrap-template/assets/img/portfolio/thumbnails/3.jpg" alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/4.jpg" title="Project Name">
                            <img className="img-fluid" src="src/Bootstrap-template/assets/img/portfolio/thumbnails/4.jpg" alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/5.jpg" title="Project Name">
                            <img className="img-fluid" src="src/Bootstrap-template/assets/img/portfolio/thumbnails/5.jpg" alt="..." />
                            <div className="portfolio-box-caption">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <a className="portfolio-box" href="assets/img/portfolio/fullsize/6.jpg" title="Project Name">
                            <img className="img-fluid" src="src/Bootstrap-template/assets/img/portfolio/thumbnails/6.jpg" alt="..." />
                            <div className="portfolio-box-caption p-3">
                                <div className="project-category text-white-50">Category</div>
                                <div className="project-name">Project Name</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
     
        <section className="page-section bg-dark text-white">
            <div className="container px-4 px-lg-5 text-center">
                <h2 className="mb-4">Free Download at Start Bootstrap!</h2>
                <a className="btn btn-light btn-xl" href="https://startbootstrap.com/theme/creative/">Download Now!</a>
            </div>
        </section>
           </>
        );
    }
}

export default Portfolio;