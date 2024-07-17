import React, { useState } from "react";
import styles from "./form.module.scss";
import BrandLogo from "../../../../components/shared/brand";
// import { Icon } from "@iconify/react";
import Input from "../../../../components/atoms/input";
import Button from "../../../../components/atoms/button";
import { useNavigate } from "react-router-dom";

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  return (
    <section className={styles["form-container"]}>
      <BrandLogo />
      <div className={styles.form}>
        <Button
          text="Join With Google"
          icon="bi:google"
          className={styles.google}
        />

        <div className={styles.option}>
          <span>or join with email address</span>
        </div>
        <article className={styles.details}>
          <Input
            type="email"
            placeholder={`Type Your Email Address`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder={`Type Your Password`}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </article>
        <Button
          text="Join With Email"
          icon="material-symbols:login"
          className={styles.emailbtn}
          handleClick={()=>navigate("/notes")}
        />
      </div>
    </section>
  );
}

export default Form;
