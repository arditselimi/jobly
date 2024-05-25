export function sliceParagraphs(item) {
  return item
    ?.map((item) => {
      if (item.children && item.children.length > 0 && item.children[0].text) {
        return item.children[0].text;
      }
      return "";
    })
    .filter((text) => text !== "");
}
