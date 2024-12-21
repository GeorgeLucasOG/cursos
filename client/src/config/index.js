export const signUpFormControls = [
  {
    name: "userName",
    label: "Nome do usuário",
    placeholder: "Digite o nome do usuário",
    type: "text",
    componentType: "input",
  },
  {
    name: "userEmail",
    label: "Usuário Email",
    placeholder: "Digite o seu email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Senha",
    placeholder: "Digite a sua senha",
    type: "password",
    componentType: "input",
  },
];

export const signInFormControls = [
  {
    name: "userEmail",
    label: "Email do usuário",
    placeholder: "Digite o email do usuário",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Senha",
    placeholder: "Digite a senha",
    type: "password",
    componentType: "input",
  },
];

export const initialSignInFormData = {
  userEmail: "",
  password: "",
};

export const initialSignUpFormData = {
  userName: "",
  userEmail: "",
  password: "",
};

export const languageOptions = [
  { id: "english", label: "English" },
  { id: "spanish", label: "Spanish" },
  { id: "french", label: "French" },
  { id: "german", label: "German" },
  { id: "chinese", label: "Chinese" },
  { id: "japanese", label: "Japanese" },
  { id: "korean", label: "Korean" },
  { id: "portuguese", label: "Portuguese" },
  { id: "arabic", label: "Arabic" },
  { id: "russian", label: "Russian" },
];

export const courseLevelOptions = [
  { id: "beginner", label: "Iniciante" },
  { id: "intermediate", label: "Intermediário" },
  { id: "advanced", label: "Avançado" },
];

export const courseCategories = [
  { id: "web-development", label: "Web Development" },
  { id: "backend-development", label: "Backend Development" },
  { id: "data-science", label: "Data Science" },
  { id: "machine-learning", label: "Machine Learning" },
  { id: "artificial-intelligence", label: "Inteligência Artificial" },
  { id: "cloud-computing", label: "Cloud Computing" },
  { id: "cyber-security", label: "Cyber Security" },
  { id: "mobile-development", label: "Mobile Development" },
  { id: "game-development", label: "Game Development" },
  { id: "software-engineering", label: "Engenharia de Software" },
  { id: "formacaoempreendendora", label: "Formacão Empreendendora" },
  { id: "informaticaessencial", label: "Informatica Essencial" },
  { id: "rh", label: "RH e DP Essencial" },
  { id: "financas-essencial", label: "Finanças Essencial" },
  { id: "google-workspace", label: "Google Workspace" },
  { id: "contabil-essencial", label: "Contábil Essencial" },
  { id: "edicao-video", label: "Edição de vídeo" },
  { id: "ingles", label: "Inglês" },
  { id: "matematica", label: "Matemática" },
  { id: "robotica", label: "Robótica" },
  { id: "automacao", label: "Automação" },
  { id: "analytics", label: "Analytics" },
  { id: "desenvolvimento-profissional", label: "Desenvolvimento Profissional" },
  { id: "formacaodigital", label: "Formação Digital" },
];

export const courseLandingPageFormControls = [
  {
    name: "title",
    label: "Título",
    componentType: "input",
    type: "text",
    placeholder: "Digite o título do curso",
  },
  {
    name: "category",
    label: "Categoria",
    componentType: "select",
    type: "text",
    placeholder: "Categoria",
    options: courseCategories,
  },
  {
    name: "level",
    label: "Nível",
    componentType: "select",
    type: "text",
    placeholder: "Nível",
    options: courseLevelOptions,
  },
  {
    name: "primaryLanguage",
    label: "Primeira  Língua",
    componentType: "select",
    type: "text",
    placeholder: "Primeira  Língua",
    options: languageOptions,
  },
  {
    name: "subtitle",
    label: "Legenda",
    componentType: "input",
    type: "text",
    placeholder: "Digite a legenda do curso",
  },
  {
    name: "description",
    label: "Descrição",
    componentType: "textarea",
    type: "text",
    placeholder: "Digite a Descrição",
  },
  {
    name: "pricing",
    label: "Preço",
    componentType: "input",
    type: "number",
    placeholder: "Insira o preço do curso",
  },
  {
    name: "objectives",
    label: "Objetivos",
    componentType: "textarea",
    type: "text",
    placeholder: "Digite os objetivos do curso",
  },
  {
    name: "welcomeMessage",
    label: "Mensagem de boas vindas",
    componentType: "textarea",
    placeholder: "Mensagens para estudantes",
  },
];

export const courseLandingInitialFormData = {
  title: "",
  category: "",
  level: "",
  primaryLanguage: "",
  subtitle: "",
  description: "",
  pricing: "",
  objectives: "",
  welcomeMessage: "",
  image: "",
};

export const courseCurriculumInitialFormData = [
  {
    title: "",
    videoUrl: "",
    freePreview: false,
    public_id: "",
  },
];

export const sortOptions = [
  { id: "price-lowtohigh", label: "Preço: Acessível para o mais Premium" },
  { id: "price-hightolow", label: "Preço: do Premium o mais acessível" },
  { id: "title-atoz", label: "Título: A à Z" },
  { id: "title-ztoa", label: "Título: Z para A" },
];

export const filterOptions = {
  category: courseCategories,
  level: courseLevelOptions,
  primaryLanguage: languageOptions,
};
