import "./Card.css";

function Card(props) {
  const { imgSrc, cardHeading, cardDesc, btnClick, price } = props;
  console.log(imgSrc, cardDesc, cardHeading);

  //uobicajena sintaksa
  if (imgSrc === "") {
    console.log("Praznoo");
  } else {
    console.log("Postoji imgSrc");
  }

  //ternarni operatori
  imgSrc === "" ? console.log("Praznoooo") : console.log("Postoji imgSrc");

  typeof imgSrc == "boolean"
    ? console.log("boolean")
    : typeof imgSrc == "string"
      ? console.log("string")
      : console.log("ne znam");

  return (
    <div className='card-container'>
      <img src={imgSrc} alt='Card image here' className='card-img' />
      <p className='card-heading'>{cardHeading}</p>
      <p className='card-description'>{cardDesc}</p>
      <p>{price !== "" ? price : "nema cenu"}</p>
      <button className='card-button' onClick={() => btnClick(cardHeading)}>
        {price !== "" ? "Add to cart" : "Read more"}
      </button>
    </div>
  );
}

export default Card;
