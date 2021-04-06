function ZebraImage({ name, src, alt, width, height, isInTheWild, id }) {
  // destructuring
  // {src, alt, width, height} = {src="", alt="", width="", height=""}

  // CONDITIONAL RENDERING:
  // https://reactjs.org/docs/conditional-rendering.html
  return (
    <div>
      <h3>
        {id} {name}
      </h3>
      <p>{isInTheWild ? <b>"Is In the Wild!"</b> : "Is not in the wild :/"}</p>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
}

export default ZebraImage;
