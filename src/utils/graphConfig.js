export function generateNodes(allNames) {
    return allNames.map((item) => ({ id: item.name }));
}

export function generateLinks(items) {
  return items.map(({ person1, person2, amount }) => ({
    source: person1,
    target: person2,
    amount,
  }));
}

export const config = {
    freezeAllDragEvents: true,
    nodeHighlightBehavior: true,
    node: {
      color: "red",
      highlightStrokeColor: "blue",
      fontSize: 12,
    },
    link: {
      highlightColor: "blue",
      renderLabel: true,
      labelProperty: "amount",
      fontSize: 12,
    },
    directed: true,
    height: 600,
    width: 600,
  };

