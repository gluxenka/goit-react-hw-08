import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";

import { selectSearchTerm } from "../../redux/filters/selectors";
import { changeFilter } from "../../redux/filters/slice";

export default function SearchBox() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);

  return (
    <div className={css.SearchBox}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
