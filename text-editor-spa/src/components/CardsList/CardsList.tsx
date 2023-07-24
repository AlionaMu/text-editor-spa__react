import { CardsListPropsType, Note } from "../../types";
import "./CardsList.scss";
import { Card } from "../Card/Card";
import { t } from "i18next";

export const CardsList = (props: CardsListPropsType) => {
  const res = props.filter.length
    ? props.list.filter((item: Note) =>
        props.filter.every((value: string) =>
          item.tags.includes(value) ? item : 0
        )
      )
    : props.list;

  return (
    <section className="cards-list">
      {res ? (
        res.map((note: Note) => {
          return <Card note={note} key={note.key} t={t}></Card>;
        })
      ) : (
        <div>NO CARDS</div>
      )}
    </section>
  );
};
