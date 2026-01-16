import React, { useEffect } from 'react';

const Legal: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto prose prose-blue">
        <h1>Informações Legais e Transparência</h1>
        
        <section className="mb-10">
          <h2>Aviso de Afiliados (Disclaimer)</h2>
          <p>
            O <strong>TOPVALORBRASIL</strong> é um participante do Programa de Associados da Amazon Services LLC, um programa de publicidade de afiliados projetado para fornecer um meio para que sites ganhem taxas de publicidade anunciando e vinculando à Amazon.com.br.
          </p>
          <p>
            Isso significa que, quando você clica em links para diversos comerciantes neste site e faz uma compra, isso pode resultar em uma comissão creditada a este site. Isso <strong>não afeta</strong> o preço que você paga pelo produto, mas nos ajuda a manter o conteúdo gratuito e de alta qualidade.
          </p>
          <p>
            Nossas análises são baseadas em pesquisas independentes e feedback real dos usuários. Não recebemos pagamento direto de marcas para favorecer produtos específicos em nossas avaliações, a menos que explicitamente declarado como "Conteúdo Patrocinado".
          </p>
        </section>

        <section className="mb-10">
          <h2>Política de Privacidade</h2>
          <p>Sua privacidade é importante para nós. É política do TOPVALORBRASIL respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site.</p>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.
          </p>
          <h3>Cookies e Google AdSense</h3>
          <p>
            Usamos cookies para analisar o tráfego do site e otimizar a sua experiência no site. Ao aceitar o uso de cookies, seus dados serão agregados com os dados de todos os outros usuários.
          </p>
          <p>
            O Google, como fornecedor terceirizado, utiliza cookies para exibir anúncios em nosso site. O uso do cookie DART pelo Google permite que ele exiba anúncios para nossos usuários com base em sua visita ao nosso site e a outros sites na Internet.
          </p>
        </section>

        <section className="mb-10">
          <h2>Termos de Uso</h2>
          <p>
            Ao acessar o site TOPVALORBRASIL, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site.
          </p>
          <p>
            Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>
        </section>

        <div className="mt-12 p-6 bg-gray-50 rounded border border-gray-200 text-sm text-gray-600">
           <p className="font-bold mb-2">Contato do Responsável Legal:</p>
           <p>Edvan Gonçalves</p>
           <p>Rio de Janeiro - RJ</p>
           <p>Email: contato@topvalorbrasil.com.br (fictício para demo)</p>
        </div>
      </div>
    </div>
  );
};

export default Legal;