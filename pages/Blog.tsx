import React, { useEffect } from 'react';
import { BLOG_POSTS } from '../constants';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  useEffect(() => {
    document.title = "Blog & Guias de Compra 2026 - TOPVALORBRASIL";
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-amazon-light text-white py-12 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog TOPVALORBRASIL</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">Dicas de especialistas, comparações detalhadas e guias para ajudar você a fazer a melhor compra em 2026.</p>
      </div>

      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <div className="grid gap-12">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="flex flex-col md:flex-row gap-8 border-b border-gray-100 pb-12 last:border-0">
              <div className="md:w-1/3">
                <Link to="#" className="block overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <img src={post.image} alt={post.title} className="w-full h-52 object-cover hover:scale-105 transition-transform duration-500" />
                </Link>
              </div>
              <div className="md:w-2/3 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-xs font-bold tracking-wider uppercase mb-2">
                  <span className="text-amazon-orange">{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-amazon-blue">
                  <Link to="#">{post.title}</Link>
                </h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{post.content.substring(0, 180)}...</p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="text-sm font-medium text-gray-900">Por {post.author}</div>
                  <Link to="#" className="text-amazon-blue font-bold hover:underline text-sm">Ler artigo &rarr;</Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* AdSense Slot inside Blog */}
        <div className="my-12 w-full h-64 bg-gray-50 border border-gray-200 flex flex-col items-center justify-center text-gray-400 text-sm rounded-lg">
           <span className="font-semibold text-gray-500">Publicidade</span>
           <span className="text-xs">Espaço reservado para Google AdSense</span>
        </div>
      </div>
    </div>
  );
};

export default Blog;