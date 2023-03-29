import React from "react";

import { Helmet } from "react-helmet";

import Navbarmolecule from "../components/navbarmolecule";
import ProgressBarmolucule from "../components/progress-barmolecule";
import Titlesecondaryatom from "../components/titlesecondaryatom";
import Buttonsecondaryatom from "../components/buttonsecondaryatom";
import Buttonternaryatom from "../components/buttonternaryatom";
import Footermolecule from "../components/footermolecule";
import "./history.css";

const History = (props) => {
    return (
        <div className="history-container">
            <Helmet>
                <title>exported project</title>
            </Helmet>
            <div className="history-container1">
                <Navbarmolecule rootClassName="navbarmolecule-root-class-name7"></Navbarmolecule>
                <div className="history-container2">
                    <ProgressBarmolucule rootClassName="progress-barmolucule-root-class-name1"></ProgressBarmolucule>
                    <div className="history-wrapper">
                        <div className="history-illustration-wrapper">
                            <img
                                alt="image"
                                src="https://play.teleporthq.io/static/svg/default-img.svg"
                                className="history-image"
                            />
                        </div>
                        <div className="history-history-wrapper">
                            <Titlesecondaryatom rootClassName="titlesecondaryatom-root-class-name1"></Titlesecondaryatom>
                            <span className="history-text">Text</span>
                            <div className="history-actions">
                                <Buttonsecondaryatom rootClassName="buttonsecondaryatom-root-class-name3"></Buttonsecondaryatom>
                                <Buttonternaryatom rootClassName="buttonternaryatom-root-class-name2"></Buttonternaryatom>
                            </div>
                        </div>
                    </div>
                </div>
                <Footermolecule rootClassName="footermolecule-root-class-name4"></Footermolecule>
            </div>
        </div>
    );
};

export default History;
