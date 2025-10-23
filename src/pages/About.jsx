import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-[#fdf3f0] via-[#faf0fa] to-[#f5f7fa] min-h-screen py-16 px-6 text-gray-700">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-pink-100">
        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">About ToyTopia</h1>

        <p className="leading-relaxed mb-4">
          At <span className="font-semibold text-pink-500">ToyTopia</span>, we believe in the power of play. 
          Founded with a passion for creativity and imagination, we bring together a world of safe, high-quality, and 
          fun toys that inspire children to explore and grow.
        </p>

        <p className="leading-relaxed mb-4">
          Our mission is to make childhood magical — one toy at a time. Whether it’s building blocks, science kits, 
          dolls, or outdoor games, ToyTopia offers something special for every curious little mind.
        </p>

        <p className="leading-relaxed">
          We are constantly innovating and partnering with trusted toy makers to ensure every product we sell 
          encourages learning, laughter, and love. 💖
        </p>

        <div className="text-center mt-10">
          <Link
            to="/"
            className="btn bg-pink-500 hover:bg-pink-600 text-white px-6"
          >
            ⬅ Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
