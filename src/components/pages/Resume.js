import React from "react";
import CV from "../../cv/CV.pdf";

export default function Resume() {
    return (
        <div className="card-body col-12 min-vh-100 p-4  ">
            <h2 className="mt-3 mb-3 text-center">Resume</h2>
            <div className="text-center mb-3">
                <a href={CV} className="text-decoration-none resume" download>
                    Download my resume
                </a>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card d-flex justify-content-center flex-column text-center proficiencies">
                        <div className="card-body">
                            <h5 className=" col list-group card-title">Front End Proficiencies</h5>
                            <ul className="list-group">
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap & Semantic UI</li>
                                <li>JavaScript</li>
                                <li>JQuery</li>
                                <li>Handlebars</li>
                                <li>React</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card d-flex justify-content-center flex-column text-center proficiencies">
                        <div className="card-body">
                            <h5 className="col list-group card-title">Back End Proficiencies</h5>
                            <ul className="list-group">
                                <li>Node.js</li>
                                <li>Express.js</li>
                                <li>RESTful API's </li>
                                <li>GraphQL</li>
                                <li>SQL & Sequilize</li>
                                <li>MongoDB(NoSQL) & Mongoose</li>
                                <li>Cobol</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


