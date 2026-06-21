import { useState } from "react";
import Header from "../components/Header/Header";
import Card from "../components/Card/Card";

const Pocetna = () => {
  const [input, setInput] = useState(0);

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

  const [cards, setCards] = useState(kartice);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [counter, setCounter] = useState(0);

  const onButtonClick = (data) => {
    console.log(data);
  };

  const onChangeHandler = (event) => {
    const { value } = event.target;
    console.log(value, typeof value, "value");

    setInput(value);
  };

  const setCardValueHandler = () => {
    let newCard = {
      src: "https://radovic-enterijer.com/wp-content/uploads/2025/03/Stolica_City-1-scaled.jpg",
      onClickBtn: () => {
        console.log("Card heading " + cards.length + 1);
      },
      heading: heading,
      description: description,
      price: price + "$",
    };

    setCards((prev) => [...prev, newCard]);

    setHeading("");
    setDescription("");
    setPrice("");
  };

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

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
        <p>{input}</p>
        <input
          className='input-text'
          onFocus={() => console.log("Kliknuo korisnik na input")}
          onChange={onChangeHandler}
          value={input}
        />
        <input
          className='input-text'
          onFocus={() => console.log("Kliknuo korisnik na input")}
          onChange={(e) => setHeading(e.target.value)}
          value={heading}
        />
        <input
          className='input-text'
          onFocus={() => console.log("Kliknuo korisnik na input")}
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <input
          className='input-text'
          onFocus={() => console.log("Kliknuo korisnik na input")}
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <button onClick={setCardValueHandler}>Create card</button>
      </div>
      <div className='card-wrapper'>
        <p>{counter + " puta si klinuo"}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>

      {/*
      Napraviti TO DO listu koja ce imati jedan input za text sa kojim ce da se unose zadaci za dan
      pored svake stavke treba da ima dugme Delete koje ce da brise tu stavku iz liste 
      */}

      <div className='card-wrapper'>
        {cards.map(
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
};

export default Pocetna;
