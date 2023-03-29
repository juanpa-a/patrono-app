import { Navbar } from "~/components/molecules/navbar";
import { Footer } from "~/components/molecules/footer";
import { Button } from "~/components/atoms/button/index";

import Image from "next/image";

import style from "./style.module.css";

export const HomePage = () => {
  return (
    <div className={style.homeContainer}>
      <div className={style.homeContainer1}>
        <Navbar />
        <div className={style.homeMain}>
          <div className={style.homeWrapper}>
            <span className={style.homeTitle}>
              <span className={style.homeText}>
                <span>El contrato</span>
                <br></br>
                <span></span>
              </span>
              <span>que no conoce fronteras.</span>
            </span>
            <Image src={"/olive.svg"} width={50} height={50} alt="logo" />
            <span className={style.homeSubtitle}>
              <span>
                Introduciendo a
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>Eneas</span>
              <span>
                ,
                <span
                  dangerouslySetInnerHTML={{
                    __html: " ",
                  }}
                />
              </span>
              <span>
                el contrato de arrendamiento que puedes configurar en línea en
                minutos.
              </span>
            </span>
            <div className={style.homeActions}>
              <Button
                text="DESCUBRIR"
                handleClick={() => console.log("clicked")}
                type={"secondary"}
              />
              <Button
                text="CONFIGURAR"
                handleClick={() => console.log("clicked")}
              />
            </div>
          </div>
        </div>
        <video
          src="/promo.mp4"
          loop
          muted
          poster="https://play.teleporthq.io/static/svg/videoposter.svg"
          autoPlay
          className={style.homeVideo}
        ></video>
        <Footer />
      </div>
    </div>
  );
};
