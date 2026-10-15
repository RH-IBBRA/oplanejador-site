/* ============================================================
   oPlanejador — configurações centrais
   ------------------------------------------------------------
   Edite SOMENTE este arquivo para: ligar/desligar canais, trocar
   URLs, cadastrar materiais e definir o contato. Não é preciso
   mexer em HTML ou CSS.

   modo: 'rascunho' -> mostra as marcações de pendência
         'publico'  -> esconde tudo que ainda não tem destino real

   Links confirmados no pacote de repasse v1.1 (14/10/2026).
   ============================================================ */

var OP_CONFIG = {

  modo: 'rascunho',

  canais: {
    youtube: {
      arroba: '@oplanejador360',
      url: 'https://www.youtube.com/@oplanejador360',
      confirmado: true,
      nota: ''
    },
    instagram: {
      arroba: '@leonardoces',
      url: 'https://www.instagram.com/leonardoces',
      /* A troca de @leonardoibbra para @leonardoces foi feita em 14/10/2026.
         Link conferido e funcionando na mesma data, o que encerra a pendência
         "conferir quando a troca concluir" do LEIA-ME. */
      confirmado: true,
      nota: ''
    },
    podcast: {
      arroba: 'Spotify · YouTube',
      url: '',
      confirmado: false,
      /* emBreve: o cartao continua visivel, inclusive na versao publica, com o
         aviso "Em breve" no lugar do botao. Nao e pendencia interna: e um
         aviso ao visitante. Ao receber a URL, preencher url e por
         confirmado: true — o aviso sai e o botao entra sozinho. */
      emBreve: true,
      avisoBreve: 'Em breve',
      nota: ''
    }
  },

  /* Entram no rodapé quando confirmados. */
  expansao: {
    privacidade: {
      rotulo: 'Privacidade',
      url: '',
      confirmado: false,
      /* O LEIA-ME pede página de privacidade só se houver medição
         (analytics) ou formulário. Hoje o site não tem nenhum dos dois.
         Se entrar, criar a página e preencher a url aqui. */
      nota: 'Página de privacidade: necessária apenas se entrar analytics ou formulário.'
    }
  },

  contato: {
    email: 'leonardo@oplanejador.com',
    nota: ''
  },

  /* Cadastrar só o que já existe como arquivo real. Modelo:
     {
       titulo:   'Mapa da Zona X',
       problema: 'Que problema o material ajuda a resolver, em uma frase.',
       formato:  'PDF, 4 páginas',
       aula:     'Aula relacionada',
       url:      'materiais/mapa-da-zona-x.pdf'
     }
     Lista vazia: no rascunho ficam os espaços do modelo; no modo
     'publico' a seção some. Primeiro material previsto: "Mapa da Zona X". */
  materiais: []
};
