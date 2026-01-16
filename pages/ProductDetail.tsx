import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { Star, ShieldCheck, Truck, RotateCcw, Lock, Check, X } from 'lucide-react';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (product) {
      document.title = `${product.title} - Análise Completa`;
      setActiveImage(product.image);
    }
  }, [product]);

  if (!product) {
    return <div className="p-10 text-center">Produto não encontrado. <Link to="/" className="text-blue-600">Voltar</Link></div>;
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-2 px-4 text-xs text-gray-500">
        <div className="max-w-[1500px] mx-auto">
          <Link to="/" className="hover:underline">Início</Link> &rsaquo; 
          <span className="mx-1">{product.category}</span> &rsaquo; 
          <span className="text-amazon-orange font-bold ml-1">{product.title.substring(0, 30)}...</span>
        </div>
      </div>

      <main className="max-w-[1500px] mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Images Section (Left) */}
          <div className="md:col-span-5 lg:col-span-4 sticky top-28 h-fit">
             <div className="flex gap-4">
                {/* Thumbnails */}
                <div className="flex flex-col gap-2">
                   {[product.image, ...Array(3).fill(product.image)].map((img, idx) => (
                      <button 
                        key={idx} 
                        onMouseEnter={() => setActiveImage(img)}
                        className={`w-12 h-12 border rounded overflow-hidden p-1 ${activeImage === img ? 'border-amazon-orange shadow-md' : 'border-gray-200'}`}
                      >
                         <img src={img} alt="" className="w-full h-full object-contain" />
                      </button>
                   ))}
                </div>
                {/* Main Image */}
                <div className="flex-1 flex items-center justify-center border border-gray-100 bg-white rounded-lg p-4 min-h-[400px]">
                   <img src={activeImage} alt={product.title} className="max-w-full max-h-[400px] object-contain" />
                </div>
             </div>
          </div>

          {/* Info Section (Center) */}
          <div className="md:col-span-4 lg:col-span-5">
            <h1 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">{product.title}</h1>
            
            <div className="flex items-center gap-2 mb-4 text-sm border-b border-gray-200 pb-4">
               <div className="flex text-amazon-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={i < Math.floor(product.rating) ? 0 : 2} />
                  ))}
               </div>
               <span className="text-amazon-blue hover:underline cursor-pointer">{product.reviewsCount} avaliações</span>
               <span className="text-gray-300">|</span>
               <span className="text-gray-600">Perguntas respondidas</span>
            </div>

            <div className="mb-6">
               <div className="flex items-baseline gap-2">
                  <span className="text-sm text-gray-500">Por:</span>
                  <span className="text-2xl font-medium text-gray-900">R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
               </div>
               {product.originalPrice > product.price && (
                  <div className="text-sm text-gray-500">
                     De: <span className="line-through">R$ {product.originalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                     <span className="ml-2 text-green-700 font-bold">Economize {Math.round(((product.originalPrice - product.price)/product.originalPrice)*100)}%</span>
                  </div>
               )}
               <div className="text-sm text-gray-600 mt-2">
                  Em até <span className="font-bold">10x sem juros</span> no cartão
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { icon: ShieldCheck, text: "Garantia Segura" },
                  { icon: Truck, text: "Entrega Rápida" },
                  { icon: RotateCcw, text: "Devolução Grátis" },
                  { icon: Lock, text: "Transação Segura" }
                ].map((item, idx) => (
                   <div key={idx} className="flex items-center gap-2 text-xs text-amazon-blue">
                      <div className="bg-gray-100 p-2 rounded-full"><item.icon size={16} /></div>
                      <span>{item.text}</span>
                   </div>
                ))}
            </div>

            <hr className="border-gray-200 mb-6" />

            <div className="mb-6">
               <h3 className="font-bold text-lg mb-2">Sobre este item</h3>
               <p className="text-gray-700 leading-relaxed text-sm mb-4">{product.detailedDescription}</p>
               <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                  <li>Alta durabilidade e design premium.</li>
                  <li>Compatibilidade universal com dispositivos modernos.</li>
                  <li>Tecnologia de ponta certificada.</li>
                  <li>Suporte ao cliente 24/7.</li>
               </ul>
            </div>
          </div>

          {/* Buy Box (Right) */}
          <div className="md:col-span-3 lg:col-span-3">
             <div className="border border-gray-300 rounded-lg p-5 shadow-sm sticky top-28 bg-white">
                <div className="text-2xl font-bold text-red-700 mb-2">R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                <div className="text-sm text-gray-600 mb-4">
                   Entrega GRÁTIS: <span className="font-bold text-gray-900">Segunda-feira, 25 de Ago</span>
                </div>
                <div className="text-sm text-green-700 font-medium mb-4">Em Estoque</div>

                <div className="space-y-3">
                   <button className="w-full bg-amazon-yellow hover:bg-amazon-orange text-gray-900 py-3 rounded-full text-sm font-medium shadow-sm transition-colors cursor-pointer">
                      Ver na Amazon
                   </button>
                   <button className="w-full bg-amazon-orange hover:bg-yellow-500 text-gray-900 py-3 rounded-full text-sm font-medium shadow-sm transition-colors cursor-pointer">
                      Comprar Agora
                   </button>
                </div>

                <div className="mt-4 text-xs text-gray-500 space-y-2">
                   <div className="grid grid-cols-2">
                      <span>Enviado por</span>
                      <span className="text-gray-900">Amazon.com.br</span>
                   </div>
                   <div className="grid grid-cols-2">
                      <span>Vendido por</span>
                      <span className="text-gray-900">Amazon.com.br</span>
                   </div>
                </div>

                <div className="mt-6 p-3 bg-gray-50 rounded text-xs text-gray-600 flex items-start gap-2 border border-gray-200">
                   <Lock size={14} className="mt-0.5 shrink-0" />
                   <span>Transação Segura: Seus dados estão protegidos por criptografia de ponta a ponta.</span>
                </div>
             </div>
          </div>

        </div>

        {/* Pros and Cons - SEO Content */}
        <section className="mt-12 max-w-4xl">
           <h2 className="text-2xl font-bold text-gray-900 mb-6">Análise Imparcial: Vale a pena comprar?</h2>
           
           <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                 <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2"><Check size={20} /> Pontos Positivos</h3>
                 <ul className="space-y-2">
                    {product.pros.map((pro, i) => (
                       <li key={i} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-green-600 font-bold">+</span> {pro}
                       </li>
                    ))}
                 </ul>
              </div>
              <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                 <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2"><X size={20} /> Pontos de Atenção</h3>
                 <ul className="space-y-2">
                    {product.cons.map((con, i) => (
                       <li key={i} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-red-600 font-bold">-</span> {con}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>

           <div className="prose max-w-none text-gray-700">
              <p className="mb-4">
                 Ao testarmos o <strong>{product.title}</strong>, ficou claro que este produto se destaca em sua categoria ({product.category}). A qualidade de construção é evidente assim que você o retira da caixa.
              </p>
              <p className="mb-4">
                 Comparado aos concorrentes diretos, o preço de R$ {product.price} oferece um custo-benefício interessante, especialmente considerando a durabilidade projetada para o uso diário em 2026.
              </p>
              <p>
                 <strong>Veredito:</strong> Se você busca confiabilidade e performance sem comprometer o orçamento excessivamente, esta é uma "Escolha Segura". Recomendamos a compra através da Amazon para garantir a originalidade e a política de devolução facilitada.
              </p>
           </div>
           
           <div className="mt-8 flex justify-center">
              <button className="bg-gray-900 text-white px-8 py-3 rounded shadow hover:bg-gray-800 transition-colors font-medium">
                 Verificar Preço Atualizado e Disponibilidade
              </button>
           </div>
        </section>

      </main>
    </div>
  );
};

export default ProductDetail;
