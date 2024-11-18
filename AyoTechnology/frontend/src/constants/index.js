import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Características",
      url: "#features",
    },
    {
      id: "1",
      title: "Preços",
      url: "#pricing",
    },
    {
      id: "2",
      title: "Como usar",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Planejamento",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "Nova conta",
      url: "",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Entrar",
      url: "/login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Geração de foto",
    "Melhoramento de foto",
    "Integração perfeita",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Reconhecimento de voz",
      text: "Permita que o chatbot entenda e responda aos comandos de voz, facilitando a interação dos usuários com o aplicativo com as mãos livres.",
      date: "May 2023",
      status: "feito",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Gameficação",
      text: "Adicione elementos semelhantes a jogos, como emblemas ou placares, para incentivar os usuários a interagir com o chatbot com mais frequência.",
      date: "May 2023",
      status: "Em progresso",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Chat customizado",
      text: "Permitir que os usuários personalizem a aparência e o comportamento do chatbot, tornando-o mais envolvente e divertido de interagir.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Integração de APIs",
      text: "Permita que o chatbot acesse fontes de dados externas, como APIs meteorológicas ou APIs de notícias, para fornecer recomendações mais relevantes.",
      date: "May 2023",
      status: "Em progresso",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "Com automação inteligente e segurança de alto nível, é a solução perfeita para equipes que buscam trabalhar de maneira mais inteligente.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Integração perfeita",
      text: collabText,
    },
    {
      id: "1",
      title: "Automação inteligente",
    },
    {
      id: "2",
      title: "Segurança de alto nível",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      id: "3",
      title: "Slack",
      icon: slack,
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Básico",
      description: "Chatbot de IA, recomendações personalizadas",
      price: "0",
      features: [
        "Um chatbot de IA que pode entender suas dúvidas",
        "Recomendações personalizadas com base nas suas preferências",
        "Capacidade de explorar o aplicativo e seus recursos sem nenhum custo",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Chatbot de IA avançado, suporte prioritário, painel analítico",
      price: "9.99",
      features: [
        "Um chatbot de IA avançado que pode entender consultas complexas",
        "Um painel analítico para rastrear suas conversas",
        "Suporte prioritário para resolver problemas rapidamente",
      ],
    },
    {
      id: "2",
      title: "Empresarial",
      description: "Chatbot de IA personalizado, análises avançadas, conta dedicada",
      price: null,
      features: [
        "Um chatbot de IA que pode entender suas dúvidas",
        "Recomendações personalizadas com base nas suas preferências",
        "Capacidade de explorar o aplicativo e seus recursos sem nenhum custo",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "Pergunte qualquer coisa",
      text: "Permite que os usuários encontrem rapidamente respostas para suas perguntas sem precisar pesquisar em várias fontes.",
      backgroundUrl: "./src/assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Melhore todos os dias",
      text: "O aplicativo usa processamento de linguagem natural para entender as dúvidas dos usuários e fornecer respostas precisas e relevantes.",
      backgroundUrl: "./src/assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Conecte-se em qualquer lugar",
      text: "Conecte-se ao chatbot AI de qualquer lugar, em qualquer dispositivo, tornando-o mais acessível e conveniente.",
      backgroundUrl: "./src/assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Resposta rápidas",
      text: "Permite que os usuários encontrem rapidamente respostas para suas perguntas sem precisar pesquisar em várias fontes.",
      backgroundUrl: "./src/assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Pergunte qualquer coisa",
      text: "Permite que os usuários encontrem rapidamente respostas para suas perguntas sem precisar pesquisar em várias fontes.",
      backgroundUrl: "./src/assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Melhore todos os dias",
      text: "O aplicativo usa processamento de linguagem natural para entender as dúvidas dos usuários e fornecer respostas precisas e relevantes.",
      backgroundUrl: "./src/assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];