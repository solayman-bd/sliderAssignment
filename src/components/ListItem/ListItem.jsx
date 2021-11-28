import "./ListItem.scss";

const ListItem = ({ itemNo, lastItem }) => {
  console.log("from list item", lastItem);
  return (
    <div
      className="list-item"
      style={{
        opacity: `${lastItem ? 0.5 : 1}`,
        cursor: `${lastItem ? "not-allowed" : "pointer"}`,
      }}
    >
      I a from list item {itemNo + 1}
    </div>
  );
};

export default ListItem;
