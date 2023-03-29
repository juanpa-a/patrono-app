import React from "react";

import { Helmet } from "react-helmet";

import Navbarmolecule from "../components/navbarmolecule";
import ProgressBarmolucule from "../components/progress-barmolecule";
import Titlesecondaryatom from "../components/titlesecondaryatom";
import Questionmolecule from "../components/questionmolecule";
import Inputatom from "../components/inputatom";
import Paginationmolecule from "../components/paginationmolecule";
import Footermolecule from "../components/footermolecule";
import "./builder.css";

const Builder = (props) => {
    return (
        <div className="builder-container">
            <Helmet>
                <title>exported project</title>
            </Helmet>
            <div className="builder-container1">
                <Navbarmolecule rootClassName="navbarmolecule-root-class-name5"></Navbarmolecule>
                <div className="builder-main-wrapper">
                    <ProgressBarmolucule rootClassName="progress-barmolucule-root-class-name"></ProgressBarmolucule>
                    <div className="builder-form-wrapper">
                        <div className="builder-header">
                            <Titlesecondaryatom rootClassName="titlesecondaryatom-root-class-name"></Titlesecondaryatom>
                            <img
                                alt="image"
                                src="https://play.teleporthq.io/static/svg/default-img.svg"
                                className="builder-image"
                            />
                        </div>
                        <div className="builder-form">
                            <div className="builder-question-row">
                                <div className="builder-question">
                                    <Questionmolecule></Questionmolecule>
                                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                                </div>
                                <div className="builder-question1">
                                    <Questionmolecule></Questionmolecule>
                                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                                </div>
                            </div>
                            <div className="builder-question-row1">
                                <div className="builder-question2">
                                    <Questionmolecule></Questionmolecule>
                                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                                </div>
                                <div className="builder-question3">
                                    <Questionmolecule></Questionmolecule>
                                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                                </div>
                            </div>
                            <div className="builder-question-row2">
                                <div className="builder-question4">
                                    <Questionmolecule></Questionmolecule>
                                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                                </div>
                                <div className="builder-question5">
                                    <Questionmolecule></Questionmolecule>
                                    <Inputatom rootClassName="inputatom-root-class-name10"></Inputatom>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Paginationmolecule rootClassName="paginationmolecule-root-class-name"></Paginationmolecule>
                </div>
                <Footermolecule rootClassName="footermolecule-root-class-name6"></Footermolecule>
            </div>
        </div>
    );
};

export default Builder;
