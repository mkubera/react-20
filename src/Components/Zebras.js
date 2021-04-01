import ZebraImage from "./ZebraImage";
import "./Zebras.css";

function Zebras() {
  return (
    <>
      <h2>Zebras</h2>
      <div className="Zebras">
        <ZebraImage
          src="https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80        "
          alt="Zebra image."
          width="200"
          height="250"
          isInTheWild={true}
        />
        <ZebraImage
          src="https://images.unsplash.com/photo-1574145967029-52f4cd6b7e76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
          alt="Zebra image."
          width="200"
          height="266"
          isInTheWild={false}
        />
      </div>
    </>
  );
}

export default Zebras;
