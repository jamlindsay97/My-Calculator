const Operators = ({ handleClick }) => {
  const operatorBtns = ["+", "-", "*", "/"];
  return (
    <div>
      {operatorBtns.map((button) => (
        <button onClick={handleClick} key={button}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default Operators;
