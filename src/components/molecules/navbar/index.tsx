// import container from "postcss/lib/container";
import type { Props } from "./props";
import style from "./style.module.css";
import Image from "next/image";

export const Navbar = ({ name }: Props) => {
  return (
    <div className={style.navbarContainer}>
      <div className={style.navbarWrapper}>
        <div className={`${style.navbarGroup || ""} ${style.navbarLf || ""}`}>
          <a href="/menu" className={style.navItem}>
            MENU
          </a>
          <a href="/contact" className={style.navItem}>
            CONTACTO
          </a>
          <a href="/about" className={style.navItem}>
            NOSOTROS
          </a>
        </div>
        
        <Image
          src={"/small_logo.svg"}
          width={50}
          height={50}
          alt="logo"
          className={`${style.navbarLogo || ""} ${style.navbarCn || ""}`}
        />
        <div className={`${style.navbarGroup || ""} ${style.navbarRg || ""}`}>
          <a href="/explore" className={style.navItem}>
            {name ?? "EXPLORAR"}
          </a>
          <a href="/login" className={style.navItem}>
            INGRESAR
          </a>
        </div>
      </div>
    </div>
  );
};
