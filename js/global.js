/*
  =====================================================
  GLOBAL.JS
  Funções usadas em TODAS as páginas do site Non Sei Solo
  =====================================================

  Este arquivo controla:
  1. Menu mobile lateral;
  2. Tradução do site;
  3. Tradução de placeholders dos formulários;
  4. Salvamento do idioma escolhido no navegador.
*/


/*
  =====================================================
  MENU MOBILE LATERAL
  =====================================================
*/


/*
  Seleciona o botão do menu mobile.
  Esse botão tem a classe .menu-toggle no HTML.
*/
const menuToggle = document.querySelector(".menu-toggle");


/*
  Seleciona o menu principal.
  Esse menu tem a classe .main-nav no HTML.
*/
const mainNav = document.querySelector(".main-nav");


/*
  Verifica se o botão e o menu existem na página.
  Isso evita erro no console caso alguma página não tenha esses elementos.
*/
if (menuToggle && mainNav) {

  /*
    Garante que o menu comece fechado quando a página carregar.
  */
  mainNav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.innerHTML = "☰";
  menuToggle.setAttribute("aria-label", "Abrir menu");


  /*
    Ao clicar no botão, abre ou fecha o menu lateral.
  */
  menuToggle.addEventListener("click", function () {

    /*
      Alterna a classe .open no menu.
      Quando .open existe, o CSS mostra o menu.
      Quando .open não existe, o CSS esconde o menu.
    */
    mainNav.classList.toggle("open");


    /*
      Alterna a classe .menu-open no body.
      Essa classe serve para travar a rolagem do fundo quando o menu está aberto.
    */
    document.body.classList.toggle("menu-open");


    /*
      Troca o ícone do botão.
      Se o menu estiver aberto, mostra X.
      Se estiver fechado, mostra ☰.
    */
    if (mainNav.classList.contains("open")) {
      menuToggle.innerHTML = "×";
      menuToggle.setAttribute("aria-label", "Fechar menu");
    } else {
      menuToggle.innerHTML = "☰";
      menuToggle.setAttribute("aria-label", "Abrir menu");
    }
  });


  /*
    Fecha o menu quando o usuário clicar em algum link do menu.
    Isso melhora a navegação no celular.
  */
  const mobileMenuLinks = mainNav.querySelectorAll("a");

  mobileMenuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mainNav.classList.remove("open");
      document.body.classList.remove("menu-open");

      menuToggle.innerHTML = "☰";
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}


/*
  =====================================================
  TRADUÇÃO DO SITE
  =====================================================

  Cada chave representa um texto do HTML.
  Exemplo:

  HTML:
  <h2 data-i18n="heroText">Texto original</h2>

  JavaScript:
  heroText: "Texto traduzido"

  O data-i18n conecta o HTML ao JavaScript.
*/


const translations = {
  /*
    =====================================================
    ITALIANO - IDIOMA PRINCIPAL
    =====================================================
  */
  it: {
    siteSubtitle: "Progetto sociale di ascolto, cura e sostegno",

    navHome: "Inizio",
    navAbout: "Chi Siamo",
    navProjects: "Progetti",
    navHelp: "Come Aiutare",
    navVolunteer: "Volontariato",
    navTestimonials: "Testimonianze",
    navContact: "Contatti",

    heroLabel: "Progetto Sociale",
    heroText: "Un progetto nato per offrire ascolto, accoglienza e sostegno a persone e famiglie che attraversano momenti difficili.",
    heroButtonPrimary: "Scopri il progetto",
    heroButtonSecondary: "Come aiutare",

    missionLabel: "La nostra missione",
    missionTitle: "Accogliere, ascoltare e camminare insieme.",
    missionText: "Il progetto Non Sei Solo nasce per creare una rete di supporto umano, sociale e comunitario, offrendo presenza, cura e solidarietà.",

    cardListenTitle: "Ascolto",
    cardListenText: "Uno spazio sicuro per ascoltare, accogliere e orientare persone in momenti di difficoltà.",
    cardSupportTitle: "Sostegno",
    cardSupportText: "Azioni pratiche di supporto sociale per famiglie, giovani, anziani e persone vulnerabili.",
    cardCommunityTitle: "Comunità",
    cardCommunityText: "Rafforzamento dei legami attraverso incontri, progetti, volontariato e solidarietà.",

    aboutHeroLabel: "Chi Siamo",
    aboutHeroTitle: "Una presenza vicina a chi ha bisogno.",
    aboutHeroText: "Il progetto Non Sei Solo nasce dal desiderio di offrire ascolto, accoglienza e sostegno concreto alle persone e alle famiglie.",
    aboutIdentityLabel: "La nostra identità",
    aboutIdentityTitle: "Un progetto sociale fondato sull’ascolto e sulla solidarietà.",
    aboutIdentityTextOne: "Non Sei Solo è un progetto creato per raggiungere persone che vivono situazioni di solitudine, fragilità, difficoltà sociali o familiari.",
    aboutIdentityTextTwo: "Crediamo che ogni persona abbia valore e meriti accoglienza con rispetto, dignità e attenzione. Per questo, il nostro lavoro cerca di creare una rete di supporto umano, comunitario e solidale.",
    aboutIdentityTextThree: "Attraverso incontri, iniziative sociali, ascolto e azioni concrete, desideriamo essere una presenza reale per chi ha bisogno di cura, orientamento e speranza.",
    aboutValuesLabel: "I nostri valori",
    aboutValuesTitle: "Ciò che guida il nostro lavoro.",
    aboutValuesText: "Ogni azione del progetto nasce da principi che valorizzano la persona, l’ascolto e l’impegno verso il prossimo.",
    aboutValueOneTitle: "Accoglienza",
    aboutValueOneText: "Accogliere ogni persona con rispetto, empatia e cura, senza giudizi.",
    aboutValueTwoTitle: "Ascolto",
    aboutValueTwoText: "Creare uno spazio in cui le storie possano essere ascoltate con attenzione e sensibilità.",
    aboutValueThreeTitle: "Solidarietà",
    aboutValueThreeText: "Trasformare la compassione in azioni pratiche di supporto e servizio.",

    projectsHeroLabel: "Progetti",
    projectsHeroTitle: "Azioni concrete per servire persone e famiglie.",
    projectsHeroText: "I nostri progetti nascono per trasformare ascolto, solidarietà e presenza in cura reale per chi ha bisogno.",
    projectsIntroLabel: "Il nostro lavoro",
    projectsIntroTitle: "Ogni progetto nasce da una necessità reale.",
    projectsIntroText: "Non Sei Solo sviluppa azioni rivolte all’accoglienza, al supporto sociale, al rafforzamento comunitario e alla cura delle persone in situazione di vulnerabilità.",
    projectOneLabel: "Ascolto e accoglienza",
    projectOneTitle: "Spazio di ascolto",
    projectOneText: "Uno spazio sicuro per ascoltare persone che affrontano solitudine, conflitti familiari, ansia sociale o momenti di fragilità.",
    projectOneLink: "Scopri come sostenere",
    projectTwoLabel: "Sostegno familiare",
    projectTwoTitle: "Famiglie accompagnate",
    projectTwoText: "Azioni di cura, orientamento e supporto per famiglie che attraversano difficoltà sociali, emotive o economiche.",
    projectTwoLink: "Partecipare come volontario",
    projectThreeLabel: "Solidarietà pratica",
    projectThreeTitle: "Campagne di donazione",
    projectThreeText: "Campagne di raccolta di alimenti, vestiti, beni essenziali e supporto emergenziale per persone in necessità.",
    projectThreeLink: "Contribuire al progetto",
    projectsCtaLabel: "Unisciti a noi",
    projectsCtaTitle: "Ogni gesto di solidarietà può raggiungere una vita.",
    projectsCtaText: "Sostenendo, condividendo o partecipando come volontario, puoi far parte di questa missione.",
    projectsCtaButton: "Come Aiutare",

    helpHeroLabel: "Come Aiutare",
    helpHeroTitle: "Il tuo gesto può diventare sostegno per qualcuno.",
    helpHeroText: "Ci sono molti modi per far parte di questa missione: aiutare, condividere, servire o contribuire con risorse.",
    helpIntroLabel: "Partecipa alla missione",
    helpIntroTitle: "Aiutare significa trasformare la cura in azione.",
    helpIntroText: "Ogni contributo, piccolo o grande, aiuta il progetto Non Sei Solo a raggiungere persone e famiglie che hanno bisogno di supporto.",
    helpCardOneNumber: "01",
    helpCardOneTitle: "Donazioni",
    helpCardOneText: "Contribuisci con alimenti, vestiti, beni essenziali o supporto finanziario per rafforzare le azioni sociali del progetto.",
    helpCardOneLink: "Parlare di donazioni",
    helpCardTwoNumber: "02",
    helpCardTwoTitle: "Volontariato",
    helpCardTwoText: "Dona il tuo tempo, le tue capacità e la tua presenza per aiutare in incontri, campagne, visite e azioni comunitarie.",
    helpCardTwoLink: "Diventare volontario",
    helpCardThreeNumber: "03",
    helpCardThreeTitle: "Divulgazione",
    helpCardThreeText: "Condividi il progetto con amici, familiari e social media. A volte una semplice condivisione raggiunge chi ne ha più bisogno.",
    helpCardThreeLink: "Entrare in contatto",
    helpHighlightLabel: "Solidarietà pratica",
    helpHighlightTitle: "Aiutaci a mantenere viva questa rete di supporto.",
    helpHighlightText: "Non Sei Solo esiste per essere vicino a chi si sente solo. Con il tuo aiuto possiamo ampliare questa cura e raggiungere più vite.",
    helpHighlightButtonPrimary: "Voglio contribuire",
    helpHighlightButtonSecondary: "Voglio servire",

    volunteerHeroLabel: "Volontariato",
    volunteerHeroTitle: "Servire con il cuore è anche un modo di amare.",
    volunteerHeroText: "Il volontariato è una delle forze del progetto Non Sei Solo. Ogni persona può contribuire con il proprio tempo, la propria presenza e le proprie capacità.",
    volunteerIntroLabel: "Diventa volontario",
    volunteerIntroTitle: "Puoi far parte di questa missione.",
    volunteerIntroTextOne: "Essere volontario nel Non Sei Solo significa essere disponibile ad ascoltare, accogliere, sostenere e camminare accanto a persone che affrontano momenti difficili.",
    volunteerIntroTextTwo: "Non è necessario avere tutto pronto o saper fare tutto. La cosa più importante è avere disponibilità a servire con responsabilità, rispetto ed empatia.",
    volunteerIntroButton: "Voglio essere volontario",
    volunteerAreasLabel: "Dove aiutare",
    volunteerAreasTitle: "Esistono diversi modi per servire.",
    volunteerAreasText: "Ogni volontario può contribuire secondo i propri doni, la propria disponibilità e la propria esperienza.",
    volunteerCardOneTitle: "Accoglienza",
    volunteerCardOneText: "Sostenere le persone che arrivano al progetto, offrendo ascolto, accoglienza e orientamento iniziale.",
    volunteerCardTwoTitle: "Campagne sociali",
    volunteerCardTwoText: "Aiutare nell’organizzazione di raccolte, distribuzione di beni e azioni comunitarie.",
    volunteerCardThreeTitle: "Comunicazione",
    volunteerCardThreeText: "Contribuire con foto, video, social media, divulgazione e produzione di contenuti del progetto.",
    volunteerCardFourTitle: "Supporto negli eventi",
    volunteerCardFourText: "Partecipare all’organizzazione, all’accoglienza e al supporto in incontri, conferenze e attività sociali.",
    volunteerCtaLabel: "Fai parte",
    volunteerCtaTitle: "Una vita può essere raggiunta attraverso la tua disponibilità.",
    volunteerCtaText: "Se desideri contribuire al progetto, entra in contatto con noi e conosci le possibilità di partecipazione.",
    volunteerCtaButton: "Entrare in contatto",

    testimonialsHeroLabel: "Testimonianze",
    testimonialsHeroTitle: "Storie che mostrano il valore di non camminare da soli.",
    testimonialsHeroText: "Ogni storia rappresenta una vita raggiunta attraverso l’ascolto, la presenza, la cura e la solidarietà.",
    testimonialsIntroLabel: "Voci e storie",
    testimonialsIntroTitle: "Quando la cura incontra un bisogno, nasce la speranza.",
    testimonialsIntroText: "Le testimonianze qui sotto sono esempi di come il progetto può raggiungere vite, famiglie e comunità.",
    testimonialOneText: "Ho trovato nel progetto un luogo in cui sono stato ascoltato con rispetto. La presenza di persone disposte ad aiutare mi ha dato forza per continuare.",
    testimonialOneName: "Persona accolta",
    testimonialOneDescription: "Testimonianza di accoglienza",
    testimonialTwoText: "In un momento difficile per la mia famiglia, abbiamo ricevuto supporto, orientamento e cura. Piccoli gesti hanno fatto una grande differenza.",
    testimonialTwoName: "Famiglia assistita",
    testimonialTwoDescription: "Supporto sociale e familiare",
    testimonialThreeText: "Servire come volontario mi ha mostrato che la solidarietà non è solo donare qualcosa, ma essere presenti nella vita di qualcuno.",
    testimonialThreeName: "Volontario",
    testimonialThreeDescription: "Esperienza di servizio",
    testimonialsCtaLabel: "La tua storia conta",
    testimonialsCtaTitle: "Anche tu puoi far parte di questa trasformazione.",
    testimonialsCtaText: "Ricevendo supporto, indicando qualcuno o partecipando come volontario, anche la tua storia è importante.",
    testimonialsCtaButton: "Entrare in contatto",

    contactHeroLabel: "Contatti",
    contactHeroTitle: "Parla con noi. Non devi camminare da solo.",
    contactHeroText: "Entra in contatto per chiedere supporto, offrire aiuto, partecipare come volontario o conoscere meglio il progetto.",
    contactInfoLabel: "Parla con noi",
    contactInfoTitle: "Siamo pronti ad ascoltarti.",
    contactInfoText: "Non Sei Solo è uno spazio di accoglienza, supporto e ascolto. Usa i canali qui sotto per parlare con noi.",
    contactWhatsappTitle: "WhatsApp",
    contactEmailTitle: "E-mail",
    contactLocationTitle: "Località",
    contactLocationText: "Italia",
    contactSocialTitle: "Social media",
    contactFormNameLabel: "Nome",
    contactFormNamePlaceholder: "Il tuo nome",
    contactFormEmailLabel: "E-mail",
    contactFormEmailPlaceholder: "iltuoemail@email.com",
    contactFormSubjectLabel: "Oggetto",
    contactFormSubjectDefault: "Seleziona un’opzione",
    contactFormSubjectSupport: "Ho bisogno di supporto",
    contactFormSubjectDonation: "Voglio fare una donazione",
    contactFormSubjectVolunteer: "Voglio essere volontario",
    contactFormSubjectInfo: "Voglio maggiori informazioni",
    contactFormMessageLabel: "Messaggio",
    contactFormMessagePlaceholder: "Scrivi il tuo messaggio",
    contactFormButton: "Invia messaggio",
    contactCtaLabel: "Non sei solo",
    contactCtaTitle: "Una conversazione può essere il primo passo per ricominciare.",
    contactCtaText: "Entra in contatto con responsabilità, rispetto e libertà. Il tuo messaggio sarà ricevuto con attenzione.",

    footerRights: "© 2026 Non Sei Solo. Tutti i diritti riservati."
  },

  /*
    =====================================================
    PORTUGUÊS
    =====================================================
  */
  pt: {
    siteSubtitle: "Projeto social de escuta, cuidado e apoio",

    navHome: "Início",
    navAbout: "Quem Somos",
    navProjects: "Projetos",
    navHelp: "Como Ajudar",
    navVolunteer: "Voluntariado",
    navTestimonials: "Depoimentos",
    navContact: "Contato",

    heroLabel: "Projeto Social",
    heroText: "Um projeto criado para oferecer escuta, acolhimento e apoio a pessoas e famílias que enfrentam momentos difíceis.",
    heroButtonPrimary: "Conheça o projeto",
    heroButtonSecondary: "Como ajudar",

    missionLabel: "Nossa missão",
    missionTitle: "Acolher, ouvir e caminhar juntos.",
    missionText: "O projeto Non Sei Solo nasce para criar uma rede de apoio humano, social e comunitário, oferecendo presença, cuidado e solidariedade.",

    cardListenTitle: "Escuta",
    cardListenText: "Um espaço seguro para ouvir, acolher e orientar pessoas em momentos de dificuldade.",
    cardSupportTitle: "Apoio",
    cardSupportText: "Ações práticas de apoio social para famílias, jovens, idosos e pessoas vulneráveis.",
    cardCommunityTitle: "Comunidade",
    cardCommunityText: "Fortalecimento de vínculos por meio de encontros, projetos, voluntariado e solidariedade.",

    aboutHeroLabel: "Quem Somos",
    aboutHeroTitle: "Uma presença próxima de quem precisa.",
    aboutHeroText: "O projeto Non Sei Solo nasce do desejo de oferecer escuta, acolhimento e apoio concreto às pessoas e famílias.",
    aboutIdentityLabel: "Nossa identidade",
    aboutIdentityTitle: "Um projeto social fundamentado na escuta e na solidariedade.",
    aboutIdentityTextOne: "Non Sei Solo é um projeto criado para alcançar pessoas que vivem situações de solidão, fragilidade, dificuldades sociais ou familiares.",
    aboutIdentityTextTwo: "Acreditamos que cada pessoa tem valor e merece acolhimento com respeito, dignidade e atenção. Por isso, nosso trabalho busca criar uma rede de apoio humano, comunitário e solidário.",
    aboutIdentityTextThree: "Por meio de encontros, iniciativas sociais, escuta e ações concretas, desejamos ser uma presença real para quem precisa de cuidado, orientação e esperança.",
    aboutValuesLabel: "Nossos valores",
    aboutValuesTitle: "O que guia nosso trabalho.",
    aboutValuesText: "Cada ação do projeto nasce de princípios que valorizam a pessoa, a escuta e o compromisso com o próximo.",
    aboutValueOneTitle: "Acolhimento",
    aboutValueOneText: "Acolher cada pessoa com respeito, empatia e cuidado, sem julgamentos.",
    aboutValueTwoTitle: "Escuta",
    aboutValueTwoText: "Criar um espaço onde histórias possam ser ouvidas com atenção e sensibilidade.",
    aboutValueThreeTitle: "Solidariedade",
    aboutValueThreeText: "Transformar compaixão em ações práticas de apoio e serviço.",

    projectsHeroLabel: "Projetos",
    projectsHeroTitle: "Ações concretas para servir pessoas e famílias.",
    projectsHeroText: "Nossos projetos nascem para transformar escuta, solidariedade e presença em cuidado real para quem precisa.",
    projectsIntroLabel: "Nosso trabalho",
    projectsIntroTitle: "Cada projeto nasce de uma necessidade real.",
    projectsIntroText: "O Non Sei Solo desenvolve ações voltadas ao acolhimento, apoio social, fortalecimento comunitário e cuidado com pessoas em situação de vulnerabilidade.",
    projectOneLabel: "Escuta e acolhimento",
    projectOneTitle: "Espaço de escuta",
    projectOneText: "Um espaço seguro para ouvir pessoas que enfrentam solidão, conflitos familiares, ansiedade social ou momentos de fragilidade.",
    projectOneLink: "Saiba como apoiar",
    projectTwoLabel: "Apoio familiar",
    projectTwoTitle: "Famílias acompanhadas",
    projectTwoText: "Ações de cuidado, orientação e apoio para famílias que passam por dificuldades sociais, emocionais ou econômicas.",
    projectTwoLink: "Participar como voluntário",
    projectThreeLabel: "Solidariedade prática",
    projectThreeTitle: "Campanhas de doação",
    projectThreeText: "Campanhas de arrecadação de alimentos, roupas, itens essenciais e apoio emergencial para pessoas em necessidade.",
    projectThreeLink: "Contribuir com o projeto",
    projectsCtaLabel: "Junte-se a nós",
    projectsCtaTitle: "Cada gesto de solidariedade pode alcançar uma vida.",
    projectsCtaText: "Apoiando, divulgando ou participando como voluntário, você pode fazer parte desta missão.",
    projectsCtaButton: "Como Ajudar",

    helpHeroLabel: "Como Ajudar",
    helpHeroTitle: "Seu gesto pode se tornar apoio para alguém.",
    helpHeroText: "Existem muitas formas de fazer parte desta missão: ajudar, divulgar, servir ou contribuir com recursos.",
    helpIntroLabel: "Participe da missão",
    helpIntroTitle: "Ajudar é transformar cuidado em ação.",
    helpIntroText: "Cada contribuição, pequena ou grande, ajuda o projeto Non Sei Solo a alcançar pessoas e famílias que precisam de apoio.",
    helpCardOneNumber: "01",
    helpCardOneTitle: "Doações",
    helpCardOneText: "Contribua com alimentos, roupas, itens essenciais ou apoio financeiro para fortalecer as ações sociais do projeto.",
    helpCardOneLink: "Falar sobre doações",
    helpCardTwoNumber: "02",
    helpCardTwoTitle: "Voluntariado",
    helpCardTwoText: "Doe seu tempo, suas habilidades e sua presença para ajudar em encontros, campanhas, visitas e ações comunitárias.",
    helpCardTwoLink: "Ser voluntário",
    helpCardThreeNumber: "03",
    helpCardThreeTitle: "Divulgação",
    helpCardThreeText: "Compartilhe o projeto com amigos, familiares e redes sociais. Às vezes, uma simples divulgação alcança quem mais precisa.",
    helpCardThreeLink: "Entrar em contato",
    helpHighlightLabel: "Solidariedade prática",
    helpHighlightTitle: "Ajude-nos a manter viva esta rede de apoio.",
    helpHighlightText: "O Non Sei Solo existe para estar perto de quem se sente sozinho. Com sua ajuda, podemos ampliar esse cuidado e alcançar mais vidas.",
    helpHighlightButtonPrimary: "Quero contribuir",
    helpHighlightButtonSecondary: "Quero servir",

    volunteerHeroLabel: "Voluntariado",
    volunteerHeroTitle: "Servir com o coração também é uma forma de amar.",
    volunteerHeroText: "O voluntariado é uma das forças do projeto Non Sei Solo. Cada pessoa pode contribuir com seu tempo, presença e habilidades.",
    volunteerIntroLabel: "Torne-se voluntário",
    volunteerIntroTitle: "Você pode fazer parte desta missão.",
    volunteerIntroTextOne: "Ser voluntário no Non Sei Solo significa estar disponível para ouvir, acolher, apoiar e caminhar ao lado de pessoas que enfrentam momentos difíceis.",
    volunteerIntroTextTwo: "Não é necessário ter tudo pronto ou saber fazer tudo. O mais importante é ter disposição para servir com responsabilidade, respeito e empatia.",
    volunteerIntroButton: "Quero ser voluntário",
    volunteerAreasLabel: "Onde ajudar",
    volunteerAreasTitle: "Existem várias formas de servir.",
    volunteerAreasText: "Cada voluntário pode contribuir conforme seus dons, disponibilidade e experiência.",
    volunteerCardOneTitle: "Acolhimento",
    volunteerCardOneText: "Apoiar pessoas que chegam ao projeto, oferecendo escuta, recepção e orientação inicial.",
    volunteerCardTwoTitle: "Campanhas sociais",
    volunteerCardTwoText: "Ajudar na organização de arrecadações, distribuição de itens e ações comunitárias.",
    volunteerCardThreeTitle: "Comunicação",
    volunteerCardThreeText: "Contribuir com fotos, vídeos, redes sociais, divulgação e produção de conteúdo do projeto.",
    volunteerCardFourTitle: "Apoio em eventos",
    volunteerCardFourText: "Participar da organização, recepção e suporte em encontros, palestras e atividades sociais.",
    volunteerCtaLabel: "Faça parte",
    volunteerCtaTitle: "Uma vida pode ser alcançada através da sua disponibilidade.",
    volunteerCtaText: "Se você deseja contribuir com o projeto, entre em contato conosco e conheça as possibilidades de participação.",
    volunteerCtaButton: "Entrar em contato",

    testimonialsHeroLabel: "Depoimentos",
    testimonialsHeroTitle: "Histórias que mostram o valor de não caminhar sozinho.",
    testimonialsHeroText: "Cada história representa uma vida alcançada por meio da escuta, da presença, do cuidado e da solidariedade.",
    testimonialsIntroLabel: "Vozes e histórias",
    testimonialsIntroTitle: "Quando o cuidado encontra uma necessidade, nasce esperança.",
    testimonialsIntroText: "Os depoimentos abaixo são exemplos de como o projeto pode alcançar vidas, famílias e comunidades.",
    testimonialOneText: "Encontrei no projeto um lugar onde fui ouvido com respeito. A presença de pessoas dispostas a ajudar me trouxe força para continuar.",
    testimonialOneName: "Pessoa acolhida",
    testimonialOneDescription: "Testemunho de acolhimento",
    testimonialTwoText: "Em um momento difícil para minha família, recebemos apoio, orientação e cuidado. Pequenos gestos fizeram grande diferença.",
    testimonialTwoName: "Família assistida",
    testimonialTwoDescription: "Apoio social e familiar",
    testimonialThreeText: "Servir como voluntário me mostrou que solidariedade não é apenas doar algo, mas estar presente na vida de alguém.",
    testimonialThreeName: "Voluntário",
    testimonialThreeDescription: "Experiência de serviço",
    testimonialsCtaLabel: "Sua história importa",
    testimonialsCtaTitle: "Você também pode fazer parte dessa transformação.",
    testimonialsCtaText: "Recebendo apoio, indicando alguém ou participando como voluntário, sua história também importa.",
    testimonialsCtaButton: "Entrar em contato",

    contactHeroLabel: "Contato",
    contactHeroTitle: "Fale conosco. Você não precisa caminhar sozinho.",
    contactHeroText: "Entre em contato para pedir apoio, oferecer ajuda, participar como voluntário ou conhecer melhor o projeto.",
    contactInfoLabel: "Fale conosco",
    contactInfoTitle: "Estamos prontos para ouvir você.",
    contactInfoText: "O Non Sei Solo é um espaço de acolhimento, apoio e escuta. Use os canais abaixo para falar conosco.",
    contactWhatsappTitle: "WhatsApp",
    contactEmailTitle: "E-mail",
    contactLocationTitle: "Localização",
    contactLocationText: "Itália",
    contactSocialTitle: "Redes sociais",
    contactFormNameLabel: "Nome",
    contactFormNamePlaceholder: "Seu nome",
    contactFormEmailLabel: "E-mail",
    contactFormEmailPlaceholder: "seuemail@email.com",
    contactFormSubjectLabel: "Assunto",
    contactFormSubjectDefault: "Selecione uma opção",
    contactFormSubjectSupport: "Preciso de apoio",
    contactFormSubjectDonation: "Quero fazer uma doação",
    contactFormSubjectVolunteer: "Quero ser voluntário",
    contactFormSubjectInfo: "Quero mais informações",
    contactFormMessageLabel: "Mensagem",
    contactFormMessagePlaceholder: "Escreva sua mensagem",
    contactFormButton: "Enviar mensagem",
    contactCtaLabel: "Você não está sozinho",
    contactCtaTitle: "Uma conversa pode ser o primeiro passo para recomeçar.",
    contactCtaText: "Entre em contato com responsabilidade, respeito e liberdade. Sua mensagem será recebida com atenção.",

    footerRights: "© 2026 Non Sei Solo. Todos os direitos reservados."
  },

  /*
    =====================================================
    INGLÊS
    =====================================================
  */
  en: {
    siteSubtitle: "Social project of listening, care and support",

    navHome: "Home",
    navAbout: "About Us",
    navProjects: "Projects",
    navHelp: "How to Help",
    navVolunteer: "Volunteering",
    navTestimonials: "Testimonials",
    navContact: "Contact",

    heroLabel: "Social Project",
    heroText: "A project created to offer listening, welcome and support to people and families going through difficult times.",
    heroButtonPrimary: "Discover the project",
    heroButtonSecondary: "How to help",

    missionLabel: "Our mission",
    missionTitle: "Welcoming, listening and walking together.",
    missionText: "The Non Sei Solo project was created to build a network of human, social and community support, offering presence, care and solidarity.",

    cardListenTitle: "Listening",
    cardListenText: "A safe space to listen, welcome and guide people through difficult moments.",
    cardSupportTitle: "Support",
    cardSupportText: "Practical social support actions for families, young people, elderly people and vulnerable individuals.",
    cardCommunityTitle: "Community",
    cardCommunityText: "Strengthening bonds through meetings, projects, volunteering and solidarity.",

    aboutHeroLabel: "About Us",
    aboutHeroTitle: "A presence close to those in need.",
    aboutHeroText: "The Non Sei Solo project was born from the desire to offer listening, welcome and concrete support to people and families.",
    aboutIdentityLabel: "Our identity",
    aboutIdentityTitle: "A social project founded on listening and solidarity.",
    aboutIdentityTextOne: "Non Sei Solo is a project created to reach people living situations of loneliness, fragility, social or family difficulties.",
    aboutIdentityTextTwo: "We believe every person has value and deserves to be welcomed with respect, dignity and attention. For this reason, our work seeks to create a network of human, community and solidarity support.",
    aboutIdentityTextThree: "Through meetings, social initiatives, listening and concrete actions, we want to be a real presence for those who need care, guidance and hope.",
    aboutValuesLabel: "Our values",
    aboutValuesTitle: "What guides our work.",
    aboutValuesText: "Every action of the project is born from principles that value the person, listening and commitment to others.",
    aboutValueOneTitle: "Welcome",
    aboutValueOneText: "Welcoming every person with respect, empathy and care, without judgment.",
    aboutValueTwoTitle: "Listening",
    aboutValueTwoText: "Creating a space where stories can be heard with attention and sensitivity.",
    aboutValueThreeTitle: "Solidarity",
    aboutValueThreeText: "Transforming compassion into practical actions of support and service.",

    projectsHeroLabel: "Projects",
    projectsHeroTitle: "Concrete actions to serve people and families.",
    projectsHeroText: "Our projects are created to transform listening, solidarity and presence into real care for those in need.",
    projectsIntroLabel: "Our work",
    projectsIntroTitle: "Every project is born from a real need.",
    projectsIntroText: "Non Sei Solo develops actions focused on welcome, social support, community strengthening and care for people in vulnerable situations.",
    projectOneLabel: "Listening and welcome",
    projectOneTitle: "Listening space",
    projectOneText: "A safe space to listen to people facing loneliness, family conflicts, social anxiety or moments of fragility.",
    projectOneLink: "Learn how to support",
    projectTwoLabel: "Family support",
    projectTwoTitle: "Supported families",
    projectTwoText: "Care, guidance and support actions for families going through social, emotional or economic difficulties.",
    projectTwoLink: "Join as a volunteer",
    projectThreeLabel: "Practical solidarity",
    projectThreeTitle: "Donation campaigns",
    projectThreeText: "Campaigns to collect food, clothing, essential items and emergency support for people in need.",
    projectThreeLink: "Contribute to the project",
    projectsCtaLabel: "Join us",
    projectsCtaTitle: "Every gesture of solidarity can reach a life.",
    projectsCtaText: "By supporting, sharing or participating as a volunteer, you can be part of this mission.",
    projectsCtaButton: "How to Help",

    helpHeroLabel: "How to Help",
    helpHeroTitle: "Your gesture can become support for someone.",
    helpHeroText: "There are many ways to be part of this mission: helping, sharing, serving or contributing resources.",
    helpIntroLabel: "Join the mission",
    helpIntroTitle: "Helping means turning care into action.",
    helpIntroText: "Every contribution, small or large, helps the Non Sei Solo project reach people and families who need support.",
    helpCardOneNumber: "01",
    helpCardOneTitle: "Donations",
    helpCardOneText: "Contribute food, clothing, essential items or financial support to strengthen the project’s social actions.",
    helpCardOneLink: "Talk about donations",
    helpCardTwoNumber: "02",
    helpCardTwoTitle: "Volunteering",
    helpCardTwoText: "Donate your time, skills and presence to help with meetings, campaigns, visits and community actions.",
    helpCardTwoLink: "Become a volunteer",
    helpCardThreeNumber: "03",
    helpCardThreeTitle: "Sharing",
    helpCardThreeText: "Share the project with friends, family and social media. Sometimes a simple share reaches those who need it most.",
    helpCardThreeLink: "Get in touch",
    helpHighlightLabel: "Practical solidarity",
    helpHighlightTitle: "Help us keep this support network alive.",
    helpHighlightText: "Non Sei Solo exists to be close to those who feel alone. With your help, we can expand this care and reach more lives.",
    helpHighlightButtonPrimary: "I want to contribute",
    helpHighlightButtonSecondary: "I want to serve",

    volunteerHeroLabel: "Volunteering",
    volunteerHeroTitle: "Serving with the heart is also a way of loving.",
    volunteerHeroText: "Volunteering is one of the strengths of the Non Sei Solo project. Each person can contribute with time, presence and skills.",
    volunteerIntroLabel: "Become a volunteer",
    volunteerIntroTitle: "You can be part of this mission.",
    volunteerIntroTextOne: "Being a volunteer at Non Sei Solo means being available to listen, welcome, support and walk beside people facing difficult moments.",
    volunteerIntroTextTwo: "You do not need to have everything ready or know how to do everything. The most important thing is the willingness to serve with responsibility, respect and empathy.",
    volunteerIntroButton: "I want to volunteer",
    volunteerAreasLabel: "Where to help",
    volunteerAreasTitle: "There are many ways to serve.",
    volunteerAreasText: "Each volunteer can contribute according to their gifts, availability and experience.",
    volunteerCardOneTitle: "Welcome",
    volunteerCardOneText: "Supporting people who arrive at the project by offering listening, welcome and initial guidance.",
    volunteerCardTwoTitle: "Social campaigns",
    volunteerCardTwoText: "Helping organize collections, distribute items and support community actions.",
    volunteerCardThreeTitle: "Communication",
    volunteerCardThreeText: "Contributing with photos, videos, social media, outreach and project content production.",
    volunteerCardFourTitle: "Event support",
    volunteerCardFourText: "Participating in organization, reception and support during meetings, lectures and social activities.",
    volunteerCtaLabel: "Be part",
    volunteerCtaTitle: "A life can be reached through your availability.",
    volunteerCtaText: "If you want to contribute to the project, get in touch with us and discover the possibilities of participation.",
    volunteerCtaButton: "Get in touch",

    testimonialsHeroLabel: "Testimonials",
    testimonialsHeroTitle: "Stories that show the value of not walking alone.",
    testimonialsHeroText: "Each story represents a life reached through listening, presence, care and solidarity.",
    testimonialsIntroLabel: "Voices and stories",
    testimonialsIntroTitle: "When care meets a need, hope is born.",
    testimonialsIntroText: "The testimonials below are examples of how the project can reach lives, families and communities.",
    testimonialOneText: "I found in the project a place where I was listened to with respect. The presence of people willing to help gave me strength to continue.",
    testimonialOneName: "Welcomed person",
    testimonialOneDescription: "Welcome testimony",
    testimonialTwoText: "In a difficult moment for my family, we received support, guidance and care. Small gestures made a great difference.",
    testimonialTwoName: "Supported family",
    testimonialTwoDescription: "Social and family support",
    testimonialThreeText: "Serving as a volunteer showed me that solidarity is not only giving something, but being present in someone’s life.",
    testimonialThreeName: "Volunteer",
    testimonialThreeDescription: "Service experience",
    testimonialsCtaLabel: "Your story matters",
    testimonialsCtaTitle: "You can also be part of this transformation.",
    testimonialsCtaText: "By receiving support, referring someone or participating as a volunteer, your story also matters.",
    testimonialsCtaButton: "Get in touch",

    contactHeroLabel: "Contact",
    contactHeroTitle: "Talk to us. You do not have to walk alone.",
    contactHeroText: "Get in touch to ask for support, offer help, participate as a volunteer or learn more about the project.",
    contactInfoLabel: "Talk to us",
    contactInfoTitle: "We are ready to listen to you.",
    contactInfoText: "Non Sei Solo is a space of welcome, support and listening. Use the channels below to talk to us.",
    contactWhatsappTitle: "WhatsApp",
    contactEmailTitle: "E-mail",
    contactLocationTitle: "Location",
    contactLocationText: "Italy",
    contactSocialTitle: "Social media",
    contactFormNameLabel: "Name",
    contactFormNamePlaceholder: "Your name",
    contactFormEmailLabel: "E-mail",
    contactFormEmailPlaceholder: "youremail@email.com",
    contactFormSubjectLabel: "Subject",
    contactFormSubjectDefault: "Select an option",
    contactFormSubjectSupport: "I need support",
    contactFormSubjectDonation: "I want to make a donation",
    contactFormSubjectVolunteer: "I want to volunteer",
    contactFormSubjectInfo: "I want more information",
    contactFormMessageLabel: "Message",
    contactFormMessagePlaceholder: "Write your message",
    contactFormButton: "Send message",
    contactCtaLabel: "You are not alone",
    contactCtaTitle: "A conversation can be the first step to starting again.",
    contactCtaText: "Get in touch with responsibility, respect and freedom. Your message will be received with attention.",

    footerRights: "© 2026 Non Sei Solo. All rights reserved."
  },

  /*
    =====================================================
    ALEMÃO
    =====================================================
  */
  de: {
    siteSubtitle: "Soziales Projekt für Zuhören, Fürsorge und Unterstützung",

    navHome: "Startseite",
    navAbout: "Über uns",
    navProjects: "Projekte",
    navHelp: "Helfen",
    navVolunteer: "Freiwilligenarbeit",
    navTestimonials: "Erfahrungen",
    navContact: "Kontakt",

    heroLabel: "Soziales Projekt",
    heroText: "Ein Projekt, das Menschen und Familien in schwierigen Zeiten Zuhören, Aufnahme und Unterstützung bietet.",
    heroButtonPrimary: "Projekt entdecken",
    heroButtonSecondary: "Wie helfen",

    missionLabel: "Unsere Mission",
    missionTitle: "Aufnehmen, zuhören und gemeinsam gehen.",
    missionText: "Das Projekt Non Sei Solo wurde geschaffen, um ein Netzwerk menschlicher, sozialer und gemeinschaftlicher Unterstützung aufzubauen.",

    cardListenTitle: "Zuhören",
    cardListenText: "Ein sicherer Raum, um Menschen in schwierigen Momenten zuzuhören, sie aufzunehmen und zu begleiten.",
    cardSupportTitle: "Unterstützung",
    cardSupportText: "Praktische soziale Unterstützung für Familien, Jugendliche, ältere Menschen und verletzliche Personen.",
    cardCommunityTitle: "Gemeinschaft",
    cardCommunityText: "Stärkung von Beziehungen durch Treffen, Projekte, Freiwilligenarbeit und Solidarität.",

    aboutHeroLabel: "Über uns",
    aboutHeroTitle: "Eine nahe Präsenz für Menschen in Not.",
    aboutHeroText: "Das Projekt Non Sei Solo entstand aus dem Wunsch, Menschen und Familien Zuhören, Aufnahme und konkrete Unterstützung zu bieten.",
    aboutIdentityLabel: "Unsere Identität",
    aboutIdentityTitle: "Ein soziales Projekt, gegründet auf Zuhören und Solidarität.",
    aboutIdentityTextOne: "Non Sei Solo ist ein Projekt, das Menschen erreichen möchte, die Einsamkeit, Verletzlichkeit, soziale oder familiäre Schwierigkeiten erleben.",
    aboutIdentityTextTwo: "Wir glauben, dass jeder Mensch Wert hat und mit Respekt, Würde und Aufmerksamkeit aufgenommen werden verdient. Deshalb versucht unsere Arbeit, ein Netzwerk menschlicher, gemeinschaftlicher und solidarischer Unterstützung zu schaffen.",
    aboutIdentityTextThree: "Durch Treffen, soziale Initiativen, Zuhören und konkrete Aktionen möchten wir eine echte Präsenz für diejenigen sein, die Fürsorge, Orientierung und Hoffnung brauchen.",
    aboutValuesLabel: "Unsere Werte",
    aboutValuesTitle: "Was unsere Arbeit leitet.",
    aboutValuesText: "Jede Aktion des Projekts entsteht aus Prinzipien, die den Menschen, das Zuhören und das Engagement für andere wertschätzen.",
    aboutValueOneTitle: "Aufnahme",
    aboutValueOneText: "Jeden Menschen mit Respekt, Empathie und Fürsorge aufnehmen, ohne zu urteilen.",
    aboutValueTwoTitle: "Zuhören",
    aboutValueTwoText: "Einen Raum schaffen, in dem Geschichten mit Aufmerksamkeit und Sensibilität gehört werden können.",
    aboutValueThreeTitle: "Solidarität",
    aboutValueThreeText: "Mitgefühl in praktische Aktionen der Unterstützung und des Dienstes verwandeln.",

    projectsHeroLabel: "Projekte",
    projectsHeroTitle: "Konkrete Aktionen, um Menschen und Familien zu dienen.",
    projectsHeroText: "Unsere Projekte entstehen, um Zuhören, Solidarität und Präsenz in echte Fürsorge für Bedürftige zu verwandeln.",
    projectsIntroLabel: "Unsere Arbeit",
    projectsIntroTitle: "Jedes Projekt entsteht aus einem echten Bedarf.",
    projectsIntroText: "Non Sei Solo entwickelt Aktionen für Aufnahme, soziale Unterstützung, Stärkung der Gemeinschaft und Fürsorge für Menschen in verletzlichen Situationen.",
    projectOneLabel: "Zuhören und Aufnahme",
    projectOneTitle: "Raum des Zuhörens",
    projectOneText: "Ein sicherer Raum, um Menschen zuzuhören, die Einsamkeit, familiäre Konflikte, soziale Angst oder Momente der Verletzlichkeit erleben.",
    projectOneLink: "Erfahren, wie unterstützen",
    projectTwoLabel: "Familienunterstützung",
    projectTwoTitle: "Begleitete Familien",
    projectTwoText: "Aktionen der Fürsorge, Orientierung und Unterstützung für Familien in sozialen, emotionalen oder wirtschaftlichen Schwierigkeiten.",
    projectTwoLink: "Als Freiwilliger teilnehmen",
    projectThreeLabel: "Praktische Solidarität",
    projectThreeTitle: "Spendenkampagnen",
    projectThreeText: "Kampagnen zur Sammlung von Lebensmitteln, Kleidung, wichtigen Gütern und Notfallhilfe für Menschen in Not.",
    projectThreeLink: "Zum Projekt beitragen",
    projectsCtaLabel: "Mach mit",
    projectsCtaTitle: "Jede Geste der Solidarität kann ein Leben erreichen.",
    projectsCtaText: "Durch Unterstützung, Teilen oder Teilnahme als Freiwilliger kannst du Teil dieser Mission sein.",
    projectsCtaButton: "Wie helfen",

    helpHeroLabel: "Wie helfen",
    helpHeroTitle: "Deine Geste kann für jemanden Unterstützung werden.",
    helpHeroText: "Es gibt viele Möglichkeiten, Teil dieser Mission zu sein: helfen, teilen, dienen oder Ressourcen beitragen.",
    helpIntroLabel: "Nimm an der Mission teil",
    helpIntroTitle: "Helfen bedeutet, Fürsorge in Aktion zu verwandeln.",
    helpIntroText: "Jeder Beitrag, klein oder groß, hilft dem Projekt Non Sei Solo, Menschen und Familien zu erreichen, die Unterstützung brauchen.",
    helpCardOneNumber: "01",
    helpCardOneTitle: "Spenden",
    helpCardOneText: "Trage mit Lebensmitteln, Kleidung, wichtigen Gütern oder finanzieller Unterstützung dazu bei, die sozialen Aktionen des Projekts zu stärken.",
    helpCardOneLink: "Über Spenden sprechen",
    helpCardTwoNumber: "02",
    helpCardTwoTitle: "Freiwilligenarbeit",
    helpCardTwoText: "Schenke deine Zeit, Fähigkeiten und Präsenz, um bei Treffen, Kampagnen, Besuchen und Gemeinschaftsaktionen zu helfen.",
    helpCardTwoLink: "Freiwilliger werden",
    helpCardThreeNumber: "03",
    helpCardThreeTitle: "Verbreitung",
    helpCardThreeText: "Teile das Projekt mit Freunden, Familie und in sozialen Medien. Manchmal erreicht einfaches Teilen diejenigen, die es am meisten brauchen.",
    helpCardThreeLink: "Kontakt aufnehmen",
    helpHighlightLabel: "Praktische Solidarität",
    helpHighlightTitle: "Hilf uns, dieses Unterstützungsnetzwerk lebendig zu halten.",
    helpHighlightText: "Non Sei Solo existiert, um denen nahe zu sein, die sich allein fühlen. Mit deiner Hilfe können wir diese Fürsorge erweitern und mehr Leben erreichen.",
    helpHighlightButtonPrimary: "Ich möchte beitragen",
    helpHighlightButtonSecondary: "Ich möchte dienen",

    volunteerHeroLabel: "Freiwilligenarbeit",
    volunteerHeroTitle: "Mit dem Herzen zu dienen ist auch eine Art zu lieben.",
    volunteerHeroText: "Freiwilligenarbeit ist eine der Stärken des Projekts Non Sei Solo. Jeder Mensch kann mit Zeit, Präsenz und Fähigkeiten beitragen.",
    volunteerIntroLabel: "Freiwilliger werden",
    volunteerIntroTitle: "Du kannst Teil dieser Mission sein.",
    volunteerIntroTextOne: "Freiwilliger bei Non Sei Solo zu sein bedeutet, bereit zu sein zuzuhören, aufzunehmen, zu unterstützen und Menschen in schwierigen Momenten zu begleiten.",
    volunteerIntroTextTwo: "Du musst nicht alles bereit haben oder alles können. Das Wichtigste ist die Bereitschaft, mit Verantwortung, Respekt und Empathie zu dienen.",
    volunteerIntroButton: "Ich möchte freiwillig helfen",
    volunteerAreasLabel: "Wo helfen",
    volunteerAreasTitle: "Es gibt viele Arten zu dienen.",
    volunteerAreasText: "Jeder Freiwillige kann entsprechend seinen Gaben, seiner Verfügbarkeit und seiner Erfahrung beitragen.",
    volunteerCardOneTitle: "Aufnahme",
    volunteerCardOneText: "Menschen unterstützen, die zum Projekt kommen, indem man Zuhören, Aufnahme und erste Orientierung anbietet.",
    volunteerCardTwoTitle: "Soziale Kampagnen",
    volunteerCardTwoText: "Bei der Organisation von Sammlungen, Verteilung von Gütern und Gemeinschaftsaktionen helfen.",
    volunteerCardThreeTitle: "Kommunikation",
    volunteerCardThreeText: "Mit Fotos, Videos, sozialen Medien, Verbreitung und Inhaltserstellung für das Projekt beitragen.",
    volunteerCardFourTitle: "Eventunterstützung",
    volunteerCardFourText: "Bei Organisation, Empfang und Unterstützung in Treffen, Vorträgen und sozialen Aktivitäten teilnehmen.",
    volunteerCtaLabel: "Sei dabei",
    volunteerCtaTitle: "Ein Leben kann durch deine Verfügbarkeit erreicht werden.",
    volunteerCtaText: "Wenn du zum Projekt beitragen möchtest, kontaktiere uns und entdecke die Möglichkeiten der Teilnahme.",
    volunteerCtaButton: "Kontakt aufnehmen",

    testimonialsHeroLabel: "Erfahrungen",
    testimonialsHeroTitle: "Geschichten, die zeigen, wie wertvoll es ist, nicht allein zu gehen.",
    testimonialsHeroText: "Jede Geschichte steht für ein Leben, das durch Zuhören, Präsenz, Fürsorge und Solidarität erreicht wurde.",
    testimonialsIntroLabel: "Stimmen und Geschichten",
    testimonialsIntroTitle: "Wenn Fürsorge auf Bedarf trifft, entsteht Hoffnung.",
    testimonialsIntroText: "Die folgenden Erfahrungen sind Beispiele dafür, wie das Projekt Leben, Familien und Gemeinschaften erreichen kann.",
    testimonialOneText: "Ich fand im Projekt einen Ort, an dem mir mit Respekt zugehört wurde. Die Präsenz hilfsbereiter Menschen gab mir Kraft weiterzugehen.",
    testimonialOneName: "Aufgenommene Person",
    testimonialOneDescription: "Erfahrung der Aufnahme",
    testimonialTwoText: "In einem schwierigen Moment für meine Familie erhielten wir Unterstützung, Orientierung und Fürsorge. Kleine Gesten machten einen großen Unterschied.",
    testimonialTwoName: "Unterstützte Familie",
    testimonialTwoDescription: "Soziale und familiäre Unterstützung",
    testimonialThreeText: "Als Freiwilliger zu dienen zeigte mir, dass Solidarität nicht nur bedeutet, etwas zu geben, sondern im Leben eines Menschen präsent zu sein.",
    testimonialThreeName: "Freiwilliger",
    testimonialThreeDescription: "Diensterfahrung",
    testimonialsCtaLabel: "Deine Geschichte zählt",
    testimonialsCtaTitle: "Auch du kannst Teil dieser Veränderung sein.",
    testimonialsCtaText: "Indem du Unterstützung erhältst, jemanden empfiehlst oder als Freiwilliger teilnimmst, zählt auch deine Geschichte.",
    testimonialsCtaButton: "Kontakt aufnehmen",

    contactHeroLabel: "Kontakt",
    contactHeroTitle: "Sprich mit uns. Du musst nicht allein gehen.",
    contactHeroText: "Nimm Kontakt auf, um Unterstützung zu bitten, Hilfe anzubieten, als Freiwilliger teilzunehmen oder mehr über das Projekt zu erfahren.",
    contactInfoLabel: "Sprich mit uns",
    contactInfoTitle: "Wir sind bereit, dir zuzuhören.",
    contactInfoText: "Non Sei Solo ist ein Raum der Aufnahme, Unterstützung und des Zuhörens. Nutze die folgenden Kanäle, um mit uns zu sprechen.",
    contactWhatsappTitle: "WhatsApp",
    contactEmailTitle: "E-Mail",
    contactLocationTitle: "Standort",
    contactLocationText: "Italien",
    contactSocialTitle: "Soziale Medien",
    contactFormNameLabel: "Name",
    contactFormNamePlaceholder: "Dein Name",
    contactFormEmailLabel: "E-Mail",
    contactFormEmailPlaceholder: "deineemail@email.com",
    contactFormSubjectLabel: "Betreff",
    contactFormSubjectDefault: "Option auswählen",
    contactFormSubjectSupport: "Ich brauche Unterstützung",
    contactFormSubjectDonation: "Ich möchte spenden",
    contactFormSubjectVolunteer: "Ich möchte freiwillig helfen",
    contactFormSubjectInfo: "Ich möchte mehr Informationen",
    contactFormMessageLabel: "Nachricht",
    contactFormMessagePlaceholder: "Schreibe deine Nachricht",
    contactFormButton: "Nachricht senden",
    contactCtaLabel: "Du bist nicht allein",
    contactCtaTitle: "Ein Gespräch kann der erste Schritt zu einem Neuanfang sein.",
    contactCtaText: "Nimm mit Verantwortung, Respekt und Freiheit Kontakt auf. Deine Nachricht wird aufmerksam empfangen.",

    footerRights: "© 2026 Non Sei Solo. Alle Rechte vorbehalten."
  }
};


/*
  =====================================================
  FUNÇÃO PARA APLICAR O IDIOMA
  =====================================================
*/


/*
  Seleciona todos os botões de idioma.
*/
const languageButtons = document.querySelectorAll(".language-btn");


/*
  Esta função recebe o idioma escolhido e troca os textos da página.
*/
function setLanguage(language) {

  /*
    Seleciona todos os elementos que têm data-i18n.
    Esses são os textos normais: h1, h2, p, span, a, button etc.
  */
  const elementsToTranslate = document.querySelectorAll("[data-i18n]");

  elementsToTranslate.forEach(function (element) {

    /*
      Pega a chave do elemento.
      Exemplo:
      data-i18n="navHome" vira "navHome".
    */
    const translationKey = element.getAttribute("data-i18n");

    /*
      Se existir tradução para essa chave no idioma escolhido,
      troca o texto do elemento.
    */
    if (translations[language] && translations[language][translationKey]) {
      element.textContent = translations[language][translationKey];
    }
  });


  /*
    Tradução de placeholders.
    Placeholder é o texto que aparece dentro dos inputs e textarea.
    Como placeholder não é textContent, tratamos separadamente.
  */
  const placeholdersToTranslate = document.querySelectorAll("[data-i18n-placeholder]");

  placeholdersToTranslate.forEach(function (element) {
    const placeholderKey = element.getAttribute("data-i18n-placeholder");

    if (translations[language] && translations[language][placeholderKey]) {
      element.setAttribute("placeholder", translations[language][placeholderKey]);
    }
  });


  /*
    Atualiza visualmente qual botão de idioma está ativo.
  */
  languageButtons.forEach(function (button) {
    button.classList.remove("active");

    if (button.getAttribute("data-lang") === language) {
      button.classList.add("active");
    }
  });


  /*
    Salva o idioma escolhido no navegador.
    Assim, quando mudar de página, o idioma continua o mesmo.
  */
  localStorage.setItem("selectedLanguage", language);
}


/*
  =====================================================
  EVENTOS DOS BOTÕES DE IDIOMA
  =====================================================
*/


/*
  Adiciona clique em cada botão de idioma.
*/
languageButtons.forEach(function (button) {
  button.addEventListener("click", function () {

    /*
      Pega o idioma do botão clicado.
      Exemplo: data-lang="pt"
    */
    const selectedLanguage = button.getAttribute("data-lang");

    /*
      Aplica o idioma escolhido.
    */
    setLanguage(selectedLanguage);
  });
});


/*
  =====================================================
  CARREGAR IDIOMA SALVO
  =====================================================
*/


/*
  Verifica se já existe um idioma salvo no navegador.
  Se não existir, usa italiano como padrão.
*/
const savedLanguage = localStorage.getItem("selectedLanguage") || "it";


/*
  Aplica o idioma salvo ou o idioma padrão.
*/
setLanguage(savedLanguage);


/*
  Mensagem de teste no console.
  Serve para confirmar que o global.js carregou.
*/
console.log("global.js carregado com sucesso.");