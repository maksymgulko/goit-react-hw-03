import s from "./Contact.module.css";
import { IoIosContact } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id, onDelete }) => {
  return (
    <div className={s.listItem}>
      <div className={s.info}>
        <p className={s.text}>
          <IoIosContact />
          {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button className={s.delete} type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};
export default Contact;
