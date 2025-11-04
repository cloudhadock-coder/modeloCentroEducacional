
import type { TeamMember, ScheduleItem, FacilityImage, Testimonial } from './types';
import { BookIcon, BrushIcon, CutleryIcon, MoonIcon, MusicIcon, PuzzleIcon, SunIcon } from './components/icons/ScheduleIcons';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: 'Sra. Helena',
    role: 'Diretora e Fundadora',
    bio: 'Com mais de 20 anos de experiência em educação infantil, Sra. Helena fundou o Sol Brilhante com a missão de criar um ambiente seguro, divertido e estimulante para as crianças crescerem.',
    imageUrl: 'https://picsum.photos/seed/helena/400/400',
    favoriteBook: 'O Pequeno Príncipe',
  },
  {
    id: 2,
    name: 'Tio Carlos',
    role: 'Professor (Grupo 4-5 anos)',
    bio: 'Tio Carlos é especialista em atividades lúdicas e artísticas. Ele acredita que a criatividade é a chave para o desenvolvimento e adora ver os pequenos se expressarem através da arte.',
    imageUrl: 'https://picsum.photos/seed/carlos/400/400',
    favoriteBook: 'Onde Vivem os Monstros',
  },
  {
    id: 3,
    name: 'Tia Sofia',
    role: 'Professora (Grupo 2-3 anos)',
    bio: 'Com uma paciência infinita e um sorriso contagiante, Tia Sofia ajuda os mais novos a darem seus primeiros passos na socialização e no aprendizado, sempre com muito carinho.',
    imageUrl: 'https://picsum.photos/seed/sofia/400/400',
    favoriteBook: 'A Lagarta Comilona',
  },
    {
    id: 4,
    name: 'Chef Bia',
    role: 'Nutricionista e Chefe de Cozinha',
    bio: 'A Chef Bia é responsável por criar cardápios deliciosos e nutritivos para nossas crianças. Ela acredita que uma alimentação saudável começa desde cedo e prepara tudo com muito amor.',
    imageUrl: 'https://picsum.photos/seed/bia/400/400',
    favoriteBook: 'A Cesta de Dona Maricota',
  },
];

export const DAILY_SCHEDULE: ScheduleItem[] = [
  { id: 1, time: '8:00', activity: 'Chegada e Acolhimento', description: 'Recebemos nossos pequenos com música calma e atividades livres para um começo de dia tranquilo.', Icon: SunIcon },
  { id: 2, time: '9:00', activity: 'Roda de Conversa e Histórias', description: 'Um momento para compartilhar novidades, cantar e ouvir histórias que estimulam a imaginação.', Icon: BookIcon },
  { id: 3, time: '10:00', activity: 'Atividades Dirigidas', description: 'Projetos de arte, jogos de raciocínio e atividades psicomotoras para desenvolver novas habilidades.', Icon: PuzzleIcon },
  { id: 4, time: '11:00', activity: 'Hora da Arte', description: 'Pintura, modelagem e muita criatividade! Um momento para os pequenos se expressarem livremente.', Icon: BrushIcon },
  { id: 5, time: '12:00', activity: 'Almoço Nutritivo', description: 'Uma refeição deliciosa e balanceada, preparada com carinho pela nossa Chef Bia.', Icon: CutleryIcon },
  { id: 6, time: '13:00', activity: 'Hora do Soninho', description: 'Um ambiente tranquilo e aconchegante para que as crianças possam descansar e recarregar as energias.', Icon: MoonIcon },
  { id: 7, time: '15:00', activity: 'Música e Movimento', description: 'Aulas de música, dança e expressão corporal para gastar energia e se divertir muito.', Icon: MusicIcon },
  { id: 8, time: '16:30', activity: 'Lanche e Despedida', description: 'Um lanchinho da tarde gostoso e preparação para o retorno para casa, com um resumo do dia.', Icon: SunIcon },
];

export const FACILITY_IMAGES: FacilityImage[] = [
  { id: 1, src: 'https://picsum.photos/seed/facility1/1024/768', alt: 'Sala de aula colorida e iluminada' },
  { id: 2, src: 'https://picsum.photos/seed/facility2/1024/768', alt: 'Parque ao ar livre com brinquedos de madeira' },
  { id: 3, src: 'https://picsum.photos/seed/facility3/1024/768', alt: 'Cantinho da leitura com almofadas e livros' },
  { id: 4, src: 'https://picsum.photos/seed/facility4/1024/768', alt: 'Refeitório limpo e organizado' },
  { id: 5, src: 'https://picsum.photos/seed/facility5/1024/768', alt: 'Espaço de artes com tintas e materiais diversos' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, quote: 'Meu filho ama o Sol Brilhante! A equipe é incrível e as atividades são muito criativas. Ele aprende e se diverte todos os dias.', author: '- Família Silva' },
  { id: 2, quote: 'A segurança e o carinho que eles têm com as crianças é incomparável. Deixo minha filha aqui com o coração tranquilo.', author: '- Ana B., mãe da Laura' },
  { id: 3, quote: 'Desde que começou no centro, meu filho desenvolveu muito a fala e a socialização. Só tenho a agradecer a toda a equipe!', author: '- Marcos P., pai do Theo' },
];
