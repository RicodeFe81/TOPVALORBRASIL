import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-amazon-dark text-white mt-12">
      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="w-full bg-amazon-light hover:bg-opacity-90 py-3 text-sm font-medium transition-colors"
      >
        Voltar ao início
      </button>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        
        {/* Column 1: Links */}
        <div>
          <h3 className="font-bold text-base mb-3 text-white">Conheça-nos</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/" className="hover:underline">Sobre o TOPVALORBRASIL</Link></li>
            <li><Link to="/" className="hover:underline">Carreiras</Link></li>
            <li><Link to="/" className="hover:underline">Comunicados à Imprensa</Link></li>
          </ul>
        </div>

        {/* Column 2: Legal */}
        <div>
          <h3 className="font-bold text-base mb-3 text-white">Política e Termos</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/legal" className="hover:underline">Política de Privacidade</Link></li>
            <li><Link to="/legal" className="hover:underline">Termos de Uso</Link></li>
            <li><Link to="/legal" className="hover:underline">Aviso de Afiliados</Link></li>
            <li><Link to="/legal" className="hover:underline">Cookies</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="font-bold text-base mb-3 text-white">Contato e Confiança</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="font-bold text-white">Edvan Gonçalves</li>
            <li><a href="tel:21974246792" className="hover:underline">(21) 97424-6792</a></li>
            <li>Zona Sul, Rio de Janeiro - RJ</li>
            <li>Atendimento: Seg a Sex, 9h-18h</li>
          </ul>
        </div>

        {/* Column 4: Map */}
        <div>
          <h3 className="font-bold text-base mb-3 text-white">Localização</h3>
          <div className="w-full h-32 bg-gray-700 rounded overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58757.99440624591!2d-43.236688549999995!3d-22.9691165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd593c7d6c6ad%3A0x7d2524458f407b46!2sZona%20Sul%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Zona Sul RJ"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-600 py-6 text-center text-xs text-gray-300">
        <div className="flex justify-center gap-6 mb-4">
          <span className="cursor-pointer hover:underline">Brasil</span>
          <span className="cursor-pointer hover:underline">Inglês</span>
          <span className="cursor-pointer hover:underline">Dólar</span>
        </div>
        <p>&copy; 2026 TOPVALORBRASIL. Todos os direitos reservados. Edvan Gonçalves.</p>
        <p className="mt-2 text-gray-500 max-w-2xl mx-auto px-4">
          Participamos do Programa de Associados da Amazon Services LLC, um programa de publicidade de afiliados desenvolvido para fornecer meios para os sites ganharem taxas de publicidade anunciando e vinculando à Amazon.com.br.
        </p>
      </div>
    </footer>
  );
};

export default Footer;