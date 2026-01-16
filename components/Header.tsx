import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, User, MapPin } from 'lucide-react';

const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      // In a real app, this would filter or navigate to search results
      console.log('Searching for:', searchTerm);
    }
  };

  return (
    <header className="flex flex-col">
      {/* Top Bar - Dark Blue */}
      <div className="bg-amazon-dark text-white py-2 px-4 flex items-center justify-between lg:justify-start gap-4 sticky top-0 z-50">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 hover:border hover:border-white p-1 rounded">
          <span className="text-xl md:text-2xl font-bold tracking-tight">TOPVALOR<span className="text-amazon-yellow">BRASIL</span></span>
        </Link>

        {/* Location (Hidden on mobile) */}
        <div className="hidden lg:flex flex-col text-xs p-2 hover:border hover:border-white rounded cursor-pointer leading-tight">
          <span className="text-gray-300 ml-4">Enviar para</span>
          <div className="font-bold flex items-center gap-1">
            <MapPin size={14} /> Rio de Janeiro
          </div>
        </div>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 max-w-3xl flex h-10 rounded overflow-hidden focus-within:ring-2 focus-within:ring-amazon-yellow">
          <select className="bg-gray-100 text-gray-600 text-xs px-2 border-r border-gray-300 outline-none hidden md:block cursor-pointer hover:bg-gray-200">
            <option>Todos</option>
            <option>Eletrônicos</option>
            <option>Casa</option>
            <option>Livros</option>
          </select>
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar produtos, marcas e muito mais..." 
            className="flex-1 px-3 text-black outline-none"
          />
          <button type="submit" className="bg-amazon-yellow hover:bg-amazon-orange text-amazon-dark px-4 flex items-center justify-center transition-colors">
            <Search size={20} />
          </button>
        </form>

        {/* Right Actions */}
        <div className="flex items-center gap-4 text-xs lg:text-sm">
          <div className="hidden md:block p-2 hover:border hover:border-white rounded cursor-pointer">
            <div className="leading-tight">Olá, Visitante</div>
            <div className="font-bold">Contas e Listas</div>
          </div>
          
          <div className="hidden md:block p-2 hover:border hover:border-white rounded cursor-pointer">
            <div className="leading-tight">Devoluções</div>
            <div className="font-bold">e Pedidos</div>
          </div>

          <div className="flex items-end gap-1 p-2 hover:border hover:border-white rounded cursor-pointer relative">
            <ShoppingCart size={28} />
            <span className="font-bold hidden md:inline">Carrinho</span>
            <span className="absolute top-1 left-5 text-amazon-orange font-bold text-sm">0</span>
          </div>
        </div>
      </div>

      {/* Sub Menu - Light Blue */}
      <nav className="bg-amazon-light text-white text-sm py-2 px-4 flex items-center gap-4 overflow-x-auto whitespace-nowrap scrollbar-hide">
        <button className="flex items-center gap-1 font-bold hover:border hover:border-white p-1 rounded">
          <Menu size={20} /> Todas
        </button>
        <Link to="/" className="hover:border hover:border-white p-1 rounded">Venda na Amazon</Link>
        <Link to="/" className="hover:border hover:border-white p-1 rounded">Mais Vendidos</Link>
        <Link to="/" className="hover:border hover:border-white p-1 rounded">Ofertas do Dia</Link>
        <Link to="/blog" className="hover:border hover:border-white p-1 rounded">Blog & Guias</Link>
        <Link to="/" className="hover:border hover:border-white p-1 rounded">Eletrônicos</Link>
        <Link to="/" className="hover:border hover:border-white p-1 rounded">Computadores</Link>
        <Link to="/" className="hover:border hover:border-white p-1 rounded">Casa e Cozinha</Link>
      </nav>
    </header>
  );
};

export default Header;