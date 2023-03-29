import style from "./style.module.css";

export const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerWrapper}>
        <hr className={style.footerDivider} />

        <p className={style.footerBody}>
          aude, hospes, contemnere opes et te quoque dignum | finge deo,
          rebusque veni non asper egenis. (Aen. 8. 364-5)
        </p>

        <hr className={style.footerDivider} />

        <div className={style.footerContactSection}>
          <div className={style.footerSocial}>
            <i
              className={`${style.faBrands || ""} ${style.faYoutube || ""}`}
            ></i>
            <i
              className={`${style.faBrands || ""} ${style.faFacebook || ""}`}
            ></i>
            <i
              className={`${style.faBrands || ""} ${style.faInstagram || ""}`}
            ></i>
          </div>
          <div className={style.footerFairUse}>
            <span className={style.footerSection}>Condiciones de uso</span>
            <span className={style.footerSection}>Politicas de privacidad</span>
          </div>
          <div className={style.footerRights}>
            <span className={style.footerSection}>
              © 2022 PATRONO. Todos los derechos reservados.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
