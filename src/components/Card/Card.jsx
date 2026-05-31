import "./Card.css";

function Card() {
  const imageSource =
    "https://radovic-enterijer.com/wp-content/uploads/2025/03/Stolica_City-1-scaled.jpg";
  return (
    <div className='card-container'>
      <img src={imageSource} alt='Card image here' className='card-img' />
      <p className='card-heading'>Card heading</p>
      <p className='card-description'>Card description</p>
      <button className='card-button'>See more</button>
    </div>
  );
}

export default Card;
