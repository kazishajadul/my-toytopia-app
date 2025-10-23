import { useParams, Link } from "react-router-dom";
import toys from "../data/toys.json";

const ToyDetails = () => {
  const { id } = useParams();
  const toy = toys.find((t) => t.toyId === parseInt(id));

  if (!toy) return <p className="text-center mt-10">Toy not found!</p>;

  return (
    <div className="max-w-3xl mx-auto my-10 card bg-base-100 shadow-xl">
      <figure>
        <img src={toy.pictureURL} alt={toy.toyName} className="h-full object-cover w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{toy.toyName}</h2>
        <p>{toy.description}</p>
        <p><strong>Price:</strong> ${toy.price}</p>
        <p><strong>Rating:</strong> {toy.rating}</p>
        <p><strong>Available:</strong> {toy.availableQuantity}</p>
        <p><strong>Seller:</strong> {toy.sellerName} ({toy.sellerEmail})</p>
        <Link to="/" className="btn btn-primary w-fit mt-4">Back to Home</Link>
      </div>
    </div>
  );
};

export default ToyDetails;
