import React, { useEffect } from 'react';
import { PRODUCTS, BLOG_POSTS } from '../constants';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Award, TrendingUp } from 'lucide-react';

const Home: React.FC = () => {
  
  useEffect(() => {
    document.title = "TOPVALORBRASIL 2026 | Melhores Ofertas e Recomendações";
  }, []);

  return (
    <div className="max-w-[1500px] mx-auto bg-gray-100 min-h-screen pb-10">
      
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-gray-800 to-gray-700 h-[250px] md:h-[350px] flex items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
            As Melhores Escolhas de 2026
          </h1>
          <p className="text-lg text-gray-200 mb-6 drop-shadow-md">
            Análises imparciais, preços justos e a confiança que você merece.
          </p>
          <button onClick={() => document.getElementById('trending')?.scrollIntoView({behavior: 'smooth'})} className="bg-amazon-yellow text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-amazon-orange transition-colors shadow-lg">
            Descubra Ofertas
          </button>
        </div>
      </div>

      {/* Main Content Container - overlaps banner slightly */}
      <div className="relative z-20 -mt-16 px-4 md:px-6 space-y-8">
        
        {/* Category Cards (Feature imitation) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { title: 'Ofertas do Dia', img: 'https://picsum.photos/id/119/400/300', action: 'Ver todas as ofertas' },
            { title: 'Eletrônicos Premium', img: 'https://picsum.photos/id/180/400/300', action: 'Explorar gadgets' },
            { title: 'Casa & Conforto', img: 'https://picsum.photos/id/1062/400/300', action: 'Renove seu lar' },
            { title: 'Melhores Avaliados', img: 'https://picsum.photos/id/250/400/300', action: 'Ver recomendações' },
          ].map((cat, idx) => (
            <div key={idx} className="bg-white p-4 pt-5 rounded shadow-sm flex flex-col h-full">
              <h2 className="font-bold text-xl mb-3">{cat.title}</h2>
              <div className="flex-1 mb-3 overflow-hidden rounded">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <span className="text-amazon-blue text-sm font-medium hover:underline hover:text-red-700 cursor-pointer">{cat.action}</span>
            </div>
          ))}
        </div>

        {/* Section: Trending */}
        <section id="trending" className="bg-white p-6 rounded shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold text-gray-800">🔥 Produtos em Alta</h2>
            <Link to="/" className="text-xs text-amazon-blue ml-auto hover:underline">Ver mais</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Section: Best Sellers (Horizontal Scroller Mock) */}
        <section className="bg-white p-6 rounded shadow-sm">
           <div className="flex items-center gap-2 mb-4">
            <h2 className="text-xl font-bold text-gray-800">⭐ Mais Bem Avaliados</h2>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
             {PRODUCTS.slice().reverse().map(product => (
               <div key={`rev-${product.id}`} className="min-w-[220px] max-w-[220px]">
                  <ProductCard product={product} />
               </div>
             ))}
          </div>
        </section>

        {/* AdSense Placeholder */}
        <div className="w-full h-32 bg-gray-200 border-2 border-dashed border-gray-400 flex items-center justify-center text-gray-500 font-medium rounded">
          Publicidade (AdSense Space)
        </div>

        {/* Section: Blog/Guides */}
        <section className="bg-white p-6 rounded shadow-sm">
          <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold text-gray-800">Guias de Compra & Análises</h2>
             <Link to="/blog" className="flex items-center text-amazon-blue hover:text-amazon-orange text-sm font-medium">
                Ver todos os artigos <ArrowRight size={16} className="ml-1" />
             </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.map(post => (
              <div key={post.id} className="border border-gray-100 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-gray-50">
                <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <div className="text-xs text-amazon-orange font-bold uppercase tracking-wider mb-2">{post.category}</div>
                  <h3 className="font-bold text-lg leading-tight mb-2 text-gray-900">{post.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">{post.excerpt}</p>
                  <Link to="/blog" className="text-sm font-medium text-amazon-blue hover:underline">Ler artigo completo</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

         {/* Value Proposition */}
         <section className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center py-8">
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-amazon-blue">
                <Award size={24} />
              </div>
              <h3 className="font-bold text-gray-900">Análises Independentes</h3>
              <p className="text-sm text-gray-600 mt-2">Testamos produtos rigorosamente para garantir sua qualidade.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="bg-orange-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-amazon-orange">
                <Zap size={24} />
              </div>
              <h3 className="font-bold text-gray-900">Ofertas Verificadas</h3>
              <p className="text-sm text-gray-600 mt-2">Monitoramos preços para encontrar o melhor custo-benefício.</p>
            </div>
            <div className="bg-white p-6 rounded shadow-sm">
              <div className="bg-green-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600">
                <TrendingUp size={24} />
              </div>
              <h3 className="font-bold text-gray-900">Atualizações 2026</h3>
              <p className="text-sm text-gray-600 mt-2">Conteúdo sempre atualizado com as últimas tendências.</p>
            </div>
         </section>
      </div>
    </div>
  );
};

export default Home;