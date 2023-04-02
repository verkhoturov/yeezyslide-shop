import React from "react";
import { Modal } from "../modal";
import { Button } from "../base/button";
import { useRouter } from "next/router";
import InputMask from "react-input-mask";

import styles from "./index.module.scss";

interface OrderModalProps {
  onClose: () => void;
  productName: string;
}

export const OrderModal = ({ onClose, productName }: OrderModalProps) => {
  const router = useRouter();

  const formRef = React.useRef(null);

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [error, setError] = React.useState("");
  const [isSucces, setIsSucces] = React.useState<boolean>(false);

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

    const body = JSON.stringify({ name, email, phone });

    console.log(body);

    setIsSucces(true);
    setName("");
    setEmail("");
    setPhone("");

    /*
    const res = await fetch("/api/contact", { method: "POST", body });
    const data = await res.json();
   

    if (data.error || data.status == "error") {
      setError("Ошибка отправки формы");
    }

    if (data.status === "succes") {
      setIsSucces(true);
      setName("");
      setEmail("");
      setPhone("");
    }
    */
  };

  return (
    <Modal onClose={onClose}>
      {isSucces ? (
        <div className={styles.succesWrapper}>
          <h2>Заказ успешно отправлен</h2>
        </div>
      ) : (
        <form ref={formRef} onSubmit={onSubmit} className={styles.form}>
          <h2 style={{ textAlign: "center" }}>Оставь заявку</h2>

          <p>
            Наш менеджер свяжется с вами в ближайшее время для уточнения всех
            вопросов и оформления вашего заказа
          </p>

          <label className={styles.label}>
            <span>Имя</span>
            <input
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
