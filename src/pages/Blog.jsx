import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div className="bg-gradient-to-r from-[#fdf3f0] via-[#faf0fa] to-[#f5f7fa] min-h-screen py-16 px-6 text-gray-700">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-md border border-pink-100">
        <h1 className="text-3xl font-bold text-pink-600 mb-6 text-center">ToyTopia Blog</h1>

        <article className="space-y-4 leading-relaxed">
          <p>
            Welcome to the ToyTopia Blog — your cozy corner for toy trends, parenting tips, and creative playtime ideas! 
            Here, we share insights about educational toys, DIY crafts, and safe toy selection for every age group.
          </p>
          <p>
            Our goal is to bring joy and imagination into every child’s playroom. 
            We believe toys are more than just fun — they’re tools that shape creativity, confidence, and connection.
          </p>
          <p>
            Stay tuned for our upcoming articles on STEM toy learning, eco-friendly playtime, 
            and exclusive behind-the-scenes peeks at ToyTopia’s latest collections.
          </p>
        </article>

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

export default Blog;
