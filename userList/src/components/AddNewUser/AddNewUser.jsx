import Modal from "react-bootstrap/Modal";
import Buttons from "../Buttons/Buttons";
import styles from "./AddNewUser.module.css";
import { useState } from "react";
function AddNewUser({ handleAddNewUser, show, handlemodal }) {
  const initialState = Object.freeze({
    Company: "",
    Email: "",
    EmailAddress: "",
    FirstNameLastName: "",
    JobTitle: "",
    Phone: "",
  });
  const [formData, updateFormData] = useState(initialState);
  const handleFormChange = (e) => {
    updateFormData((prevstate) => {
      return {
        ...prevstate,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <>
      <Modal show={show} onHide={handlemodal}>
        <Modal.Header
          closeButton
          className="border-0 text-dark fs-3 fw-bolder "
        >
          Add User
        </Modal.Header>
        <form
          onSubmit={(e) => {
            handleAddNewUser(e, formData);
            handlemodal();
          }}
        >
          <Modal.Body
            // style={{
            //   fontSize: "20px",
            //   display: "flex",
            //   alignItems: "center",
            //   flexDirection: "column",
            // }}
            className={styles.modalBody}
          >
            <label>Full Name</label>
            <input
              type="text"
              name="FirstNameLastName"
              className={styles.inputFields}
              placeholder="Enter your fullname"
              onChange={handleFormChange}
              required
            />
            <label>Working At</label>
            <input
              type="text"
              name="Company"
              className={styles.inputFields}
              onChange={handleFormChange}
              placeholder="Company Name"
              required
            />
            <label>Email Address</label>
            <input
              type="email"
              name="EmailAddress"
              className={styles.inputFields}
              onChange={handleFormChange}
              placeholder="Enter you email address"
              required
            />
            <label>Job Title</label>
            <input
              type="text"
              name="JobTitle"
              className={styles.inputFields}
              onChange={handleFormChange}
              placeholder="Jobtitle"
              required
            />
            <label>Mobile Number</label>
            <input
              type="number"
              name="Phone"
              placeholder="Mobile Number"
              onChange={handleFormChange}
              className={styles.inputFields}
              required
            />
          </Modal.Body>
          <Modal.Footer className="border-0">
            <div style={{ display: "flex", gap: "10px" }}>
              <Buttons buttonColor="green" buttonName="Add" type="submit" />
              <Buttons
                buttonColor="orange"
                buttonName="Cancel"
                onButtonClicked={handlemodal}
              />
            </div>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default AddNewUser;
