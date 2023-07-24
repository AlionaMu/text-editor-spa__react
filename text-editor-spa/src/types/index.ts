import { TFunction } from "i18next";
import { Dispatch, SetStateAction } from "react";

export enum LangEnum {
  en = "EN",
  ru = "RU",
}

export enum ETypeListMode {
  common = "COMMON",
  card = "CARD",
}

export type TType = {
  t: TFunction<"translation", undefined>;
};

export type LocalType = {
  t: TFunction<"translation", undefined>;
  changeLanguage: (str: string) => void;
};

export type FormPropsType = {
  t: TFunction<"translation", undefined>;
};

export type CardPropsType = {
  note: Note;
  key: string;
  t: TFunction<"translation", undefined>;
};

export type Note = {
  id: string;
  key: string;
  text: string;
  tags: string[];
  isEditMode: boolean;
};

export type Tag = {
  tag: string;
  sum: number;
  isSelected: boolean;
};

export type TagsListPropsType = {
  items: Tag[];
  t: TFunction<"translation", undefined>;
};

export type CardTagsListPropsType = {
  items: string[];
};

export type CardsListPropsType = {
  filter: string[];
  t: TFunction<"translation", undefined>;
  list: Note[];
};

export type CardEditType = {
  text: string;
  id: string;
  tags: string[];
};

export type AddTagsType = {
  text: string[];
};
