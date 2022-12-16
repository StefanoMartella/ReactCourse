import React from "react";
import BeerRow from "./BeerRow";

class BeerTable extends React.Component {
  render() {
    const { beers } = this.props;

    return (
      <table>
        <thead>
          <tr>
            <td>Id</td>
            <td>Foto</td>
            <td>Nome</td>
            <td>Prezzo</td>
          </tr>
        </thead>
        <tbody>
          {beers.map((beer) => (
            <BeerRow key={beer.id} beer={beer} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default BeerTable;
