import { Footer } from "~/componentsRaw/molecules/footer/index";
import { Navbar } from "~/componentsRaw/molecules/navbar/index";

import style from "./style.module.css";

export const LandingPage = () => {
  return <div className={style.wrapper}>
    <Navbar />
    <div className={style.box}>test</div>
    <Footer />
  </div>;
};
