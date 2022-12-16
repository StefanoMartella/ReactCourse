function Animal(props) {
  return (
    <>
      <img width={150} height={150} src={props.imagePath} alt={props.name} />
      <div>
        <span>Nome animale:</span>
        <span>{props.name}</span>
      </div>
      <div>
        <span>Può volare:</span>
        {/* <span>{props.canFly ? <span>Sì</span> : <span>No</span>}</span> */}
        <span>{props.canFly ? "Sì" : "No"}</span>
      </div>
    </>
  );
}

export default Animal;
