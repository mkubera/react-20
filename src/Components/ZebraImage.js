function ZebraImage({ src, alt, width, height, isInTheWild }) {
  // destructuring
  // {src, alt, width, height} = {src="", alt="", width="", height=""}

  // CONDITIONAL RENDERING:
  // https://reactjs.org/docs/conditional-rendering.html
  return (
    <div>
      <p>{isInTheWild ? "Is In the Wild!" : "Is not in the wild :/"}</p>
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
}

export default ZebraImage;
