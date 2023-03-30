import style from "./style.module.css";

import { Title, Button, Paragraph, Legend, Price } from "@atoms/index";
import { MainTemplate } from "~/components/templates/Main";

export default function About() {
  return (
    <MainTemplate>
      <div className={style.aboutBackground}>
        <div className={style.aboutMainContainer}>
          <div className={style.aboutMainWrapper}>
            <Title text="ENEAS" />
            <div className={style.aboutDivider}></div>
            <Paragraph
              body={`Eneas es el contrato de arrendamiento que hasta un cavernícola puede configurar de
              forma sencilla, profesional y segura. 
              Déjate llevar por nuestra potente tecnología y da
              forma a tu contrato ideal para arrendar fincas habitacionales, comerciales, industriales o
              rústicas.

              Recuerda, basta con que respondas unas cuantas preguntas para que el sistema de
              Patrono te ayude a generar —en línea y de manera inmediata— un contrato único
              adaptado tanto a tus necesidades como a las regulaciones federales y estatales que a tu
              caso le sean aplicables.
              `}
            />
            <Button
              text="CONFIGURAR"
              type="secondary"
              handleClick={() => console.log("clicked")}
            />
            <Legend text="¿Aún no te decides? Conoce el ADN de nuestros contratos aquí" />
          </div>
          <div className={style.aboutPriceWrapper}>
            <Price value={"$500.00 MXN"} />
            <Legend text="Valor final con impuestos de venta incluidos. " />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}
