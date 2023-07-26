import { Note } from "../types";

export const NoteService = {
  findIndex(id: string, data: Note[]) {
    const index = data.findIndex((item: Note) => item.id === id);
    return index;
  },
};
