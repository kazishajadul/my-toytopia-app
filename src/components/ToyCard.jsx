import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  return (
    <div className="card bg-gradient-to-br from-[#fdf3f0] via-[#faf0fa] to-[#f5f7fa] shadow-md hover:shadow-xl transition duration-300 rounded-2xl overflow-hidden">
      {/* ✅ Image Section with fixed height */}
      <figure className="bg-white">
        <img
          src={toy.pictureURL}
          alt={toy.toyName}
          className="w-full h-60 object-cover object-center transition-transform duration-300 hover:scale-105"
        />
      </figure>

      {/* ✅ Card Body */}
      <div className="card-body p-5">
        <h2 className="card-title text-lg font-bold text-gray-800">{toy.toyName}</h2>
        <p className="text-sm text-gray-500">{toy.subCategory}</p>

        <div className="flex justify-between items-center mt-2">
          <p className="font-semibold text-primary">${toy.price}</p>
          <span className="text-yellow-500 font-semibold">★ {toy.rating}</span>
        </div>

        <div className="card-actions justify-end mt-4">
          <Link to={`/toy/${toy.toyId}`}>
            <button className="btn btn-sm bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:from-pink-500 hover:to-purple-600">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
