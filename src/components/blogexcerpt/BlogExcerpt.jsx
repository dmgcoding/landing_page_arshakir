import React from 'react';
import './blogexcerpt.css';

const BlogExcerpt = (props) => {
  return (
    <div className="g__baexcerpt">
        <div className="g__baexcerpt-content">
            <img src={props.a.img} alt="" />
            <div className="g__baexcerpt-content__article">
                <div className="g__baexcerpt-content__article__details">
                    <p>{props.a.date}</p>
                    <p>{props.a.category}</p>
                </div>
                <p className="g__baexcerpt-content__article-title">{props.a.title}</p>
            </div>
        </div>
        <div className="g__baexcerpt-hr"></div>
    </div>
  )
}

export default BlogExcerpt