export const TagService = {
  setUniqueList(tags: string[]): string[] {
    const result = [...new Set(tags)];
    return result;
  },
};
