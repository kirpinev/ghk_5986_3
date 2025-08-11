import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";
import hero from "./assets/hero.png";
import drums from "./assets/drums.png";
import free from "./assets/free.png";
import discount from "./assets/discount.png";
import bag from "./assets/bag.png";
import ruble from "./assets/ruble.png";
import transfer from "./assets/transfer.png";
import sim from "./assets/sim.png";
import pocket from "./assets/pocket.png";
import light from "./assets/light.png";
import cash from "./assets/cash.png";
import smart from "./assets/smart.png";
import heroTwo from "./assets/heroTwo.png";
import ipoteka from "./assets/ipoteka.png";
import ipoteka1 from "./assets/ipoteka1.png";
import heart1 from "./assets/heart1.png";
import switch1 from "./assets/switch1.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { Gap } from "@alfalab/core-components/gap";
import { useState } from "react";
import { BottomSheet } from "@alfalab/core-components/bottom-sheet";
import { ThxLayout } from "./thx/ThxLayout.tsx";

interface Product {
  title: string;
  text: string;
  image: string;
}

const familyProducts: Array<Product> = [
  {
    title: "Альфа-Смарт для вас и 2 близких",
    text: "Приглашайте участников в семейную подписку",
    image: smart,
  },
];

const products: Array<Product> = [
  {
    title: "+1 категория с кэшбэком 5%",
    text: "Дополнительная категория каждый месяц",
    image: bag,
  },
  {
    title: "+1 попытка крутить барабан суперкэшбэка",
    text: "Выше шанс выиграть до 100% в случайной категории",
    image: drums,
  },
  {
    title: "+2% годовых",
    text: "По накопительному Альфа-Счёту на ежедневный остаток",
    image: ruble,
  },
  {
    title: "Бесплатная мобильная связь Альфа-Мобайл",
    text: "Тариф Смарт на 3 ГБ, 100 мин, 10 смс и мессенджеры",
    image: sim,
  },
  {
    title: "Увеличенный лимит кэшбэка",
    text: "7000 ₽ в категориях, 10 000 ₽ или миль в сервиса Альфа-Банка",
    image: pocket,
  },
  {
    title: "Эксклюзивный кэшбэк от партнёров",
    text: "Доступ к особой подборке",
    image: light,
  },
  {
    title: "Бесплатные уведомления",
    text: "Пуши и смс об операциях по всем дебетовым картам",
    image: free,
  },
  {
    title: "Бесплатные переводы",
    text: "В любые банки без комиссий",
    image: transfer,
  },
  {
    title: "Увеличенный лимит на снятие наличных",
    text: "Без комиссии в банкоматах любых банков России",
    image: cash,
  },
  {
    title: "На 20% ниже комиссия на бирже",
    text: "0,24% за сделки с ценными бумагами и валютой",
    image: discount,
  },
];

export const App = () => {
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [isMoreClicked, setIsMoreClicked] = useState(false);
  const [step, setStep] = useState(1);

  const submit = () => {
    window.gtag("event", "5986_activate_3");

    LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      {step === 1 && (
        <div className={appSt.container}>
          <div
            className={appSt.box}
            style={{
              backgroundColor: "#F2F3F5",
              paddingBottom: 0,
              border: "none",
            }}
          >
            <Gap size={8} />
            <div
              style={{
                padding: "4px 16px",
                width: "fit-content",
                borderRadius: "16px",
                margin: "0 auto",
                backgroundColor: "white",
              }}
            >
              Новое
            </div>
            <Gap size={8} />
            <div>
              <Typography.TitleResponsive
                tag="h1"
                view="medium"
                font="system"
                weight="bold"
              >
                Банкинг без рекламы
              </Typography.TitleResponsive>
              <Typography.Text view="primary-medium" color="secondary">
                Мы убрали все лишнее
              </Typography.Text>
            </div>
            <img src={heroTwo} alt="Картинка Альфа-Смарт" />
          </div>

          <Gap size={32} />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <img src={ipoteka1} height={48} width={48} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography.Text
                  view="primary-medium"
                  color="primary"
                  weight="bold"
                >
                  Чистый интерфейс
                </Typography.Text>
                <Typography.Text view="primary-small" color="secondary">
                  Без баннеров и всплывающих окон
                </Typography.Text>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <img src={heart1} height={48} width={48} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography.Text
                  view="primary-medium"
                  color="primary"
                  weight="bold"
                >
                  Только важное
                </Typography.Text>
                <Typography.Text view="primary-small" color="secondary">
                  Смс и пуши только о ваших операциях
                </Typography.Text>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <img src={switch1} height={48} width={48} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography.Text
                  view="primary-medium"
                  color="primary"
                  weight="bold"
                >
                  Настройте под себя
                </Typography.Text>
                <Typography.Text view="primary-small" color="secondary">
                  Вы выбираете, что хотите видеть
                </Typography.Text>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "16px",
            }}
          >
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
              <img src={switch1} height={48} width={48} alt="" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography.Text
                  view="primary-medium"
                  color="primary"
                  weight="bold"
                >
                  Защита от мошенников
                </Typography.Text>
                <Typography.Text view="primary-small" color="secondary">
                  Можете подключить Альфа-Мобайл, и спам больше не побеспокоит
                </Typography.Text>
              </div>
            </div>
          </div>
        </div>
      )}
      {step === 2 && (
        <div className={appSt.container}>
          <div className={appSt.box}>
            <img src={hero} alt="Картинка Альфа-Смарт" />
            <Typography.TitleResponsive
              tag="h1"
              view="medium"
              font="system"
              weight="bold"
            >
              Альфа-Смарт
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium">
              Первый месяц бесплатно, <br /> далее — 399 ₽ в месяц
            </Typography.Text>
          </div>

          <Gap size={32} />

          <div className={appSt.products}>
            <Typography.TitleResponsive
              font="system"
              tag="h2"
              weight="bold"
              view="small"
              className={appSt.productsTitle}
            >
              В вашей подписке
            </Typography.TitleResponsive>

            <div
              className={appSt.product}
              style={{
                overflow: "hidden",
              }}
            >
              <div>
                <Typography.TitleResponsive
                  font="system"
                  view="small"
                  weight="bold"
                  tag="h3"
                  className={appSt.productTitle}
                >
                  Без рекламы
                </Typography.TitleResponsive>

                <Typography.Text
                  view="secondary-large"
                  tag="p"
                  color="secondary"
                  className={appSt.productText}
                >
                  Больше никаких рекламных смс и баннеров
                </Typography.Text>
                <Gap size={16} />
                <div
                  onClick={() => {
                    setIsMoreClicked(true);
                    window.gtag("event", "5986_participate_3");
                  }}
                  style={{
                    padding: "4px 16px",
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "16px",
                    width: "fit-content",
                  }}
                >
                  Как участвовать
                </div>
              </div>
              <img
                src={ipoteka}
                alt=""
                height={95}
                className={appSt.productIcon}
              />
            </div>

            {products.map((product) => (
              <div className={appSt.product} key={product.title}>
                <div>
                  <Typography.TitleResponsive
                    font="system"
                    view="small"
                    weight="bold"
                    tag="h3"
                    className={appSt.productTitle}
                  >
                    {product.title}
                  </Typography.TitleResponsive>

                  <Typography.Text
                    view="secondary-large"
                    tag="p"
                    color="secondary"
                    className={appSt.productText}
                  >
                    {product.text}
                  </Typography.Text>
                </div>
                <img
                  src={product.image}
                  alt=""
                  height={96}
                  className={appSt.productIcon}
                />
              </div>
            ))}
          </div>

          <Gap size={32} />

          <div className={appSt.products}>
            <Typography.TitleResponsive
              font="system"
              tag="h2"
              weight="bold"
              view="small"
              className={appSt.productsTitle}
            >
              Семейный доступ
            </Typography.TitleResponsive>

            {familyProducts.map((product) => (
              <div className={appSt.product} key={product.title}>
                <div>
                  <Typography.TitleResponsive
                    font="system"
                    view="small"
                    weight="bold"
                    tag="h3"
                    className={appSt.productTitle}
                  >
                    {product.title}
                  </Typography.TitleResponsive>

                  <Typography.Text
                    view="secondary-large"
                    tag="p"
                    color="secondary"
                    className={appSt.productText}
                  >
                    {product.text}
                  </Typography.Text>
                </div>
                <img
                  src={product.image}
                  alt=""
                  height={96}
                  className={appSt.productIcon}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <Gap size={72} />

      {step === 1 && (
        <div className={appSt.bottomBtn}>
          <ButtonMobile
            block
            view="primary"
            href=""
            onClick={() => {
              setStep(2);
              window.gtag("event", "5986_gotoAS_3");
            }}
          >
            К Альфа-Смарту
          </ButtonMobile>
        </div>
      )}

      {step === 2 && (
        <div className={appSt.bottomBtn}>
          <ButtonMobile block view="primary" href="" onClick={submit}>
            Подключить
          </ButtonMobile>
        </div>
      )}

      <BottomSheet open={isMoreClicked} onClose={() => setIsMoreClicked(false)}>
        <div
          className={appSt.box}
          style={{
            backgroundColor: "#F2F3F5",
            paddingBottom: 0,
            border: "none",
          }}
        >
          <Gap size={8} />
          <div
            style={{
              padding: "4px 16px",
              width: "fit-content",
              borderRadius: "16px",
              margin: "0 auto",
              backgroundColor: "white",
            }}
          >
            Новое
          </div>
          <Gap size={8} />
          <div>
            <Typography.TitleResponsive
              tag="h1"
              view="medium"
              font="system"
              weight="bold"
            >
              Банкинг без рекламы
            </Typography.TitleResponsive>
            <Typography.Text view="primary-medium" color="secondary">
              Мы убрали все лишнее
            </Typography.Text>
          </div>
          <img src={heroTwo} alt="Картинка Альфа-Смарт" />
        </div>

        <Gap size={32} />

        <div
          style={{ display: "flex", flexDirection: "column", padding: "16px" }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img src={ipoteka1} height={48} width={48} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Чистый интерфейс
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Без баннеров и всплывающих окон
              </Typography.Text>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "16px" }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img src={heart1} height={48} width={48} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Только важное
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Смс и пуши только о ваших операциях
              </Typography.Text>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "16px" }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img src={switch1} height={48} width={48} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Настройте под себя
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Вы выбираете, что хотите видеть
              </Typography.Text>
            </div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", padding: "16px" }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <img src={switch1} height={48} width={48} alt="" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Typography.Text
                view="primary-medium"
                color="primary"
                weight="bold"
              >
                Защита от мошенников
              </Typography.Text>
              <Typography.Text view="primary-small" color="secondary">
                Можете подключить Альфа-Мобайл, и спам больше не побеспокоит
              </Typography.Text>
            </div>
          </div>
        </div>
      </BottomSheet>
    </>
  );
};
