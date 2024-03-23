import { useLoaderData } from "react-router-dom";
import Blogpost from "./Blogpost";

const Blog = () => {
  const blog = useLoaderData();
  return (
    <div className="container mx-auto">
      <h1 className='text-2xl text-center font-bold my-5'>Total post {blog.length}</h1>
      <p className="mx-auto max-w-lg text-lg font-semibold text-center mb-5">We have a maximum number post here Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, expedita.</p>
      <div className="grid grid-cols-4 gap-5">
        {blog.map((post, idx) => (
          <Blogpost key={idx} post={post}></Blogpost>
        ))}
      </div>
    </div>
  );
};

export default Blog;
