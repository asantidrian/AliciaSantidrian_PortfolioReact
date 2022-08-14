import React from 'react';

export default function Projects(props) {
    return (
        <div className="card-body m-2 row d-flex justify-content-center">
            {props.projects.map(project => (
                <div className="col-6 d-flex justify-content-center">
                    <div className="card mb-3">
                        <div className="row no-gutters">
                            <img src={project.srcImg} className="img-fluid card-img" alt="project screenshot"></img>
                            <div className="card-img-overlay hoverText">
                                <h5 className="card-title text-light">{project.title}</h5>
                                <p className="card-text text-light">{project.description}</p>
                                <div className="d-flex">
                                    <a href={project.githubURL} className="nav-item text-light" rel="noopener">Github</a>
                                </div>
                                <div className="d-flex">
                                    <a href={project.deployedURL} className="nav-item text-light" rel="noopener">Website </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            ))}
        </div>
        // </div>
    )
};
