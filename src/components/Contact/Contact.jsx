import { MdPerson, MdLocalPhone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import { deleteContact } from "../../redux/contacts/operations";
import { selectIsLoading } from "../../redux/contacts/selectors";

import css from "./Contact.module.css";

export default function Contact({ contact: { id, name, number } }) {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  const onDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success(`Contact "${name}" successfully deleted`);
      })
      .catch(() => {
        toast.error(`Unable to delete "${name}" contact`);
      });
  };

  return (
    <div className={css.ContactItem}>
      <div className={css.ContactItemDetails}>
        <div className={css.ContactItemDetailItem}>
          <MdPerson />
          <span>{name}</span>
        </div>
        <div className={css.ContactItemDetailItem}>
          <MdLocalPhone />
          <span>{number}</span>
        </div>
      </div>
      <div>
        <button disabled={isLoading} onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
