import { useParams, useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";
import "./BlogDetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === parseInt(id));

  if (!blog) {
    return (
      <div className="blog-detail">
        <div className="not-found">
          <h1>Blog not found</h1>
          <button onClick={() => navigate("/blogs")} className="back-button">
            Back to Blogs
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <button onClick={() => navigate("/blogs")} className="back-button">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blogs
      </button>

      <article className="blog-article">
        {blog.heroImage && (
          <div className="blog-hero">
            <img src={blog.heroImage} alt={blog.title} className="hero-image" />
          </div>
        )}

        <header className="article-header">
          <div className="article-meta">
            <span className="article-date">
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="article-title">{blog.title}</h1>
          <div className="article-tags">
            {blog.tags.map((tag, index) => (
              <span key={index} className="article-tag">
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </div>
  );
};

export default BlogDetail;
