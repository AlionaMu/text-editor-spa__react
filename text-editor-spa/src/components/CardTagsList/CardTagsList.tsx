import "./CardTagsList.scss";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import { CardTagsListPropsType } from "../../types";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function CardTagsList(props: CardTagsListPropsType) {
  return (
    <ul className="tags-list_card">
      {props.items ? (
        props.items.map((data: string) => {
          let icon;

          return (
            <ListItem key={(Date.now() + Math.random()).toString()}>
              <Chip icon={icon} label={data} />
            </ListItem>
          );
        })
      ) : (
        <div>no tags</div>
      )}
    </ul>
  );
}
