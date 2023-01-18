const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calcContainer">
        <Screen />
        <div
          className="keypad"
          style={{
            display: "flex",
            flexDirection: "row",
            height: "100%",
            width: "100%",
            gap: "5%",
            flexWrap: "wrap",
          }}
        >
          {[...Array(10)].map((x, i) => (
            <Input value={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Screen = () => {
  return <div className="screen"></div>;
};

const Input = ({ value }) => {
  return <div className="input">{value}</div>;
};

export default Calculator;
