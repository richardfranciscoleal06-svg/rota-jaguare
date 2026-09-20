import type {
  Member,
  PendingRegistration,
  RSOReport,
  ActivePatrol,
  RankingEntry,
} from '@/types';

export const credentials: { id: string; senha: string; isAdmin: boolean }[] = [
  { id: 'admin', senha: 'admin', isAdmin: true },
  { id: 'ID 101', senha: 'rota101', isAdmin: false },
  { id: 'ID 102', senha: 'rota102', isAdmin: false },
];

export const mockMembers: Member[] = [
  { id: '1', nome: 'Carlos Eduardo Almeida', idJogo: 'ID 101', discordId: 'carlos#0001', patente: 'Coronel', funcao: 'Comandante Geral', status: 'ATIVO', horasPatrulha: 320, apreensoesRs: 185000 },
  { id: '2', nome: 'Rafael Mendes Souza', idJogo: 'ID 102', discordId: 'rafael#0002', patente: 'Tenente-Coronel', funcao: 'Subcomandante', status: 'ATIVO', horasPatrulha: 290, apreensoesRs: 162000 },
  { id: '3', nome: 'Diego Fernandes Lima', idJogo: 'ID 103', discordId: 'diego#0003', patente: 'Major', funcao: 'Comandante de Batalhão', status: 'ATIVO', horasPatrulha: 275, apreensoesRs: 148000 },
  { id: '4', nome: 'André Costa Silva', idJogo: 'ID 104', discordId: 'andre#0004', patente: 'Capitão', funcao: 'Comandante de Companhia', status: 'ATIVO', horasPatrulha: 240, apreensoesRs: 131000 },
  { id: '5', nome: 'Bruno Oliveira Rocha', idJogo: 'ID 105', discordId: 'bruno#0005', patente: '1º Tenente', funcao: 'Oficial de Dia', status: 'ATIVO', horasPatrulha: 210, apreensoesRs: 112000 },
  { id: '6', nome: 'Felipe Santos Araújo', idJogo: 'ID 106', discordId: 'felipe#0006', patente: '2º Tenente', funcao: 'Adjunto de Operações', status: 'ATIVO', horasPatrulha: 195, apreensoesRs: 98000 },
  { id: '7', nome: 'Gabriel Martins Dias', idJogo: 'ID 107', discordId: 'gabriel#0007', patente: 'Aspirante', funcao: 'Comandante de Pelotão', status: 'ATIVO', horasPatrulha: 170, apreensoesRs: 84000 },
  { id: '8', nome: 'Henrique Alves Barbosa', idJogo: 'ID 108', discordId: 'henrique#0008', patente: 'Subtenente', funcao: 'Instrutor Chefe', status: 'ATIVO', horasPatrulha: 255, apreensoesRs: 125000 },
  { id: '9', nome: 'Igor Ramos Cardoso', idJogo: 'ID 109', discordId: 'igor#0009', patente: '1º Sargento', funcao: 'Líder de Esquadra', status: 'ATIVO', horasPatrulha: 185, apreensoesRs: 91000 },
  { id: '10', nome: 'João Pedro Teixeira', idJogo: 'ID 110', discordId: 'joaopedro#0010', patente: '2º Sargento', funcao: 'Motorista Operacional', status: 'ATIVO', horasPatrulha: 160, apreensoesRs: 76000 },
  { id: '11', nome: 'Lucas Ferreira Nunes', idJogo: 'ID 111', discordId: 'lucas#0011', patente: '3º Sargento', funcao: 'Atirador Designado', status: 'ATIVO', horasPatrulha: 145, apreensoesRs: 68000 },
  { id: '12', nome: 'Marcos Vinícius Pires', idJogo: 'ID 112', discordId: 'marcos#0012', patente: 'Cabo', funcao: 'Operador de Rádio', status: 'ATIVO', horasPatrulha: 120, apreensoesRs: 52000 },
  { id: '13', nome: 'Nicholas Gomes Ribeiro', idJogo: 'ID 113', discordId: 'nicholas#0013', patente: 'Soldado', funcao: 'Operador', status: 'ATIVO', horasPatrulha: 95, apreensoesRs: 38000 },
  { id: '14', nome: 'Otávio Barbosa Cruz', idJogo: 'ID 114', discordId: 'otavio#0014', patente: 'Soldado', funcao: 'Operador', status: 'ATIVO', horasPatrulha: 80, apreensoesRs: 31000 },
  { id: '15', nome: 'Paulo Henrique Mota', idJogo: 'ID 115', discordId: 'paulo#0015', patente: 'Recruta', funcao: 'Em Adaptação', status: 'ATIVO', horasPatrulha: 12, apreensoesRs: 0 },
];

export const mockPendingRegistrations: PendingRegistration[] = [
  { id: 'r1', nome: 'Thiago', sobrenome: 'Augusto Pereira', rgDiscord: 'thiago#0021', idMilitar: 'ID 201', senha: '****', dataSolicitacao: '2026-09-18 14:32' },
  { id: 'r2', nome: 'Vinícius', sobrenome: 'Carvalho Maia', rgDiscord: 'vinicius#0022', idMilitar: 'ID 202', senha: '****', dataSolicitacao: '2026-09-18 16:05' },
  { id: 'r3', nome: 'Wesley', sobrenome: 'Duarte Nogueira', rgDiscord: 'wesley#0023', idMilitar: 'ID 203', senha: '****', dataSolicitacao: '2026-09-19 08:17' },
  { id: 'r4', nome: 'Yuri', sobrenome: 'Fonseca Brito', rgDiscord: 'yuri#0024', idMilitar: 'ID 204', senha: '****', dataSolicitacao: '2026-09-19 10:44' },
  { id: 'r5', nome: 'Zé', sobrenome: 'Gustavo Alencar', rgDiscord: 'zegustavo#0025', idMilitar: 'ID 205', senha: '****', dataSolicitacao: '2026-09-19 19:21' },
];

export const mockRSOReports: RSOReport[] = [
  {
    id: 'rso1',
    enviadoPor: 'Felipe Santos Araújo',
    idMilitar: 'ID 106',
    viatura: 'ROTA 9100',
    barca: { chefe: 'ID 106', motorista: 'ID 110', auxiliar: 'ID 113', anotador: 'ID 114', estagiario: 'ID 115' },
    ocorrencias: 7,
    detidos: 3,
    armamento: 2,
    drogas: 5,
    municoes: 120,
    bombas: 1,
    dinheiroMarcado: 45000,
    resumo: 'Abordagem em via pública resultando em 3 detenções por tráfico. Apreendidas 2 armas de fogo e 5 porções de entorpecente. Perseguição veicular de 12 minutos.',
    dataEnvio: '2026-09-19 22:15',
  },
  {
    id: 'rso2',
    enviadoPor: 'Gabriel Martins Dias',
    idMilitar: 'ID 107',
    viatura: 'ROTA 9102',
    barca: { chefe: 'ID 107', motorista: 'ID 109', auxiliar: 'ID 112', anotador: 'ID 113', estagiario: '' },
    ocorrencias: 4,
    detidos: 1,
    armamento: 1,
    drogas: 2,
    municoes: 60,
    bombas: 0,
    dinheiroMarcado: 18000,
    resumo: 'Patrulha ostensiva em zona central. Uma detenção por porte ilegal. Apreendida uma pistola e duas porções de cocaína.',
    dataEnvio: '2026-09-19 23:48',
  },
  {
    id: 'rso3',
    enviadoPor: 'Igor Ramos Cardoso',
    idMilitar: 'ID 109',
    viatura: 'ROTA 9101',
    barca: { chefe: 'ID 109', motorista: 'ID 111', auxiliar: 'ID 114', anotador: 'ID 115', estagiario: '' },
    ocorrencias: 9,
    detidos: 5,
    armamento: 3,
    drogas: 8,
    municoes: 200,
    bombas: 2,
    dinheiroMarcado: 87000,
    resumo: 'Operação em favela com apoio aéreo. Cinco detenções, três armas apreendidas, oito porções de droga e duas bombas caseiras. Dinheiro marcado contabilizado.',
    dataEnvio: '2026-09-20 01:12',
  },
];

export const mockActivePatrols: ActivePatrol[] = [
  { id: 'p1', viatura: 'ROTA 9100', operadores: ['ID 106', 'ID 110', 'ID 113', 'ID 114', 'ID 115'], inicio: Date.now() - 1000 * 60 * 47, status: 'ativa' },
  { id: 'p2', viatura: 'ROTA 9102', operadores: ['ID 107', 'ID 109', 'ID 112', 'ID 113'], inicio: Date.now() - 1000 * 60 * 23, status: 'ativa' },
  { id: 'p3', viatura: 'ROTA 9105', operadores: ['ID 104', 'ID 108', 'ID 111'], inicio: Date.now() - 1000 * 60 * 92, status: 'ativa' },
];

export const mockRankingHoras: RankingEntry[] = [
  { id: '1', nome: 'Carlos Eduardo Almeida', patente: 'Coronel', valor: 320 },
  { id: '2', nome: 'Rafael Mendes Souza', patente: 'Tenente-Coronel', valor: 290 },
  { id: '3', nome: 'Diego Fernandes Lima', patente: 'Major', valor: 275 },
  { id: '8', nome: 'Henrique Alves Barbosa', patente: 'Subtenente', valor: 255 },
  { id: '4', nome: 'André Costa Silva', patente: 'Capitão', valor: 240 },
  { id: '5', nome: 'Bruno Oliveira Rocha', patente: '1º Tenente', valor: 210 },
  { id: '6', nome: 'Felipe Santos Araújo', patente: '2º Tenente', valor: 195 },
  { id: '9', nome: 'Igor Ramos Cardoso', patente: '1º Sargento', valor: 185 },
  { id: '7', nome: 'Gabriel Martins Dias', patente: 'Aspirante', valor: 170 },
  { id: '10', nome: 'João Pedro Teixeira', patente: '2º Sargento', valor: 160 },
];

export const mockRankingApreensoes: RankingEntry[] = [
  { id: '1', nome: 'Carlos Eduardo Almeida', patente: 'Coronel', valor: 185000 },
  { id: '2', nome: 'Rafael Mendes Souza', patente: 'Tenente-Coronel', valor: 162000 },
  { id: '3', nome: 'Diego Fernandes Lima', patente: 'Major', valor: 148000 },
  { id: '8', nome: 'Henrique Alves Barbosa', patente: 'Subtenente', valor: 125000 },
  { id: '4', nome: 'André Costa Silva', patente: 'Capitão', valor: 131000 },
  { id: '5', nome: 'Bruno Oliveira Rocha', patente: '1º Tenente', valor: 112000 },
  { id: '6', nome: 'Felipe Santos Araújo', patente: '2º Tenente', valor: 98000 },
  { id: '9', nome: 'Igor Ramos Cardoso', patente: '1º Sargento', valor: 91000 },
  { id: '7', nome: 'Gabriel Martins Dias', patente: 'Aspirante', valor: 84000 },
  { id: '10', nome: 'João Pedro Teixeira', patente: '2º Sargento', valor: 76000 },
];

export const patenteOrder: string[] = [
  'General', 'Coronel', 'Tenente-Coronel', 'Major', 'Capitão',
  '1º Tenente', '2º Tenente', 'Aspirante', 'Subtenente',
  '1º Sargento', '2º Sargento', '3º Sargento', 'Cabo', 'Soldado', 'Recruta',
];

export const regulamentoDocs = [
  {
    id: 'cap1',
    titulo: 'Capítulo I — Disposições Gerais',
    secoes: [
      { subtitulo: 'Art. 1º', texto: 'O presente Regulamento disciplina a organização, o funcionamento e a disciplina dos membros do 1º Batalhão de Choque da ROTA no servidor Jaguaré RP.' },
      { subtitulo: 'Art. 2º', texto: 'A ROTA tem por finalidade o policiamento ostensivo, a repressão qualificada e a manutenção da ordem pública em todo o território do servidor.' },
      { subtitulo: 'Art. 3º', texto: 'Todo integrante da ROTA está sujeito às normas contidas neste Regulamento, sem prejuízo de demais legislações aplicáveis do servidor.' },
    ],
  },
  {
    id: 'cap2',
    titulo: 'Capítulo II — Hierarquia e Disciplina',
    secoes: [
      { subtitulo: 'Art. 4º', texto: 'A hierarquia militar é a base da disciplina. A subordinação aos superiores hierárquicos é dever absoluto.' },
      { subtitulo: 'Art. 5º', texto: 'Nenhum militar pode se recusar a cumprir ordem direta de superior hierárquico, salvo se manifestamente ilegal.' },
      { subtitulo: 'Art. 6º', texto: 'O descumprimento de ordens de serviço sujeita o infrator a sanções disciplinares previstas neste Regulamento.' },
    ],
  },
  {
    id: 'cap3',
    titulo: 'Capítulo III — Deveres e Proibições',
    secoes: [
      { subtitulo: 'Art. 7º', texto: 'São deveres do militar: comparecer pontualmente às escalas, portar-se com urbanidade, zelar pelo armamento e viatura, e comunicar irregularidades.' },
      { subtitulo: 'Art. 8º', texto: 'É proibido ao militar: usar de violência desnecessária, praticar atos de corrupção, abandonar o posto sem ordem, e divulvar informações internas.' },
    ],
  },
  {
    id: 'cap4',
    titulo: 'Capítulo IV — Patrulhamento Ostensivo',
    secoes: [
      { subtitulo: 'Art. 9º', texto: 'Todo patrulhamento deve ser registrado via Bate-Ponto no painel interno, indicando a viatura e a composição da barca.' },
      { subtitulo: 'Art. 10º', texto: 'Ao final do turno, o militar deve transmitir o Relatório de Serviço Ostensivo (RSO) com todos os dados da patrulha.' },
      { subtitulo: 'Art. 11º', texto: 'O abandono de patrulha sem encerramento formal constitui infração gravíssima, sujeita a demissão sumária.' },
    ],
  },
  {
    id: 'cap5',
    titulo: 'Capítulo V — Sanções Disciplinares',
    secoes: [
      { subtitulo: 'Art. 12º', texto: 'As sanções aplicáveis são: advertência verbal, repreensão, suspensão, perda de patente e demissão.' },
      { subtitulo: 'Art. 13º', texto: 'A aplicação de sanções compete ao Comandante Geral e, em sua ausência, ao Subcomandante.' },
    ],
  },
];

export const historiaRota = [
  { titulo: 'Origens', texto: 'A Rondas Ostensivas Tobias de Aguiar (ROTA) foi criada em 1970 como uma unidade de elite da Polícia Militar do Estado de São Paulo (PMESP), com o objetivo de realizar policiamento ostensivo fardado e repressão qualificada em áreas de maior incidência criminal.' },
  { titulo: 'Diferencial Tático', texto: 'A ROTA opera com a filosofia de policiamento em duplas e trios, utilizando viaturas equipadas para resposta rápida. Seu modelo operacional tornou-se referência em policiamento ostensivo no Brasil.' },
  { titulo: 'No Jaguaré RP', texto: 'No servidor Jaguaré RP, o 1º Batalhão de Choque reproduz com fidelidade a estrutura e o operacional da ROTA. Os membros passam por curso de formação, são avaliados continuamente e sobem na hierarquia por mérito e tempo de serviço.' },
  { titulo: 'Valores', texto: 'Disciplina, hierarquia, honra e compromisso com a ordem pública. Cada operador da ROTA Jaguaré veste o fardamento com orgulho e atua com profissionalismo em todas as ocorrências.' },
];
