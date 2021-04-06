import ZebraImage from "./ZebraImage";
import "./Zebras.css";

function Zebras() {
  const zebras = [
    {
      id: 1,
      name: "Fikusik",
      src:
        "https://images.unsplash.com/photo-1540377536853-9dcd8b00ec43?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      alt: "Zebra image 1.",
      width: 200,
      height: 250,
      isInTheWild: true,
    },
    {
      id: 2,
      name: "Jajek",
      src:
        "https://images.unsplash.com/photo-1574145967029-52f4cd6b7e76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      alt: "Zebra image 2.",
      width: 200,
      height: 266,
      isInTheWild: false,
    },
    {
      id: 3,
      name: "Jajka",
      src:
        "https://images.unsplash.com/photo-1574145967029-52f4cd6b7e76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      alt: "Zebra image 3.",
      width: 200,
      height: 266,
      isInTheWild: false,
    },
  ];

  return (
    <>
      <h2>Zebras</h2>
      <div className="Zebras">
        {zebras.map((z) => {
          return (
            <ZebraImage
              name={z.name}
              src={z.src}
              alt={z.alt}
              width={z.width}
              height={z.height}
              isInTheWild={z.isInTheWild}
              id={z.id}
              key={z.id}
            />
          );
        })}
      </div>
    </>
  );
}

export default Zebras;
