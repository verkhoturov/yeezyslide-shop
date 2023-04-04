import React from "react";
import { Modal } from "../modal";
import { Button } from "../base/button";
import InputMask from "react-input-mask";

import styles from "./index.module.scss";

interface OrderModalProps {
  onClose: () => void;
  productName?: string;
}

export const OrderModal = ({ onClose, productName }: OrderModalProps) => {
  const formRef = React.useRef(null);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");
  const [isSucces, setIsSucces] = React.useState<boolean>(false);
  const [isPending, setPending] = React.useState<boolean>(false);

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

    const url = `http://admin.yeezyslide.ru/wp-json/contact-form-7/v1/contact-forms/268/feedback`;
    const formData = new FormData(formRef.current!);

    if (productName) {
      formData.append("customer-product", productName);
    }

    setPending(true);

    const res = await fetch(url, { method: "POST", body: formData });
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
              ? "Заказ успешно отправлен"
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
                console.log(e.target.value);
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
