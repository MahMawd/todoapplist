import React from 'react';
function AboutUs() {
    let message = "Meet the talented minds behind our projects: Malek, Baha, and Mahmoud. Together, they bring expertise, creativity, and dedication to every line of code, driving our success forward.";
    
    return (
        <section className='section-white'>
            <div className="container">
                <div className='row'>
                    <div className='col-md-12 text-center'>
                        <h2 className='section-title'>About our developers</h2>
                        <p className='section-subtitle'>{message}</p>
                    </div>

                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src="images\placeholder img.jpg" className='team-img' alt='pic' />
                            <h3>MAHMOUD BEN MOUSSA</h3>
                            <div className='team-info'>
                                <p>Lead Developer</p>
                                <p>Mahmoud leads our development efforts with a wealth of experience in software engineering. As our lead developer, Mahmoud spearheads the implementation of cutting-edge technologies and ensures that our projects are robust, scalable, and efficient. With a keen eye for detail and a passion for excellence, Mahmoud is dedicated to delivering solutions that exceed expectations and drive business growth.</p>
                                <ul className='team-icon'>
                                    <li>
                                        <a href='#' className='twitter'>
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='facebook'>
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='instagram'>
                                            <i className='fa fa-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src="" className='team-img' alt='pic' />
                            <h3>BAHAEDDINE BEN MEHREZ</h3>
                            <div className='team-info'>
                                <p>Full Stack Engineer</p>
                                <p>Baha brings a comprehensive skill set to our development team as a full stack engineer. With expertise in both frontend and backend technologies, Baha is responsible for architecting and implementing robust solutions that meet the needs of our clients and users. His versatility, problem-solving abilities, and dedication to quality make him an invaluable asset in delivering successful projects from concept to deployment.</p>
                                <ul className='team-icon'>
                                    <li>
                                        <a href='#' className='twitter'>
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='facebook'>
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='instagram'>
                                            <i className='fa fa-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-6 col-md-4'>
                        <div className='team-item'>
                            <img src="" className='team-img' alt='pic' />
                            <h3>MALEK AKKARI</h3>
                            <div className='team-info'>
                                <p>UI/UX Designer</p>
                                <p>Malek is the creative force behind the captivating interfaces that define our projects. With a background in graphic design and a keen understanding of user experience principles, Malek transforms ideas into visually stunning and intuitive designs. His creativity, attention to detail, and commitment to user-centric design ensure that our applications not only look great but also provide exceptional user experiences.</p>
                                <ul className='team-icon'>
                                    <li>
                                        <a href='#' className='twitter'>
                                            <i className='fa fa-twitter'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='facebook'>
                                            <i className='fa fa-facebook'></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#' className='instagram'>
                                            <i className='fa fa-instagram'></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;
