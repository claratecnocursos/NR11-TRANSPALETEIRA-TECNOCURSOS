/**
 * Conteúdo da Trilha NR-11 — Transpaleteira
 * Tipos: cover | content | compare | quiz-intro | question | finale
 */
window.QUESTION_SCREEN_SESSION = {
  meta: {
    title: "NR-11 — Transpaleteira",
    brand: "TecnoCursos",
    musicSrc: "musica/musica_foco.mp3"
  },
  modules: [
    {
      id: 1,
      title: "Fundamentos, Legislação e Requisitos",
      objective: "Capacitar para o uso seguro e eficiente da transpaleteira, com a base da NR-11, os requisitos do operador e a habilitação.",
      titleUnlock: {
        title: "BASE DA NR-11",
        body: "Você conhece a norma, os requisitos do operador e a validade do cartão de identificação.",
        icon: "📘"
      },
      screens: [
        {
          id: "nr12-m1-capa",
          type: "cover",
          image: "assets/fotos/capa-modulo1.png",
          imageAlt: "Transpaleteira elétrica em um corredor de galpão, entre estantes de paletes",
          title: "Módulo 1 — Fundamentos, legislação e requisitos",
          subtitle: "Objetivo do treinamento, introdução à NR-11, requisitos do operador e documentação de habilitação."
        },
        {
          id: "nr11-m1-objetivo",
          type: "video",
          kicker: "Vídeo",
          title: "Introdução à NR 11 e o Nosso Objetivo",
          playerId: "panda-d5520149-26db-4767-8817-2f232b5c1210",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=d5520149-26db-4767-8817-2f232b5c1210"
        },
        {
          id: "nr11-m1-equipamentos",
          type: "video",
          kicker: "Vídeo",
          title: "A Norma NR 11 e os Equipamentos Motorizados",
          playerId: "panda-03649847-6442-4f0d-b228-6b3a3daada07",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=03649847-6442-4f0d-b228-6b3a3daada07"
        },
        {
          id: "nr11-m1-cartao",
          type: "video",
          kicker: "Vídeo",
          title: "Habilitação e o Cartão de Identificação",
          playerId: "panda-0739274a-34d1-47fe-83ce-60d0f0974dd4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0739274a-34d1-47fe-83ce-60d0f0974dd4"
        },
        {
          id: "nr11-m1-cartao-conteudo",
          type: "content",
          layout: "idcard",
          kicker: "Legislação",
          eyebrow: "Legislação",
          title: "O Cartão de Identificação",
          titleAccent: "Identificação",
          badge: "ITEM 11.1.6 (NR-11)",
          quote: "Os operadores de equipamentos de transporte motorizado deverão ser habilitados e só poderão dirigir se durante o horário de trabalho portarem um cartão de identificação, com o nome e fotografia, em lugar visível.",
          emphasis: ["cartão de identificação", "nome", "fotografia"],
          image: "assets/fotos/3x4.png",
          imageAlt: "Foto de Jose Carlos no cartão de operador autorizado, chapa 23078, setor Expedição",
          logo: "assets/fotos/logo-cartao.png",
          card: {
            role: "Operador Autorizado",
            name: "Jose Carlos",
            fields: [
              { label: "Chapa", value: "23078" },
              { label: "Setor", value: "Expedição" }
            ]
          }
        },
        {
          id: "nr11-m1-validade",
          type: "video",
          kicker: "Vídeo",
          title: "Validade do Cartão e Responsabilidade do Operador",
          playerId: "panda-0938331a-44f6-4bd2-8525-cc6cc9994ebd",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=0938331a-44f6-4bd2-8525-cc6cc9994ebd"
        },
        {
          id: "nr11-m1-requisitos",
          type: "content",
          fit: true,
          kicker: "Diretrizes da NR-11",
          eyebrow: "Diretrizes da NR-11",
          title: "Requisitos para Operação",
          body: "De acordo com a norma regulamentadora, o operador de equipamentos de transporte motorizado deverá:",
          cards: [
            { icon: "1", title: "Aptidão Médica", body: "Estar devidamente apto do ponto de vista médico (saúde física e mental atestada por exames ocupacionais específicos)." },
            { icon: "2", title: "Treinamento", body: "Ter participado com aproveitamento de treinamento teórico e prático específico para a condução do equipamento." },
            { icon: "3", title: "Reciclagem", body: "Participar de reciclagens anuais para renovação das orientações de segurança e atualização de competências." }
          ],
          note: { label: "Atenção", text: "O não cumprimento de qualquer um destes requisitos impede o operador de conduzir transpaleteiras na planta." }
        },
        {
          id: "nr11-m1-desafio",
          type: "quiz-intro",
          title: "Pode operar?",
          body: "Três perguntas da NR-11. Acerte no mínimo <strong>2</strong> de <strong>3</strong> para concluir o módulo.",
          count: 3,
          minCorrect: 2,
          icon: "🎯"
        },
        {
          id: "nr11-m1-p1",
          type: "question",
          icon: "⚖️",
          image: "assets/fotos/m1i1.png",
          imageAlt: "Operadora conduzindo uma transpaleteira elétrica com um palete de caixas no corredor do galpão",
          question: "De acordo com a NR 11, o que deve ser indicado de forma visível em todo equipamento de transporte de materiais?",
          alternatives: [
            { id: "a", text: "A data do próximo exame médico obrigatório do operador.", correct: false },
            { id: "b", text: "A carga máxima de trabalho permitida (limite que nunca deve ser ultrapassado).", correct: true },
            { id: "c", text: "O nome completo do fabricante e a cor da máquina.", correct: false }
          ],
          explanation: "A NR-11 exige que a carga máxima de trabalho esteja indicada de forma visível no equipamento. Esse limite não pode ser ultrapassado.",
          review: "Carga máxima visível"
        },
        {
          id: "nr11-m1-p2",
          type: "question",
          icon: "🪪",
          image: "assets/fotos/m1i2.png",
          imageAlt: "Operadora mostra o crachá com foto, com a transpaleteira ao fundo no galpão",
          question: "Para dirigir a transpaleteira durante todo o horário de trabalho, qual é a exigência legal sobre o crachá?",
          alternatives: [
            { id: "a", text: "Portar o cartão de identificação com seu nome e foto em local bem visível.", correct: true },
            { id: "b", text: "Guardar a autorização física dentro da carteira pessoal no bolso.", correct: false },
            { id: "c", text: "Exibir a autorização digital apenas quando for solicitado pela fiscalização.", correct: false }
          ],
          explanation: "O item 11.1.6 exige o cartão de identificação, com nome e fotografia, em lugar visível durante o horário de trabalho.",
          review: "Cartão visível"
        },
        {
          id: "nr11-m1-p3",
          type: "question",
          icon: "📅",
          image: "assets/fotos/m1i3.png",
          imageAlt: "Operadora confere no computador o crachá, o calendário e o checklist, com a transpaleteira ao lado",
          question: "Qual é o prazo de validade da autorização e quem é o responsável por acompanhar esse vencimento?",
          alternatives: [
            { id: "a", text: "A validade é vitalícia e não necessita de exames ou acompanhamento.", correct: false },
            { id: "b", text: "A validade é de 1 ano, sendo o próprio operador o responsável por monitorar a data e avisar a chefia.", correct: true },
            { id: "c", text: "A validade é de 3 anos, cabendo exclusivamente ao RH da empresa monitorar.", correct: false }
          ],
          explanation: "O cartão vale 1 ano. O operador acompanha o vencimento e avisa a chefia. Sem a renovação, a operação fica suspensa.",
          review: "Validade de 1 ano"
        },
      ]
    },
    {
      id: 2,
      title: "Conhecendo o Equipamento",
      objective: "Reconhecer os tipos de transpaleteira, as capacidades, os componentes, o painel de controle e o timão.",
      titleUnlock: {
        title: "A MÁQUINA",
        body: "Você identifica modelos, capacidades, componentes, painel e os comandos do timão.",
        icon: "⚙️"
      },
      screens: [
        {
          id: "nr12-m2-capa",
          type: "cover",
          icon: "⚙️",
          image: "assets/fotos/capa-modulo2.png",
          imageAlt: "Operadora com capacete e colete ao lado de uma transpaleteira elétrica, em um corredor de galpão com estantes de paletes",
          title: "Módulo 2 — Conhecendo o equipamento",
          subtitle: "Tipos de transpaleteira, capacidades, componentes, painel de controle e o timão."
        },
        {
          id: "nr11-m2-tipos",
          type: "video",
          kicker: "Vídeo",
          title: "Os Tipos de Transpaleteiras e a Opção Manual",
          playerId: "panda-e20f3380-d348-4cf1-8636-820dc621e19f",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e20f3380-d348-4cf1-8636-820dc621e19f"
        },
        {
          id: "nr11-m2-eletricas",
          type: "video",
          kicker: "Vídeo",
          title: "Transpaleteiras Elétricas e Tripuladas",
          playerId: "panda-25e6c26f-fa6c-4177-b9aa-20d30217be50",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=25e6c26f-fa6c-4177-b9aa-20d30217be50"
        },
        {
          id: "nr11-m2-tipos-conteudo",
          type: "content",
          layout: "types",
          eyebrow: "Equipamento",
          title: "Tipos de Transpaleteira",
          titleAccent: "Transpaleteira",
          body: "Conhecendo o equipamento.",
          cards: [
            { icon: "🖐️", title: "Transpaleteira Manual", body: "Força humana · curtas distâncias", image: "assets/fotos/TRANSPALETEIRAMANUAL.png", imageAlt: "Transpaleteira manual azul" },
            { icon: "⚡", title: "Transpaleteira Elétrica", body: "Motor elétrico · maior eficiência", image: "assets/fotos/transpaleteiraeletrica.jpg", imageAlt: "Transpaleteira elétrica laranja" },
            { icon: "🧍", title: "Transpaleteira Elétrica Tripulada", body: "Operador a bordo · longos trajetos", image: "assets/fotos/transpaleteiraeletricatripulada.png", imageAlt: "Transpaleteira elétrica tripulada" }
          ]
        },
        {
          id: "nr11-m2-componentes",
          type: "video",
          kicker: "Vídeo",
          title: "Componentes Principais da Transpaleteira",
          playerId: "panda-e20f3380-d348-4cf1-8636-820dc621e19f-componentes",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=e20f3380-d348-4cf1-8636-820dc621e19f"
        },
        {
          id: "nr11-m2-painel",
          type: "video",
          kicker: "Vídeo",
          title: "O Painel de Controle e a Chave de Contato",
          playerId: "panda-10def56d-6345-4ae5-b809-c1a22b535c71",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=10def56d-6345-4ae5-b809-c1a22b535c71"
        },
        {
          id: "nr11-m2-timao",
          type: "content",
          layout: "figure",
          wide: true,
          eyebrow: "Conteúdo",
          title: "O Timão e os Comandos de Direção",
          titleAccent: "Comandos de Direção",
          body: "Conhecendo o equipamento.",
          image: "assets/fotos/TIMAO.png",
          imageAlt: "Timão da transpaleteira. Comandos: sobe, desce, buzina, devagar e freio. O timão ergonômico favorece o deslocamento, o direcionamento e o freio. Antes do esmagamento, o pulsar para frente e para trás não deve ser usado como reverso para frear."
        },
        {
          id: "nr11-m2-freios",
          type: "content",
          pair: true,
          eyebrow: "Freios",
          title: "O Sistema de Freios e a Proibição do Reverso",
          titleAccent: "Proibição do Reverso",
          images: [
            {
              image: "assets/fotos/VERTICAL.png",
              imageAlt: "Operador com o timão na posição vertical, acionando o freio",
              caption: "Posição vertical"
            },
            {
              image: "assets/fotos/HORIZONTAL.png",
              imageAlt: "Operador com o timão na posição horizontal extrema, acionando o freio",
              caption: "Posição horizontal"
            }
          ],
          note: {
            alert: true,
            label: "Alerta",
            text: "Não se deve usar \"reverso\" como freio. Use sempre as posições limites do timão para frear suavemente, evitando que a carga tombe."
          }
        },
        {
          id: "nr11-m2-desafio",
          type: "quiz-intro",
          title: "Verdadeiro ou falso?",
          body: "Quatro afirmações sobre o equipamento. Acerte no mínimo <strong>3</strong> de <strong>4</strong> para concluir o módulo.",
          count: 4,
          minCorrect: 3,
          icon: "✓"
        },
        {
          id: "nr11-m2-tf1",
          type: "question",
          tf: true,
          question: "A paleteira manual é ideal para longas distâncias e cargas muito pesadas, acima de 5 toneladas.",
          alternatives: [
            { id: "v", text: "Verdadeiro", correct: false },
            { id: "f", text: "Falso", correct: true }
          ],
          explanation: "A paleteira manual é indicada para curtas distâncias em superfícies planas, com capacidade entre 1,5 e 3 toneladas.",
          review: "Paleteira manual"
        },
        {
          id: "nr11-m2-tf2",
          type: "question",
          tf: true,
          question: "Na transpaleteira elétrica tripulada (jet), o operador trabalha em pé, sobre uma plataforma do próprio equipamento.",
          alternatives: [
            { id: "v", text: "Verdadeiro", correct: true },
            { id: "f", text: "Falso", correct: false }
          ],
          explanation: "Esse modelo permite maior conforto e controle em trajetos longos, com capacidade entre 2 e 3 toneladas.",
          review: "Elétrica tripulada"
        },
        {
          id: "nr11-m2-tf3",
          type: "question",
          tf: true,
          question: "Os garfos e as rodas de poliuretano fazem parte dos componentes principais da transpaleteira elétrica.",
          alternatives: [
            { id: "v", text: "Verdadeiro", correct: true },
            { id: "f", text: "Falso", correct: false }
          ],
          explanation: "Os garfos sustentam a carga e as rodas de poliuretano garantem o movimento seguro do equipamento.",
          review: "Garfos e rodas"
        },
        {
          id: "nr11-m2-tf4",
          type: "question",
          tf: true,
          question: "É permitido deixar a chave de contato ligada ao se afastar da máquina, desde que por pouco tempo.",
          alternatives: [
            { id: "v", text: "Verdadeiro", correct: false },
            { id: "f", text: "Falso", correct: true }
          ],
          explanation: "A chave de contato deve sempre ser desligada ao se afastar da máquina, evitando uso não autorizado e acidentes.",
          review: "Chave de contato"
        }
      ]
    },
    {
      id: 3,
      title: "Procedimentos Operacionais e Operação Segura",
      objective: "Conduzir a transpaleteira no dia a dia: inspeção pré-uso, trânsito interno, postura e estacionamento seguro.",
      titleUnlock: {
        title: "OPERAÇÃO SEGURA",
        body: "Você inspeciona antes do turno, respeita o trânsito interno e estaciona sem obstruir a emergência.",
        icon: "🎛️"
      },
      screens: [
        {
          id: "nr12-m3-capa",
          type: "cover",
          icon: "🎛️",
          image: "assets/fotos/capa-modulo3.png",
          imageAlt: "Operadora com capacete e colete em um corredor de galpão, com a transpaleteira elétrica ao lado e estantes de paletes",
          title: "Módulo 3 — Procedimentos operacionais e operação segura",
          subtitle: "Inspeção pré-uso, trânsito interno, postura, visibilidade e estacionamento seguro."
        },
        {
          id: "nr11-m3-inspecao",
          type: "video",
          kicker: "Vídeo",
          title: "Inspeção Pré-Uso e o Checklist Diário",
          playerId: "panda-072890c1-6796-4178-bee4-e0c9d2505cf7",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=072890c1-6796-4178-bee4-e0c9d2505cf7"
        },
        {
          id: "nr11-m3-postura",
          type: "video",
          kicker: "Vídeo",
          title: "Postura Corporal, Visibilidade e Condução",
          playerId: "panda-6640e9b1-c166-4cd6-bbba-e4d18b01000f",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=6640e9b1-c166-4cd6-bbba-e4d18b01000f"
        },
        {
          id: "nr11-m3-transito",
          type: "video",
          kicker: "Vídeo",
          title: "Regras de Trânsito Interno e Preferências",
          playerId: "panda-46860ea9-83e6-497e-9cba-45b2335a4e8f",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=46860ea9-83e6-497e-9cba-45b2335a4e8f"
        },
        {
          id: "nr11-m3-transito-regras",
          type: "content",
          fit: true,
          eyebrow: "Trânsito",
          title: "Regras de Trânsito Interno",
          titleAccent: "Trânsito Interno",
          body: "Na operação logística do dia a dia, a circulação segura exige disciplina e atenção constante. Conheça as regras essenciais de trânsito interno.",
          cards: [
            { icon: "🚶", title: "Pedestres em Primeiro", body: "Dê sempre preferência absoluta aos pedestres. Evite conversões bruscas e circule com atenção redobrada em corredores compartilhados." },
            { icon: "🚫", title: "Parada Obrigatória", body: "A parada é obrigatória em todos os cruzamentos e curvas, dando preferência a empilhadeiras e paleteiras carregadas." },
            { icon: "🚦", title: "Sem \"Costurar\"", body: "Não tente costurar entre obstáculos. Circule por rotas livres e sinalize sua passagem antes de dar passagem para outra máquina." },
            { icon: "🛞", title: "Condução Suave", body: "Mantenha postura adequada. Evite freadas e arrancadas bruscas. Reduza a velocidade em curvas e locais de pouca visibilidade." },
            { icon: "📣", title: "Buzina com Moderação", body: "Use a buzina somente quando estritamente necessário para alertar outras pessoas. Não buzine de forma excessiva ou em zonas de silêncio." },
            { icon: "💧", title: "Pisos com Risco", body: "Se o piso estiver molhado, com óleo ou irregular, reduza imediatamente a velocidade e redobre o cuidado para evitar derrapagens." }
          ]
        },
        {
          id: "nr11-m3-manuseio",
          type: "video",
          kicker: "Vídeo",
          title: "Técnicas de Manuseio e Transporte de Cargas",
          playerId: "panda-1059059a-d1b8-4ece-b5e2-cce2cde628f0",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=1059059a-d1b8-4ece-b5e2-cce2cde628f0"
        },
        {
          id: "nr11-m3-rampas",
          type: "video",
          kicker: "Vídeo",
          title: "Operação Segura em Rampas e Inclinações",
          playerId: "panda-8f2e4f24-ad8f-45e1-9e2d-9a139c1efab3",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=8f2e4f24-ad8f-45e1-9e2d-9a139c1efab3"
        },
        {
          id: "nr11-m3-proibicoes",
          type: "content",
          fit: true,
          eyebrow: "Proibições",
          title: "Proibições Críticas e Parada de Emergência",
          titleAccent: "Parada de Emergência",
          cards: [
            { icon: "🚫", title: "Sem carona", body: "É proibido dar carona na transpaleteira ou sentar sobre a bateria da máquina." },
            { icon: "🪜", title: "Sem escada ou plataforma", body: "Nunca use o equipamento como escada, plataforma de trabalho ou transporte de passageiros." },
            { icon: "🔧", title: "Sem conserto", body: "Não faça manutenção nem conserto sem o treinamento de mecânico. Deixe isso para o setor responsável." },
            { icon: "🛑", title: "Parada de emergência", body: "O botão cessa os movimentos elétricos. Acione só em risco iminente, acidente consumado ou emergência extrema." }
          ]
        },
        {
          id: "nr11-m3-estacionamento",
          type: "video",
          kicker: "Vídeo",
          title: "Estacionamento Seguro e Finalização de Turno",
          playerId: "panda-2199bac6-c88d-4c8d-a0b6-5579eab8957a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=2199bac6-c88d-4c8d-a0b6-5579eab8957a"
        },
        {
          id: "nr11-m3-jogada",
          type: "match",
          relaxed: true,
          title: "Qual é a jogada?",
          leftTitle: "Aconteceu",
          rightTitle: "Você faz",
          minCorrect: 4,
          pairs: [
            { ex: "O checklist ficou vermelho", body: "Avisa a chefia e manda para a manutenção" },
            { ex: "Hora de conduzir", body: "Anda com o corpo à frente do timão" },
            { ex: "Chegou num cruzamento", body: "Para e deixa o pedestre passar" },
            { ex: "Fim do turno", body: "Abaixa os garfos e tira a chave" }
          ]
        }
      ]
    },
    {
      id: 4,
      title: "Movimentação, Cargas e Armazenamento",
      objective: "Movimentar cargas com estabilidade, nas rampas e no empilhamento, respeitando palete e piso.",
      titleUnlock: {
        title: "CARGA ESTÁVEL",
        body: "Você mantém o centro de gravidade, sobe e desce rampas na posição certa e respeita o piso.",
        icon: "📦"
      },
      screens: [
        {
          id: "nr12-m4-capa",
          type: "cover",
          icon: "📦",
          image: "assets/fotos/capa-modulo4.png",
          imageAlt: "Transpaleteira elétrica em primeiro plano, em um corredor de galpão com estantes de paletes",
          title: "Módulo 4 — Movimentação, cargas e armazenamento",
          subtitle: "Estabilidade da carga, rampas, tipos de palete e regras de empilhamento e solo."
        },
        {
          id: "nr11-m4-estabilidade",
          type: "video",
          kicker: "Vídeo",
          title: "Estabilidade e Segurança da Carga",
          playerId: "panda-008a62d9-bfb0-4943-a321-c9dacb07d6c1",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=008a62d9-bfb0-4943-a321-c9dacb07d6c1"
        },
        {
          id: "nr11-m4-paletes",
          type: "content",
          layout: "types",
          eyebrow: "Equipamento",
          title: "Dois Tipos de Palete",
          titleAccent: "Palete",
          cards: [
            {
              title: "Palete de Duas Entradas",
              body: "Aberturas apenas em lados opostos — acesso mais limitado para os garfos da transpaleteira.",
              image: "assets/fotos/PALLET DUAS.png",
              imageAlt: "Palete de duas entradas, com aberturas em lados opostos"
            },
            {
              title: "Palete de Quatro Entradas",
              body: "Aberturas nos quatro lados — o mais versátil, ideal para corredores estreitos.",
              image: "assets/fotos/PALLET 4.webp",
              imageAlt: "Palete de quatro entradas, com aberturas nos quatro lados"
            }
          ]
        },
        {
          id: "nr11-m4-classificacao",
          type: "video",
          kicker: "Vídeo",
          title: "Classificação das Cargas no Treinamento",
          playerId: "panda-c164a67f-8b62-43de-83fa-ec22039fb0dd",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=c164a67f-8b62-43de-83fa-ec22039fb0dd"
        },
        {
          id: "nr11-m4-armazenamento",
          type: "video",
          kicker: "Vídeo",
          title: "Regras de Armazenamento e Limites do Piso",
          playerId: "panda-12929574-ce98-4b2f-a6fe-5feda636330a",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=12929574-ce98-4b2f-a6fe-5feda636330a"
        },
        {
          id: "nr11-m4-desafio",
          type: "quiz-intro",
          title: "Certo ou errado?",
          body: "Cinco afirmações. Você começa com <strong>3 corações</strong> e tem <strong>20 segundos</strong> em cada uma. Errou ou deixou o tempo acabar, perde um coração.",
          count: 5,
          minCorrect: 1,
          lives: 3,
          icon: "✓"
        },
        {
          id: "nr11-m4-ce1",
          type: "question",
          tf: true,
          question: "Cargas soltas ou instáveis podem ser transportadas sem problema, desde que o trajeto seja curto.",
          alternatives: [
            { id: "v", text: "Certo", correct: false },
            { id: "f", text: "Errado", correct: true }
          ],
          explanation: "Cargas soltas ou instáveis nunca são permitidas. O equilíbrio deve ser garantido antes de mover.",
          review: "Carga instável"
        },
        {
          id: "nr11-m4-ce2",
          type: "question",
          tf: true,
          question: "O palete de quatro entradas permite a inserção dos garfos por qualquer um dos quatro lados.",
          alternatives: [
            { id: "v", text: "Certo", correct: true },
            { id: "f", text: "Errado", correct: false }
          ],
          explanation: "O palete de quatro entradas é o mais versátil, com abertura em todos os lados.",
          review: "Palete de quatro entradas"
        },
        {
          id: "nr11-m4-ce3",
          type: "question",
          tf: true,
          question: "Areia solta, sem contenção, pode ser transportada normalmente na transpaleteira.",
          alternatives: [
            { id: "v", text: "Certo", correct: false },
            { id: "f", text: "Errado", correct: true }
          ],
          explanation: "Materiais a granel sem contenção, como areia solta ou líquidos livres, nunca devem ser transportados na transpaleteira.",
          review: "Areia solta"
        },
        {
          id: "nr11-m4-ce4",
          type: "question",
          tf: true,
          question: "Bobinas e chapas soltas, sem embalagem individual, são classificadas como carga diversa.",
          alternatives: [
            { id: "v", text: "Certo", correct: true },
            { id: "f", text: "Errado", correct: false }
          ],
          explanation: "Cargas diversas são transportadas sem embalagem, de forma individual, como bobinas e chapas.",
          review: "Carga diversa"
        },
        {
          id: "nr11-m4-ce5",
          type: "question",
          tf: true,
          question: "O material empilhado deve ficar a pelo menos 50 cm de distância das estruturas laterais do prédio.",
          alternatives: [
            { id: "v", text: "Certo", correct: true },
            { id: "f", text: "Errado", correct: false }
          ],
          explanation: "O afastamento mínimo de 50 cm também vale para os corredores de circulação.",
          review: "Afastamento de 50 cm"
        }
      ]
    },
    {
      id: 5,
      title: "Manutenção e Segurança com Baterias",
      objective: "Cuidar da conservação da transpaleteira e da bateria: checklist, troca, recarga e riscos químicos.",
      titleUnlock: {
        title: "ENERGIA SOB CONTROLE",
        body: "Você faz o checklist, troca a bateria na ordem certa e trata a solução ácida com cuidado.",
        icon: "🔋"
      },
      screens: [
        {
          id: "nr11-m5-capa",
          type: "cover",
          icon: "🔋",
          image: "assets/fotos/capa-modulo5.png",
          imageAlt: "Transpaleteira elétrica laranja em um corredor de galpão, entre estantes de paletes",
          title: "Módulo 5 — Manutenção e segurança com baterias",
          subtitle: "Manutenção preventiva, troca de bateria, gestão da recarga e riscos químicos."
        },
        {
          id: "nr11-m5-conservacao",
          type: "content",
          fit: true,
          eyebrow: "Conteúdo",
          title: "Manutenção e Conservação da Transpaleteira",
          titleAccent: "Conservação da Transpaleteira",
          cards: [
            { icon: "🔧", title: "Importância da Manutenção Preventiva", body: "Com o cuidado constante com o equipamento, é possível evitar falhas inesperadas e aumentar a durabilidade da transpaleteira." },
            { icon: "📋", title: "Checklist Diário", body: "Elaboração de um roteiro de inspeção diário, verificando o estado dos pneus, freios, bateria, nível de carga e possíveis vazamentos de fluido." },
            { icon: "⚠️", title: "Problemas Comuns", body: "Identificar e relatar defeitos no sistema elétrico, freios, garfos e outros componentes antes que causem acidentes." },
            { icon: "🛑", title: "Ação em Caso de Falhas", body: "Ao identificar um problema técnico durante a operação, estacione imediatamente o equipamento em local seguro e relate o fato à chefia e à equipe de manutenção." }
          ]
        },
        {
          id: "nr11-m5-preventiva",
          type: "video",
          kicker: "Vídeo",
          title: "Manutenção Preventiva e o Checklist Diário",
          playerId: "panda-5f1f4802-4285-4816-857c-56b7f6c070b4",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=5f1f4802-4285-4816-857c-56b7f6c070b4"
        },
        {
          id: "nr11-m5-troca",
          type: "content",
          layout: "flow",
          fit: true,
          eyebrow: "Procedimento",
          title: "Passo a Passo Troca de Bateria",
          titleAccent: "Troca de Bateria",
          cards: [
            { icon: "1", title: "Confirme o nível de carga", body: "Ligue a chave e verifique a carga." },
            { icon: "2", title: "Desligue o equipamento", body: "Desligue na chave de ignição." },
            { icon: "3", title: "Abra a tampa e solte a trava", body: "Com cuidado, solte a trava de segurança." },
            { icon: "4", title: "Desconecte o cabo", body: "Segure firme pelo conector." },
            { icon: "5", title: "Retire a bateria antiga", body: "Atenção ao peso e ao equilíbrio." },
            { icon: "6", title: "Posicione a nova bateria", body: "No mesmo lugar da anterior." },
            { icon: "7", title: "Verifique a polaridade e conecte", body: "Conecte a bateria e o cabo elétrico." },
            { icon: "8", title: "Trave e feche a tampa", body: "Bateria carregada e trava acionada." },
            { icon: "9", title: "Conecte no carregador", body: "Bateria descarregada vai para recarga." }
          ],
          note: "Procedimento correto é garantia de um trabalho seguro!"
        },
        {
          id: "nr11-m5-bateria",
          type: "video",
          kicker: "Vídeo",
          title: "Gestão da Carga e Ciclo de Vida da Bateria",
          playerId: "panda-69ea0ec7-8361-4403-88c5-4c4b75096604",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=69ea0ec7-8361-4403-88c5-4c4b75096604"
        },
        {
          id: "nr11-m5-restricoes",
          type: "content",
          fit: true,
          eyebrow: "Segurança",
          title: "Restrições no Uso da Bateria",
          titleAccent: "no Uso da Bateria",
          cards: [
            { icon: "🚭", title: "Proibido Fumar e Fontes de Ignição", body: "Não fume, não use chamas nem produza fagulhas próximo a uma bateria. Os riscos químicos são sérios." },
            { icon: "💥", title: "Evite Impactos", body: "Nunca permita que a bateria sofra impactos, para evitar danos internos à sua estrutura." },
            { icon: "🚫", title: "Não Apoie Objetos", body: "Não coloque objeto, ferramenta ou pano sobre a bateria, evitando curto-circuito." },
            { icon: "✨", title: "Mantenha Limpa e Seca", body: "Mantenha o corpo da bateria sempre limpo e seco, para evitar corrosão e fuga de corrente à terra." },
            { icon: "👁️", title: "Contato com Pele ou Olhos", body: "Se a solução ácida atingir olhos, pele ou roupas, lave na hora com água em abundância. Se os olhos forem atingidos, procure socorro médico sem demora." },
            { icon: "🧪", title: "Derramamento Acidental", body: "Neutralize o ácido derramado com bicarbonato de sódio e água, até que pare de borbulhar." }
          ]
        },
        {
          id: "nr11-m5-desafio",
          type: "quiz-intro",
          icon: "🔧",
          title: "Desafio Módulo 5 — Central de Manutenção",
          body: "Você vai ler 5 situações sobre manutenção, troca de bateria e restrições de segurança. Toque no setor correto para classificar cada uma: <strong>Manutenção</strong>, <strong>Troca de Bateria</strong> ou <strong>Restrição</strong>.",
          startLabel: "Iniciar triagem",
          count: 5,
          minCorrect: 4
        },
        {
          id: "nr11-m5-triagem",
          type: "sort",
          ordered: true,
          relaxed: true,
          minCorrect: 4,
          bins: [
            { id: "manutencao", label: "Manutenção", icon: "🔧", tone: "manutencao" },
            { id: "troca", label: "Troca de Bateria", icon: "🔋", tone: "troca" },
            { id: "restricao", label: "Restrição", icon: "⚠️", tone: "restricao" }
          ],
          items: [
            { icon: "🚭", text: "Nunca fume, use chamas ou produza fagulhas próximo a uma bateria.", bin: "restricao", hint: "Setor certo: Restrição." },
            { icon: "📋", text: "Elaborar um roteiro de inspeção diário, verificando pneus, freios, bateria e vazamentos.", bin: "manutencao", hint: "Setor certo: Manutenção." },
            { icon: "🔑", text: "Confirme o nível de carga e depois desligue o equipamento na chave de ignição.", bin: "troca", hint: "Setor certo: Troca de Bateria." },
            { icon: "🚫", text: "Não coloque ferramentas ou panos sobre a bateria, para evitar curto-circuito.", bin: "restricao", hint: "Setor certo: Restrição." },
            { icon: "🔌", text: "Ao terminar o processo, conecte a bateria descarregada no carregador.", bin: "troca", hint: "Setor certo: Troca de Bateria." }
          ]
        }
      ]
    },
    {
      id: 6,
      title: "Gestão de Riscos, Emergências e EPIs",
      objective: "Prevenir acidentes com EPI, reconhecer os principais riscos, agir em emergência e respeitar as proibições críticas.",
      titleUnlock: {
        title: "CADA CUIDADO CONTA",
        body: "Você usa o EPI certo, age no alarme de incêndio e não dá carona nem improvisa conserto.",
        icon: "🛡️"
      },
      screens: [
        {
          id: "nr11-m6-capa",
          type: "cover",
          icon: "🛡️",
          image: "assets/fotos/capa-modulo6.png",
          imageAlt: "Transpaleteira elétrica no corredor do galpão e EPIs sobre a bancada: capacete, colete, protetor auricular, óculos e botina",
          title: "Módulo 6 — Gestão de riscos, emergências e EPIs",
          subtitle: "EPI obrigatório, principais riscos, emergência e proibições críticas."
        },
        {
          id: "nr11-m6-epis",
          type: "content",
          layout: "side",
          fit: true,
          eyebrow: "Segurança",
          title: "EPIs: Proteção à Sua Saúde Física",
          titleAccent: "Proteção à Sua Saúde Física",
          image: "assets/fotos/epis.jpeg",
          imageAlt: "Botina, capacete, luvas, óculos e protetor auricular",
          body: "Na operação logística, a segurança começa antes mesmo de ligar a máquina. Por lei, a empresa fornece, orienta, treina e exige o uso de todos os EPIs necessários para a função — por isso, o uso correto é seu dever obrigatório.",
          cards: [
            { icon: "👢", title: "Botina de Segurança", body: "Protege seus pés contra impactos de cargas durante a movimentação." },
            { icon: "🧤", title: "Luvas de Proteção", body: "Fundamentais para o manuseio firme do timão e dos cabos." },
            { icon: "🎧", title: "Protetor Auricular", body: "Obrigatório para atuar com segurança em áreas com ruído elevado." }
          ]
        },
        {
          id: "nr11-m6-riscos",
          type: "video",
          kicker: "Vídeo",
          title: "Riscos Provenientes da Operação",
          playerId: "panda-7cb1ff16-18cb-4c56-9f15-3734b0ff1251",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=7cb1ff16-18cb-4c56-9f15-3734b0ff1251"
        },
        {
          id: "nr11-m6-emergencia",
          type: "content",
          layout: "emerge",
          fit: true,
          eyebrow: "Emergência",
          title: "Como Agir em Emergências",
          titleAccent: "Emergências",
          body: "Saiba como agir em casos de emergências:",
          cards: [
            { icon: "🚨", title: "Alarme de Incêndio", body: "Ao ouvir o alarme, estacione o veículo em local seguro, deixando passagem livre." },
            { icon: "🧯", title: "Manejo de Extintores", body: "Conheça o manejo de extintores. Esse conhecimento pode salvar vidas." }
          ],
          chainLabel: "Em caso de princípio de incêndio no veículo",
          items: [
            { icon: "🆘", title: "Peça ajuda" },
            { icon: "📣", title: "Comunique" },
            { icon: "🔥", title: "Combata as chamas" }
          ],
          note: "Use o extintor adequado: Pó químico ou CO₂."
        },
        {
          id: "nr11-m6-desafio",
          type: "quiz-intro",
          icon: "🔢",
          title: "Desafio Final — Ordem Certa",
          body: "São 2 rodadas rápidas. Toque nos itens na ordem correta: primeiro o protocolo de emergência, depois a sequência de uso dos EPIs. Simples e direto — vamos lá!",
          startLabel: "Iniciar desafio",
          count: 2,
          minCorrect: 2
        },
        {
          id: "nr11-m6-ordem",
          type: "order",
          minCorrect: 1,
          rounds: [
            {
              title: "Protocolo de Emergência",
              body: "Toque na ordem correta, em caso de princípio de incêndio:",
              items: [
                { key: "ajuda", text: "Peça ajuda", icon: "🆘", rank: 1 },
                { key: "comunique", text: "Comunique", icon: "📣", rank: 2 },
                { key: "chamas", text: "Combata as chamas", icon: "🧯", rank: 3 }
              ]
            },
            {
              title: "Uso dos EPIs",
              body: "Toque na ordem correta, dos pés à cabeça:",
              items: [
                { key: "botina", text: "Botina de Segurança", icon: "👢", rank: 1 },
                { key: "luvas", text: "Luvas de Proteção", icon: "🧤", rank: 2 },
                { key: "auricular", text: "Protetor Auricular", icon: "🎧", rank: 3 }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 7,
      title: "NR-12 — Segurança no Trabalho em Máquinas e Equipamentos",
      objective: "Entender a NR-12, reconhecer os riscos mecânicos e elétricos e seguir as condutas seguras na operação.",
      titleUnlock: {
        title: "NR-12 EM DIA",
        body: "Você conhece o objetivo da norma, os riscos mecânicos e elétricos e as condutas seguras.",
        icon: "📘"
      },
      screens: [
        {
          id: "nr11-m7-capa",
          type: "cover",
          icon: "📘",
          image: "assets/fotos/capa.png",
          imageAlt: "Operadora com capacete e colete ao lado de uma transpaleteira elétrica, em um corredor de galpão com estantes de paletes",
          title: "Módulo 7 — Segurança no trabalho em máquinas e equipamentos",
          subtitle: "O que é a NR-12, riscos mecânicos e elétricos, condutas proibidas e boas práticas."
        },
        {
          id: "nr11-m7-objetivo",
          type: "video",
          kicker: "Vídeo",
          title: "O que é a NR 12 e o seu Objetivo",
          playerId: "panda-ddb9a2c6-5ba0-490d-b4b7-4bfee7339648",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=ddb9a2c6-5ba0-490d-b4b7-4bfee7339648"
        },
        {
          id: "nr11-m7-deveres",
          type: "content",
          fit: true,
          eyebrow: "NR-12",
          title: "Quatro Deveres no Início do Turno",
          titleAccent: "Início do Turno",
          body: "A segurança operacional depende das suas atitudes. No início de cada turno, cumpra estes quatro deveres.",
          cards: [
            { icon: "🔍", title: "Inspecionar", body: "Verifique as condições completas do equipamento antes do uso, sem nenhuma exceção." },
            { icon: "📣", title: "Comunicar", body: "Ao menor sinal de anomalia, relate imediatamente ao supervisor ou à manutenção." },
            { icon: "⚖️", title: "Respeitar a carga", body: "Nunca exceda a capacidade máxima indicada na placa de identificação da máquina." },
            { icon: "📋", title: "Seguir procedimentos", body: "Cumpra rigorosamente as instruções de segurança e as regras da empresa." }
          ],
          note: "Trabalhar com responsabilidade protege você e seus colegas de trabalho!"
        },
        {
          id: "nr11-m7-riscos",
          type: "video",
          kicker: "Vídeo",
          title: "Identificando os Riscos Mecânicos e Elétricos",
          playerId: "panda-fb2549f7-7d12-4046-a7ae-b72b70405608",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=fb2549f7-7d12-4046-a7ae-b72b70405608"
        },
        {
          id: "nr11-m7-protecao",
          type: "content",
          fit: true,
          eyebrow: "Conteúdo",
          title: "Sistemas de Proteção e Regras de Proteção Física",
          titleAccent: "Regras de Proteção Física",
          body: "Os equipamentos de movimentação possuem proteções especiais para resguardar a vida do operador e a integridade de terceiros.",
          cards: [
            { icon: "🛡️", title: "Grade de proteção superior", body: "Resguarda a cabeça do operador em caso de queda de caixas ou objetos de alturas elevadas." },
            { icon: "🛑", title: "Botão de desligamento de emergência", body: "Trava imediatamente o fornecimento de energia e cessa as funções de tração e hidráulica da máquina." },
            { icon: "🚨", title: "Buzina, giroflex e alarme de ré", body: "Emitem sinais visuais e sonoros indispensáveis para avisar pedestres em áreas ruidosas de estoque." },
            { icon: "🔒", title: "Cinto de segurança sem exceções", body: "O uso do cinto é obrigatório em todos os deslocamentos. Em um tombamento, ele evita que o operador seja arremessado e esmagado pelo chassi." },
            { icon: "🧍", title: "Corpo sempre dentro do perímetro", body: "Mantenha braços, pernas, mãos e cabeça dentro da cabine. Nunca apoie o corpo na coluna de elevação nem coloque membros para fora em movimento." }
          ],
          note: {
            alert: true,
            label: "Dispositivos obrigatórios",
            text: "Nunca neutralize, altere ou opere com qualquer dispositivo de segurança desligado ou danificado."
          }
        },
        {
          id: "nr11-m7-condutas",
          type: "video",
          kicker: "Vídeo",
          title: "Condutas Proibidas e Boas Práticas",
          playerId: "panda-72e77a2b-4b6b-48a8-ad09-c9be79566ce9",
          embed: "https://player-vz-d35edf2a-8e7.tv.pandavideo.com.br/embed/?v=72e77a2b-4b6b-48a8-ad09-c9be79566ce9"
        },
        {
          id: "nr11-m7-desafio",
          type: "quiz-intro",
          icon: "🛡️",
          title: "Missão NR 12 — Módulo 7",
          body: "São 4 perguntas simples sobre a NR 12. Toque na resposta certa e valide o módulo!",
          startLabel: "Iniciar desafio",
          count: 4,
          minCorrect: 3
        },
        {
          id: "nr11-m7-p1",
          type: "question",
          icon: "📋",
          image: "assets/fotos/m7i1.png",
          imagePosition: "center 12%",
          imageAlt: "Operadora aponta um checklist da NR-12, com relógio, calendário e transpaleteira no galpão",
          question: "Para que serve a NR 12?",
          alternatives: [
            { id: "a", text: "Garantir segurança no trabalho com máquinas e equipamentos, como empilhadeira e transpaleteira.", correct: true },
            { id: "b", text: "Dispensar o uso do cinto de segurança.", correct: false },
            { id: "c", text: "Organizar só o horário de almoço da equipe.", correct: false }
          ],
          explanation: "A NR-12 existe para garantir a segurança no trabalho com máquinas e equipamentos, como a empilhadeira e a transpaleteira.",
          review: "Objetivo da NR-12"
        },
        {
          id: "nr11-m7-p2",
          type: "question",
          icon: "🔍",
          image: "assets/fotos/m7i2.png",
          imagePosition: "center 12%",
          imageAlt: "Operadora faz o checklist da transpaleteira antes do uso, com uma lupa de inspeção ao lado",
          question: "Qual é o primeiro dever de cada turno?",
          alternatives: [
            { id: "a", text: "Ligar a máquina e sair rápido, sem checklist.", correct: false },
            { id: "b", text: "Inspecionar o equipamento completo antes de usar.", correct: true },
            { id: "c", text: "Deixar o colega inspecionar no seu lugar.", correct: false }
          ],
          explanation: "O primeiro dever de cada turno é inspecionar o equipamento completo antes de usar, sem exceção.",
          review: "Primeiro dever do turno"
        },
        {
          id: "nr11-m7-p3",
          type: "question",
          icon: "⚡",
          image: "assets/fotos/m7i3.png",
          imagePosition: "center 12%",
          imageAlt: "Transpaleteira na recarga, com alertas de chama, gás e curto-circuito na bateria",
          question: "Qual risco existe na recarga da bateria?",
          alternatives: [
            { id: "a", text: "Apenas o barulho da recarga.", correct: false },
            { id: "b", text: "Curto-circuito, aquecimento excessivo e gases tóxicos.", correct: true },
            { id: "c", text: "Nenhum: equipamento elétrico não oferece risco.", correct: false }
          ],
          explanation: "Na recarga da bateria há risco de curto-circuito, aquecimento excessivo e gases tóxicos.",
          review: "Riscos na recarga"
        },
        {
          id: "nr11-m7-p4",
          type: "question",
          icon: "🚨",
          image: "assets/fotos/m7i4.png",
          imagePosition: "center 12%",
          imageAlt: "Transpaleteira com a carenagem rachada e os itens de proteção: alarme, cinto, luz e botão de emergência",
          question: "Pode operar com proteção danificada?",
          alternatives: [
            { id: "a", text: "Sim, se for só um trecho curto.", correct: false },
            { id: "b", text: "Não. Cinto, buzina, alarme, luzes, proteção superior e botão de emergência devem estar funcionando.", correct: true },
            { id: "c", text: "Só o cinto pode ficar solto.", correct: false }
          ],
          explanation: "Não se opera com proteção danificada. Cinto, buzina, alarme, luzes, proteção superior e botão de emergência precisam estar funcionando.",
          review: "Proteção danificada"
        },
        {
          id: "nr11-m6-final",
          type: "finale",
          kicker: "Conclusão",
          image: "assets/fotos/capafinal.png",
          eyebrow: "Treinamento concluído",
          title: "Parabéns",
          body: "Você concluiu o treinamento de operação da transpaleteira.",
          quote: "Cada cuidado conta.",
          chips: ["NR-11", "NR-12", "Transpaleteira", "Capacitação"]
        }
      ]
    }
  ]
};
