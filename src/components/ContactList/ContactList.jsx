import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ data, onDelete }) => {
  return (
    <ul className={s.list}>
      {data.map((item) => (
        <li key={item.id}>
          <Contact
            name={item.name}
            number={item.number}
            id={item.id}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
