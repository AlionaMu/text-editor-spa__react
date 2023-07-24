import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HashService } from "../../services/HashService";
import { NoteService } from "../../services/NoteService";
import { CardPropsType } from "../../types";
import CardTagsList from "../CardTagsList/CardTagsList";
import {
  editNote,
  remove,
  setTags,
  setTagsAmount,
  toggleEditMode,
} from "../../store/notesListSlice";
import "./Card.scss";
import { RootState } from "../../store";

export enum Ebutton {
  Edit = "edit",
  Save = "save",
}

export const Card = (props: CardPropsType) => {
  const notesList = useSelector((state: RootState) => state.notesList);
  const index = NoteService.findIndex(props.note.id, notesList.notesList);

  const isEditMode = notesList.notesList[index].isEditMode;
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState(props.note.text);
  const [button, setButton] = useState(Ebutton.Edit);

  const switchClick = () => {
    if (button === Ebutton.Edit) {
      setButton(Ebutton.Save);
      dispatch(toggleEditMode(props.note.id));
    } else {
      const tags = HashService.findByHash(inputValue);
      dispatch(editNote({ id: props.note.id, text: inputValue, tags: tags }));
      dispatch(setTags());
      dispatch(setTagsAmount());
      setButton(Ebutton.Edit);
      dispatch(toggleEditMode(props.note.id));
    }
  };

  const deleteNote = () => {
    dispatch(remove(props.note.id));
    dispatch(setTags());
    dispatch(setTagsAmount());
  };

  const setNoteNotEditable = () => {
    setButton(Ebutton.Edit);
    dispatch(toggleEditMode(props.note.id));
  };

  const clickNoteHandler = (e: React.MouseEvent) => {
    const target = e.target as HTMLInputElement;
    if (isEditMode && target.className === "tags-list_card")
      setNoteNotEditable();
  };

  return (
    <div
      className="note-card"
      onClick={(e: React.MouseEvent) => clickNoteHandler(e)}
    >
      {!isEditMode ? (
        <div className="note-card__title">{inputValue}</div>
      ) : (
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
      <CardTagsList items={props.note.tags}></CardTagsList>
      <div className="note-card__button-container">
        <button
          className="button note-card__button"
          onClick={() => switchClick()}
        >
          {button}
        </button>
        <button className="button note-card__button" onClick={deleteNote}>
          {props.t("note.delete")}
        </button>
      </div>
    </div>
  );
};
