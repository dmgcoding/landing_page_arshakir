import React from 'react';
import './blogArticle.css'

const BlogArticle = (props) => {
  return (
    <div style={{width:props.width}} className="g__blogarticle">
        <img src={props.a.img} alt="article image" />
        <div className="g__blogarticle__meta">
            <p>{props.a.date}</p>
            <p>{props.a.category}</p>
        </div>
        <p className='g__blogarticle-heading'>{props.a.title}</p>
        <p className='g__blogarticle-para'>{props.a.para}</p>
    </div>
  )
}

export default BlogArticle