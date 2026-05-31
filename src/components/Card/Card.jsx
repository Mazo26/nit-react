import "./Card.css";

function Card(props) {
  const { imgSrc, cardHeading, cardDesc, btnClick } = props;
  console.log(imgSrc, cardDesc, cardHeading);
  return (
    <div className='card-container'>
      <img src={imgSrc} alt='Card image here' className='card-img' />
      <p className='card-heading'>{cardHeading}</p>
      <p className='card-description'>{cardDesc}</p>
      <button className='card-button' onClick={btnClick}>
        See more
      </button>
    </div>
  );
}

export default Card;
