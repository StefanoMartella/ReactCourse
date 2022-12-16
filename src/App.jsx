import React from "react";
import Animal from "./components/Animal";
import BeerTable from "./components/BeerTable";
import List from "./components/List";
import Person from "./components/Person";

const list = [
  { name: "Name 1", surname: "Surname 1" },
  { name: "Name 1", surname: "Surname 2" },
  { name: "Name 3", surname: "Surname 3" },
  { name: "Name 4", surname: "Surname 4" },
  { name: "Name 5", surname: "Surname 5" },
];

function App() {
  return (
    <>
      {/* <Person name="Mario" age={17}>
        Prop children
      </Person>
      <Person name="Stefano" age={26} /> */}

      {/* <Animal
        name="Cardellino"
        imagePath="https://bityl.co/Ef5q"
        canFly
      ></Animal>
      <Animal name="Labrador" imagePath="https://bityl.co/Ef5w" />
      <Animal name="Siamese" imagePath="https://bityl.co/Ef5y" canFly={true} /> */}

      {/* <List list={list} /> */}

      <BeerTable
        beers={[
          {
            id: 0,
            imagePath:
              "https://wikiliq.org/wp-content/uploads/2021/02/Bud-Light.jpeg",
            name: "Bud Light",
            price: "$26.99",
          },
          {
            id: 1,
            imagePath:
              "https://wikiliq.org/wp-content/uploads/2021/02/Coors-Light-Lager-Beer.jpeg",
            name: "Coors Light Lager Beer",
            price: "$21.99",
          },
          {
            id: 2,
            imagePath:
              "https://wikiliq.org/wp-content/uploads/2021/02/Miller-Lite-Lager-Beer.jpeg",
            name: "Miller Lite Lager Beer",
            price: "$21.99",
          },
          {
            id: 3,
            imagePath:
              "https://wikiliq.org/wp-content/uploads/2021/02/Corona-Extra.jpeg",
            name: "Corona Extra",
            price: "$18.39",
          },
          {
            id: 4,
            imagePath:
              "https://wikiliq.org/wp-content/uploads/2021/02/Michelob-ULTRA.jpeg",
            name: "Michelob ULTRA",
            price: "$24.99",
          },
          {
            id: 5,
            imagePath:
              "https://wikiliq.org/wp-content/uploads/2021/02/Stella-Artois.jpeg",
            name: "Stella Artois",
            price: "$18.62",
          },
          {
            id: 6,
            imagePath:
              "https://wikiliq.org/wp-content/uploads/2021/02/Modelo-Especial.jpeg",
            name: "Model Especial",
            price: "$18.49",
          },
          {
            id: 7,
            imagePath:
              "https://wikiliq.org/wp-content/uploads/2021/02/Guinness-Draught.jpeg",
            name: "Guinness Draught",
            price: "$10.29	",
          },
          {
            id: 8,
            imagePath:
              "https://wikiliq.org/wp-content/uploads/2021/02/Blue-Moon-Belgian-White-Wheat-Beer.jpeg",
            name: "Blue Moon Belgian White Wheat Beer",
            price: "$17.99",
          },
          {
            id: 9,
            imagePath:
              "https://wikiliq.org/wp-content/uploads/2021/02/Heineken-Lager.jpeg",
            name: "Heineken Lager",
            price: "$17.99",
          },
        ]}
      />
    </>
  );
}

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Prima applicazione React</h1>
//       </div>
//     );
//   }
// }

export default App;
