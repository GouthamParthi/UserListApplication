import React from "react";
import styles from "./Card.module.css";
function Card({ user }) {
  return (
    <section className={styles.modalCard}>
      <h3>
        <strong>{user.JobTitle}</strong>
      </h3>
      <p>
        UserName:<strong>{user.FirstNameLastName}</strong>
      </p>
      <p>
        UserId:<strong>{user.ID}</strong>
      </p>
      <p>
        Email:<strong>{user.EmailAddress}</strong>
      </p>
      <p>
        Phone:<strong>{user.Phone}</strong>
      </p>
      <p>
        Working at:<strong>{user.Company}</strong>
      </p>
    </section>
  );
}

export default Card;
// "ID": "1", "JobTitle": "Production Painter", "EmailAddress":
// "Charlize_Murray5969@fuliss.net", "FirstNameLastName": "Charlize Murray",
// "Email": "Charlize_Murray9641@bungar.biz", "Phone": "3-688-586-4848",
// "Company": "Leadertech Consulting"
