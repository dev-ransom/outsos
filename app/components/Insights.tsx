import { posts } from "../data/content";
import Photo from "./Photo";

export default function Insights() {
  return (
    <section id="blog" className="insights" aria-labelledby="insights-title">
      <div className="insights__intro">
        <h2 id="insights-title" className="section-title">
          Insights &amp; Inspiration
        </h2>
        <p>
          From Dubai&rsquo;s marketing trends to brand success stories, our blog is here to share
          insights, tips, and inspiration for business owners and creatives alike.
        </p>
      </div>

      <ul className="insights__list">
        {posts.map((post, index) => (
          <li key={post.title}>
            <a className="post" href={post.href}>
              {/* Swap in a real photo per post, e.g. src="/images/blog-1.jpg" */}
              <Photo
                className="post__thumb"
                alt=""
                width={220}
                height={160}
                priority={index === 0}
              />
              <div className="post__body">
                <h3 className="post__title">{post.title}</h3>
                <p className="post__excerpt">{post.excerpt}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
