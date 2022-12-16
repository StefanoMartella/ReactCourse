function BeerRow({ beer }) {
  return (
    <tr>
      {Object.entries(beer).map(([key, value]) => (
        <td key={key}>
          {key === "imagePath" ? (
            <img src={value} alt={value} height={160} width={90} />
          ) : (
            value
          )}
        </td>
      ))}
    </tr>
  );
}

export default BeerRow;
