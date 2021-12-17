const NameList = ({ allNames }) => {
  return (
    <div className="allnames">
      <h3>Names</h3>
      {allNames.map((item, index) => (
        <h4 style={{ color: "#3f3f3f" }} key={index}>
          {" "}
          {item.name}
        </h4>
      ))}
    </div>
  );
};

export default NameList;
