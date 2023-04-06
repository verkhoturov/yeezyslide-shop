import React from "react";
import { Modal } from "../modal";
import { Button } from "../base/button";
import InputMask from "react-input-mask";

import styles from "./index.module.scss";

interface OrderModalProps {
  onClose: () => void;
  productName?: string;
  isPreOrder?: boolean;
}

export const OrderModal = ({
  onClose,
  productName,
  isPreOrder,
}: OrderModalProps) => {
  const formRef = React.useRef(null);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");
  const [isSucces, setIsSucces] = React.useState<boolean>(false);
  const [isPending, setPending] = React.useState<boolean>(false);

  const currentLink = React.useMemo(() => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "";
  }, []);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!phone) {
      setError("Введите номер телефона");
      return;
    }

    if (!email) {
      setError("Введите email");
      return;
    }

    const url = `/api/proxy`;

    const message: {
      "customer-name": string;
      "customer-email": string;
      "customer-phone": string;
      "customer-order-type": string;
      "customer-product"?: string;
      "customer-product-link"?: string;
    } = {
      "customer-name": name,
      "customer-email": email,
      "customer-phone": phone,
      "customer-order-type": "Заявка",
    };

    if (productName) {
      message["customer-product"] = productName;
      message["customer-product-link"] = currentLink;
    }

    if (isPreOrder) {
      message["customer-order-type"] = "Предзаказ";
    }

    const body = JSON.stringify(message);

    setPending(true);

    const res = await fetch(url, { method: "POST", body });
    const data = await res.json();

    if (data?.status === "mail_sent") {
      setIsSucces(true);
      setName("");
      setEmail("");
      setPhone("");
    } else {
      setError("Ошибка отправки формы");
    }

    setPending(false);
  };

  return (
    <Modal onClose={onClose}>
      {isSucces ? (
        <div className={styles.succesWrapper}>
          <h2 style={{ textAlign: "center" }}>
            {productName
              ? isPreOrder
                ? "Предзаказ успешно отправлен"
                : "Заказ успешно отправлен"
              : "Заявка успешно отправлена"}
          </h2>
        </div>
      ) : isPending ? (
        <div className={styles.succesWrapper}>
          <h2 style={{ textAlign: "center" }}>Отправка...</h2>
        </div>
      ) : (
        <form ref={formRef} onSubmit={onSubmit} className={styles.form}>
          <h2>Оставь заявку</h2>

          <p>
            Наш менеджер свяжется с вами <br />
            в ближайшее время для уточнения всех <br />
            вопросов и оформления вашего заказа
          </p>

          <label className={styles.label}>
            <span>Имя</span>
            <input
              name="customer-name"
              className={styles.input}
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="Аркадий Сергеевич"
            />
          </label>
          <label className={styles.label}>
            <span>Номер телефона*</span>

            <InputMask
              name="customer-phone"
              mask="+7 (999) 999-99-99"
              className={styles.input}
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setError("");
              }}
              placeholder="+7 (000) 000-00-00"
            />
          </label>
          <label className={styles.label}>
            <span>E-mail*</span>
            <input
              name="customer-email"
              className={styles.input}
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="email@domain.com"
            />
          </label>

          <div className={styles.error}>{error && <span>{error}</span>}</div>

          <div className={styles.btnWrapper}>
            <Button type="submit">Отправить заявку</Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
