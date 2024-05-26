import { useParams } from "react-router-dom";
import MaxWidthWrapper from "./MaxWidWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatDate } from "../utils/formatDate";
import ReactMarkdown from "react-markdown";

const SinglePost = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const token = import.meta.env.VITE_API_TOKEN;

    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/blogs/${id}?populate=*`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPost(response.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading..</div>;
  }

  const { author, publishedAt, title } = post.attributes;
  const { text } = post.attributes;
  const { url } = post.attributes.thumbnail.data.attributes.formats.medium;

  const postText = text.map((p) => p.children[0].text);

  console.log(text);

  return (
    <MaxWidthWrapper>
      <div>
        <div>
          <img
            src={`http://localhost:1337${url}`}
            alt={title}
            className="rounded border-2 border-green-300 mb-6 w-full h-[45vh] object-cover"
          />
          <h2 className="text-2xl text-green-800">{title}</h2>
          <div className="flex gap-4 mt-5 mb-5">
            <span className="border text-neutral-400 px-4 rounded">
              {author}
            </span>
            <span className="border text-neutral-400 px-4 rounded">
              {formatDate(publishedAt)}
            </span>
          </div>

          <p>{postText}</p>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
export default SinglePost;
