import Header from "../components/Header";
import ToyCard from "../components/ToyCard";
import toys from "../data/toys.json";

const Home = () => {
  return (
    <div>
      <Header />

      <div className="text-center mt-10 mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Discover Our Toy Collection 🎠
        </h2>
        <p className="text-gray-500 mt-2">
          Fun, creative, and educational toys for kids of all ages
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-12">
        {toys.map((toy) => (
          <ToyCard key={toy.toyId} toy={toy} />
        ))}
      </div>
    </div>
  );
};

export default Home;
