import "../style/card/Card.css";
const Card = (prompt) => {
  let modal = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
  ];
  let hasil = "#";
  for (let i = 0; i < 6; i++) {
    hasil += modal[Math.floor((Math.random() * 16) % 16)];
  }

  const style = {
    backgroundColor: hasil,
  };
  return (
    <div style={style} className="card">
      <p className="cardName">{prompt.name}</p>
      <p className="cardJob">{prompt.job}</p>
    </div>
  );
};

export default Card;
