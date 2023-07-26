export const HashService = {
  findByHash(text: string): string[] {
    const tagsArr: string[] = [];
    const regexp = new RegExp("#([^\\s]*)", "g");
    const tmplist = text.match(regexp);
    tmplist?.forEach((item, i) => {
      const hashSub = tmplist[i].split("#");
      hashSub.forEach((hashItem) => {
        if (hashItem !== "") {
          if (hashItem.substr(hashItem.length - 1) === ":") {
            hashItem = hashItem.slice(0, -1);
          } else if (hashItem !== "") {
            const res = `${hashItem}`;
            tagsArr.push(res);
          }
        }
      });
    });
    return tagsArr;
  },
};
