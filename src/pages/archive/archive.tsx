
import { Navbar, Footer, Sidebar } from "@molecules/index"

import ContractCardorganism from '../components/contract-cardorganism'


import style from "./style.module.css";

const Archive = () => {
  return (
    <div className="archive-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <Navbar />
      <div className="archive-container1">
        <div className="archive-sidebar-wrapper">
          <Sidebar />
        </div>
        <div className="archive-container2">
          <div className="archive-pinned-contracts">
            <div className="archive-pinned">
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
            </div>
            <div className="archive-note">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="archive-image"
              />
              <span className="archive-text">
                <span>
                  La
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="archive-text2">Eneida</span>
                <span> se convirtió en un texto</span>
                <br></br>
                <span> estándar en los planes de estudio</span>
                <br></br>
                <span> de los romanos letrados.</span>
              </span>
            </div>
          </div>
          <div className="archive-recent-contracts">
            <div className="archive-recent">
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
              <ContractCardorganism rootClassName="contract-cardorganism-root-class-name"></ContractCardorganism>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Archive
