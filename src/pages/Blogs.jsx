import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs-page">
      <div className="blogs-header">
        <div className="blogs-title-wrapper">
          <h1 className="blogs-title">Research Blog</h1>
        </div>
        <p className="blogs-subtitle">
          Insights • Technical Deep Dives • Research Findings
        </p>
      </div>

      <div className="blogs-content">
        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-card">
              {blog.heroImage && (
                <div className="blog-hero">
                  <img
                    src={blog.heroImage}
                    alt={blog.title}
                    className="blog-hero-image"
                  />
                  <div className="blog-hero-overlay"></div>
                </div>
              )}

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">
                    {new Date(blog.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <div className="blog-reading-time">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>5 min read</span>
                  </div>
                </div>

                <h2 className="blog-title">{blog.title}</h2>
                <p className="blog-excerpt">{blog.excerpt}</p>

                <div className="blog-tags">
                  {blog.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="blog-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="blog-footer">
                <span className="read-more">
                  Read Article
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
