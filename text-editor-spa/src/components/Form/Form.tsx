import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import "./Form.scss";
import { HashService } from "../../services/HashService";
import { FormPropsType, Note } from "../../types";
import { create, setTags, setTagsAmount } from "../../store/notesListSlice";
import { useDispatch } from "react-redux";

export interface FormInfo {
  note: string;
}

export const defaultValues: FormInfo = {
  note: "",
};

export const Form = (props: FormPropsType) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInfo>({
    defaultValues,
  });

  const createNote = (text: string, tags: string[]) => {
    const newNote: Note = {
      id: (text.length + Math.random()).toString(),
      key: (Date.now() + Math.random()).toString(),
      text: text,
      tags: tags,
      isEditMode: false,
    };
    dispatch(create(newNote));
  };

  const onSubmit: SubmitHandler<FormInfo> = (data) => {
    const tags = HashService.findByHash(data.note);
    createNote(data.note, tags);
    dispatch(setTags());
    dispatch(setTagsAmount());
  };

  const setButtonAble = () => {
    setDisabled(false);
  };
  return (
    <form
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      onChange={setButtonAble}
    >
      <label className="form__label">{props.t("form.title")}:</label>
      <input
        type="text"
        {...register("note", {
          required: true,
          minLength: {
            value: 3,
            message: "This input must exceed 3 characters",
          },
        })}
        className="form__input"
        placeholder="Enter text"
      />
      <p className="form__error">{errors.note && props.t("form.error")}</p>
      <p className="form__error">{errors.note?.message}</p>
      <input
        type="submit"
        className="button form__button"
        disabled={disabled}
        value={props.t("form.button").toString()}
      ></input>
    </form>
  );
};
