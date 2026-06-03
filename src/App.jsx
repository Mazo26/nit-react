import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const kartice = [
    {
      src: "https://radovic-enterijer.com/wp-content/uploads/2025/03/Stolica_City-1-scaled.jpg",
      heading: "Card heading 1",
      description: "Description 1",
      price: "3560$",
      onClickBtn: () => {
        console.log("Card heading 1");
      },
    },
    {
      src: "https://radovic-enterijer.com/wp-content/uploads/2025/03/Stolica_City-1-scaled.jpg",
      heading: "Card heading 2",
      description: "Description 2",
      price: "",
      onClickBtn: () => {
        console.log("Card heading 2");
      },
    },
    {
      src: "https://radovic-enterijer.com/wp-content/uploads/2025/03/Stolica_City-1-scaled.jpg",
      heading: "Card heading 3",
      description: "Description 3",
      price: "120$",
      onClickBtn: () => {
        console.log("Card heading 3");
      },
    },
    {
      src: "",
      heading: "Card heading 4",
      description: "Description 4",
      price: "320$",
      onClickBtn: () => {
        console.log("Card heading 4");
      },
    },
  ];

  const onButtonClick = (data) => {
    console.log(data);
  };

  const onChangeHandler = (event) => {
    const { value } = event.target;
    console.log(value);
  };

  /*
  Zadatak:
  U niz objekata kartice, svaki objekat mora imati parametar price ili cena, negde neka postoji cena,
  negde neka bude prazan string. 
  U Card komponenti dodati mesto gde ce da se prikazuje ta cena (valuta je vas izbor).
  U Card komponenti dodati upit gde je button koji ce ispitivati ako cena postoji i nije prazno polje
  onda neka u buttonu pise "Add to cart", a ako ne postoji cena ili je prazno polje, neka pise "Read more"
  */
  return (
    <>
      <Header />

      <div className='card-wrapper'>
        <input
          className='input-text'
          onFocus={() => console.log("Kliknuo korisnik na input")}
          onChange={onChangeHandler}
        />
      </div>

      <div className='card-wrapper'>
        {kartice.map(
          (kartica) =>
            kartica.src !== "" && (
              <Card
                imgSrc={kartica.src}
                cardHeading={kartica.heading}
                cardDesc={kartica.description}
                price={kartica.price}
                btnClick={(data) => onButtonClick(data)}
              />
            ),
        )}
      </div>
    </>
  );
}

export default App;
