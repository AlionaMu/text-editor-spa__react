import "./TagsList.scss";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { Tag, TagsListPropsType } from "../../types";
import { resetTags, setSelectedTags } from "../../store/notesListSlice";
import { useDispatch } from "react-redux";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function TagsList(props: TagsListPropsType) {
  const dispatch = useDispatch();

  const clickHandler = (data: Tag) => {
    dispatch(setSelectedTags(data));
  };

  const resetFilter = () => {
    dispatch(resetTags());
  };

  return (
    <div className="tags-list__wrapper">
      <p className="tags-list__title"> {props.t("tagsList.title")} </p>
      <ul className="tags-list tags-list_common">
        {props.items ? (
          props.items.map((data: Tag) => {
            let icon;

            return (
              <ListItem key={(Date.now() + Math.random()).toString()}>
                <Chip
                  color={data.isSelected ? "warning" : "success"}
                  icon={icon}
                  label={data.tag + " " + data.sum}
                  onClick={() => clickHandler(data)}
                />
              </ListItem>
            );
          })
        ) : (
          <div>no tags</div>
        )}
      </ul>
      <button className="button tags-list__button" onClick={resetFilter}>
        {props.t("tagsList.button")}
      </button>
    </div>
  );
}
