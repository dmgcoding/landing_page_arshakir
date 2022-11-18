import React from 'react';
import BlogArticle from '../../components/blogArticle/BlogArticle';
import BlogExcerpt from '../../components/blogexcerpt/BlogExcerpt';
import './blog.css';
import { blog1,blog2,blog3, blog4,blog5,blog6 } from './imports';

const articles = [
  {
    img: blog1,
    date: "08-11-2021",
    category: "category",
    title: "Believing neglected so so allowance existence departure.",
    para: "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
  },
  {
    img: blog2,
    date: "08-11-2021",
    category: "category",
    title: "Believing neglected so so allowance existence departure.",
    para: "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
  },
  {
    img: blog3,
    date: "08-11-2021",
    category: "category",
    title: "Believing neglected so so allowance existence departure.",
    para: "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
  },
  {
    img: blog4,
    date: "08-11-2021",
    category: "category",
    title: "Believing neglected so so allowance existence departure.",
    para: "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
  },
  {
    img: blog5,
    date: "08-11-2021",
    category: "category",
    title: "Believing neglected so so allowance existence departure.",
    para: "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
  },
  {
    img: blog6,
    date: "08-11-2021",
    category: "category",
    title: "Believing neglected so so allowance existence departure.",
    para: "Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary.",
  },
];

const Blog = () => {
  return (
    <div className="lp__blog">
      <div className="lp__blog__container">
        <div className="lp__blog__container-title">
          <p>
          Our Latest Blog Posts
          </p>
          <button>See all blog posts</button>
        </div>
        <div className="lp__blog__container-blog">
          <BlogArticle a={articles[0]} width="32%"/>
          <BlogArticle a={articles[1]} width="32%"/>
          <div className="lp__blog__container-blog__excerptsbox">
            <BlogExcerpt a={articles[2]}/>
            <BlogExcerpt a={articles[3]}/>
            <BlogExcerpt a={articles[4]}/>
            <BlogExcerpt a={articles[5]}/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Blog