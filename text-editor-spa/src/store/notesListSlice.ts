import { TagService } from "../services/TagService";
import { NoteService } from "../services/NoteService";
import { CardEditType, Tag } from "../types/index";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../types";

const arr: Note[] = [];
const tagsArr: string[] = [];
const tagsAmountArr: Tag[] = [];

const initialState = {
  notesList: arr,
  tags: tagsArr,
  tagsAmount: tagsAmountArr,
  filter: arr,
};

export const notesListSlice = createSlice({
  name: "notesList",
  initialState,
  reducers: {
    create: (state, action: PayloadAction<Note>) => {
      state.notesList.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state.notesList = state.notesList.filter(
        (item) => item.id !== action.payload
      );
    },
    toggleEditMode: (state, action: PayloadAction<string>) => {
      const index = NoteService.findIndex(action.payload, state.notesList);
      state.notesList[index].isEditMode = !state.notesList[index].isEditMode;
    },
    editNote: (state, action: PayloadAction<CardEditType>) => {
      const index = NoteService.findIndex(action.payload.id, state.notesList);
      state.notesList[index].text = action.payload.text;
      state.notesList[index].tags = action.payload.tags;
    },
    deleteTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter((item: string) => item !== action.payload);
    },
    setTagsAmount: (state) => {
      const tagsArr: string[] = [];
      state.notesList.forEach((item) => tagsArr.push(...item.tags));
      state.tags = TagService.setUniqueList(tagsArr);
      state.tagsAmount = [];

      state.tags.forEach((item: string) => {
        let count = 0;
        tagsArr.forEach((tag: string) => (tag === item ? count++ : 0));
        const newTag: Tag = {
          tag: item,
          sum: count,
        };
        state.tagsAmount.push(newTag);
      });
    },
    setTags: (state) => {
      const tagsArr: string[] = [];
      state.notesList.forEach((item) => tagsArr.push(...item.tags));
      state.tags = TagService.setUniqueList(tagsArr);
    },
  },
});

export const {
  create,
  remove,
  toggleEditMode,
  editNote,
  deleteTag,
  setTagsAmount,
  setTags,
} = notesListSlice.actions;

export default notesListSlice.reducer;
