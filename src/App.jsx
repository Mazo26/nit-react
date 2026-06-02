import "./App.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";

function App() {
  const kartice = [
    {
      src: "https://radovic-enterijer.com/wp-content/uploads/2025/03/Stolica_City-1-scaled.jpg",
      heading: "Card heading 1",
      description: "Description 1",
      onClickBtn: () => {
        console.log("Card heading 1");
      },
    },
    {
      src: "https://radovic-enterijer.com/wp-content/uploads/2025/03/Stolica_City-1-scaled.jpg",
      heading: "Card heading 2",
      description: "Description 2",
      onClickBtn: () => {
        console.log("Card heading 2");
      },
    },
    {
      src: "https://radovic-enterijer.com/wp-content/uploads/2025/03/Stolica_City-1-scaled.jpg",
      heading: "Card heading 3",
      description: "Description 3",
      onClickBtn: () => {
        console.log("Card heading 3");
      },
    },
    {
      src: "",
      heading: "Card heading 4",
      description: "Description 4",
      onClickBtn: () => {
        console.log("Card heading 4");
      },
    },
  ];

  const onButtonClick = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header />
      <div className='card-wrapper'>
        {kartice.map(
          (kartica) =>
            kartica.src !== "" && (
              <Card
                imgSrc={kartica.src}
                cardHeading={kartica.heading}
                cardDesc={kartica.description}
                btnClick={(data) => onButtonClick(data)}
              />
            ),
        )}
      </div>
    </>
  );
}

export default App;
