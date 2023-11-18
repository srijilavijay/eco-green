import React from 'react'
import BlogCard1 from './BlogCard1'
import BlogCard2 from './BlogCard2'

function Blog1() {
  return (
    <div>
      <p style={{color:"rgba(115,185,37,255)", fontSize:"12px"}}>OUR BLOG</p>
        <h2>Recent From Blog</h2>
        <BlogCard1/>
        <BlogCard2/>
    </div>
  )
}

export default Blog1