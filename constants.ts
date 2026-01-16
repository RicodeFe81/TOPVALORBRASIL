import { Product, BlogPost } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Sony WH-1000XM5 Fones de Ouvido Noise Cancelling',
    price: 1899.90,
    originalPrice: 2299.00,
    rating: 4.8,
    reviewsCount: 1250,
    image: 'https://picsum.photos/id/1/800/800',
    description: 'A melhor tecnologia de cancelamento de ruído do mercado, com até 30 horas de bateria.',
    category: 'Eletrônicos',
    badge: 'Escolha Amazon',
    pros: ['Cancelamento de ruído líder', 'Bateria de longa duração', 'Conforto extremo'],
    cons: ['Preço elevado', 'Não dobra totalmente'],
    detailedDescription: 'O Sony WH-1000XM5 reescreve as regras para uma audição sem distrações. Com dois processadores controlando 8 microfones, o cancelamento de ruído é otimizado automaticamente com base nas condições de uso e ambiente.'
  },
  {
    id: '2',
    title: 'Echo Dot (5ª Geração) | Smart Speaker com Alexa',
    price: 359.10,
    originalPrice: 429.00,
    rating: 4.9,
    reviewsCount: 8900,
    image: 'https://picsum.photos/id/2/800/800',
    description: 'O Echo Dot com melhor som já lançado. Controle sua casa inteligente com voz.',
    category: 'Casa Inteligente',
    badge: 'Mais Vendido',
    pros: ['Som vibrante', 'Sensores de temperatura', 'Controle de privacidade'],
    cons: ['Sem bateria interna', 'Botões físicos limitados'],
    detailedDescription: 'Curta uma experiência de áudio superior em comparação aos modelos anteriores de Echo Dot com Alexa. Vocais mais nítidos, graves mais potentes e um som vibrante em qualquer ambiente.'
  },
  {
    id: '3',
    title: 'Máquina de Café Espresso Automática Philips Walita',
    price: 2499.00,
    originalPrice: 3100.00,
    rating: 4.6,
    reviewsCount: 450,
    image: 'https://picsum.photos/id/1060/800/800',
    description: 'Café expresso e cappuccino de qualidade profissional no conforto de casa.',
    category: 'Cozinha',
    badge: 'Oferta',
    pros: ['Fácil de limpar', 'Moedor cerâmico', 'Display touch intuitivo'],
    cons: ['Ocupa espaço na bancada', 'Consumo de água na limpeza'],
    detailedDescription: 'Prepare cafés aromáticos como espresso, café e cappuccino com o toque de um botão. O sistema LatteGo prepara uma espuma de leite sedosa e suave, é fácil de configurar e pode ser limpo em apenas 15 segundos.'
  },
  {
    id: '4',
    title: 'Kindle Paperwhite 16GB - Tela 6.8"',
    price: 799.00,
    originalPrice: 799.00,
    rating: 4.9,
    reviewsCount: 3200,
    image: 'https://picsum.photos/id/367/800/800',
    description: 'Agora com tela maior, temperatura de luz ajustável e bateria para semanas.',
    category: 'Dispositivos',
    pros: ['Tela antirreflexo', 'À prova d\'água', 'Bateria dura semanas'],
    cons: ['Sem botões físicos de página', 'Sem entrada de fone'],
    detailedDescription: 'O novo Kindle Paperwhite possui uma tela de 6,8” com bordas mais finas, temperatura de luz ajustável, bateria com duração de até 10 semanas e é 20% mais rápido para virar as páginas em comparação com a geração anterior.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Os Melhores Fones de Ouvido para Trabalhar em 2026',
    excerpt: 'Analisamos conforto, qualidade de som e cancelamento de ruído para aumentar sua produtividade.',
    content: 'Trabalhar de casa exige foco. O ruído ambiente pode ser o maior inimigo da produtividade. Neste artigo, testamos os 5 principais modelos de fones com cancelamento de ruído ativo (ANC) do mercado. O Sony WH-1000XM5 continua sendo o rei do silêncio, mas opções da Bose e Apple trazem competidores à altura...',
    author: 'Edvan Gonçalves',
    date: '12 Out 2025',
    image: 'https://picsum.photos/id/4/800/400',
    category: 'Tecnologia'
  },
  {
    id: '2',
    title: 'Guia Completo: Como Escolher sua Cafeteira Automática',
    excerpt: 'Não gaste dinheiro à toa. Entenda as diferenças entre cápsula, pó e grão.',
    content: 'O mundo do café é vasto. Desde as práticas máquinas de cápsula até as complexas máquinas de espresso manuais. Para quem busca equilíbrio entre praticidade e qualidade, as automáticas (superautomáticas) são o investimento ideal para 2026. Elas moem o grão na hora e entregam frescor sem a sujeira do método manual...',
    author: 'Equipe Editorial',
    date: '05 Nov 2025',
    image: 'https://picsum.photos/id/1060/800/400',
    category: 'Casa & Cozinha'
  },
  {
    id: '3',
    title: 'Kindle vale a pena em 2026? Análise Honesta',
    excerpt: 'Com tantos tablets no mercado, o leitor de livros digitais ainda tem espaço?',
    content: 'A resposta curta é sim. A tecnologia e-ink continua imbatível para leitura prolongada, não cansando a vista como as telas de LED/OLED. O novo Paperwhite trouxe melhorias significativas na velocidade de resposta, tornando a experiência quase indistinguível do papel real, com a vantagem de carregar uma biblioteca inteira...',
    author: 'Edvan Gonçalves',
    date: '20 Jan 2026',
    image: 'https://picsum.photos/id/367/800/400',
    category: 'Análises'
  }
];
