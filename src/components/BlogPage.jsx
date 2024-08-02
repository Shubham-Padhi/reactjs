import React from 'react';
import "../styles/Blog.css"

const BlogPage = () => {
  const posts = [
    {
      title: 'Exploring the Marketing',
      date: 'August 1, 2024',
      content: 'React is a powerful library for building user interfaces. This article explores its ecosystem and related libraries...',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg'
    },
    {
      title: 'web design',
      date: 'July 15, 2024',
      content: 'JavaScript closures are a fundamental concept that every developer should understand. In this article, we dive deep into closures...',
      image: 'https://images.pexels.com/photos/5077043/pexels-photo-5077043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Development Grid Layout - A Complete Guide',
      date: 'July 5, 2024',
      content: 'CSS Grid Layout is a powerful tool for creating responsive web designs. This guide covers everything you need to know about CSS Grid...',
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Development Grid Layout - A Complete Guide',
      date: 'July 5, 2024',
      content: 'CSS Grid Layout is a powerful tool for creating responsive web designs. This guide covers everything you need to know about CSS Grid...',
      image: 'https://images.pexels.com/photos/1181342/pexels-photo-1181342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Development Grid Layout - A Complete Guide',
      date: 'July 5, 2024',
      content: 'CSS Grid Layout is a powerful tool for creating responsive web designs. This guide covers everything you need to know about CSS Grid...',
      image: 'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      title: 'Development Grid Layout - A Complete Guide',
      date: 'July 5, 2024',
      content: 'CSS Grid Layout is a powerful tool for creating responsive web designs. This guide covers everything you need to know about CSS Grid...',
      image: 'https://images.pexels.com/photos/1181522/pexels-photo-1181522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
  ];

  return (
    <div className="page-container">
        <div className='blog'>
        <h1>My Blog</h1>
        </div>
        
  
      <div className="content">
        {posts.map((post, index) => (
          <div className="blog-post" key={index}>
            <div className="image-container">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="post-content">
              <h2>{post.title}</h2>
              <div className="date">{post.date}</div>
              <p>{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
