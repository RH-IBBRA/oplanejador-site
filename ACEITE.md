# Aceite e pendências — site oPlanejador

Referência: `LEIA-ME.md` do pacote `oPlanejador_site_repasse_Marcelo_v1.1`
(14/10/2026) e o briefing S04.15 v2.0 no Notion.
Construção: Marcelo. Aprovação de conteúdo e visual: Leonardo.

## Checklist de aceite (do pacote)

- [x] **Todas as seções da referência montadas, iguais no visual.** Conferido por
      medição em 390, 768, 1280 e 1440 px: largura de seção e de título idênticas
      à referência nas quatro larguras, mesma tipografia, mesmas cores, mesmas
      8 seções e os mesmos 6 títulos de nível 2.
- [x] **Rascunho navegável no celular e no computador, com `noindex`.** Sem
      rolagem horizontal em nenhuma das larguras testadas.
- [x] **Cores, fontes e textos editáveis e centralizados.** Paleta e tipografia no
      `:root` de `assets/style.css`; links, materiais e contato em
      `assets/config.js`; textos no `index.html`. A referência do pacote tem 170
      estilos inline e o próprio arquivo pede "centralizar na implementação" —
      foi o que esta implementação fez.
- [~] **Links e arquivos reais conferidos; pendentes ocultos na versão pública.**
      YouTube, Instagram e e-mail conferidos (abaixo). Falta a URL do podcast.
      O mecanismo de ocultar pendências na versão pública está pronto e testado.
- [ ] **Leonardo revisou textos, biografia e visual** nesta implementação.
- [x] **Acessos, manutenção e custos documentados** — no [README.md](README.md).

## Links: o que foi conferido em 14/10/2026

| Link | Situação |
| --- | --- |
| YouTube `@oplanejador360` | **confere** — canal "oPlanejador · Leonardo Ces". Botão ativo. |
| Instagram `@leonardoces` | **confere** — perfil no ar, 8.300 seguidores. **Isto encerra a pendência** "conferir o link quando a troca concluir" do LEIA-ME. |
| `@leonardoibbra` (antigo) | **morreu** após a troca, como esperado. Nenhum link do site aponta para lá. |
| E-mail `leonardo@oplanejador.com` | aplicado como `mailto:`. **Caixa ativa, confirmada por Marcelo em 15/10/2026.** |
| Podcast | URL do show registrada em 26/10/2026 (`open.spotify.com/show/4mVIQbIXKf59G3o9fFGc6J`), mas **ainda não abre publicamente** — 404 na URL direta e oEmbed vazio, enquanto um show existente responde. O programa existe no Spotify for Creators; só aparece no Spotify depois do primeiro episódio publicado. Guardada no `config.js` desligada. Por decisão de Marcelo em 15/10/2026, o cartão mostra **"Em breve"** no lugar do botão, e continua visível também na versão pública. |

## Ainda pendente

- [ ] **Publicar o primeiro episódio** no Spotify for Creators, que é o que faz o show aparecer em open.spotify.com. A URL já está no `config.js`; falta só ela abrir. Até lá o cartão mostra "Em breve"; ao preencher `url` e `confirmado: true` no `config.js`, o aviso sai e o botão entra sozinho.
- [ ] **Primeiro material gratuito: "Mapa da Zona X".** Os cartões só aparecem
      com o arquivo real; hoje estão os espaços do modelo, visíveis só no rascunho.
- [ ] **Revisão da biografia** pelo Leonardo. O texto é o aprovado, com "15 anos";
      o briefing registra que eles se completam no início de 2027.
- [x] **Acesso ao DNS** de `oplanejador.com` — confirmado por Marcelo em 15/10/2026.
- [ ] **Plataforma de hospedagem** definida e documentada, com custos.

## Decisões tomadas na implementação

1. **A referência foi reimplementada, não copiada.** O LEIA-ME permite as duas
   coisas ("pode ser a base do código ou só a referência"), mas o requisito de
   textos e cores centralizados e editáveis por Leonardo não é compatível com os
   170 estilos inline do arquivo de referência.
2. **A pendência do Instagram foi encerrada** porque o link foi conferido e
   funciona. A referência ainda a mostra como pendente, por ter sido gerada antes
   da troca concluir.
3. **O link "Privacidade" do rodapé não foi incluído.** Na referência ele aponta
   para `#privacidade`, que não existe — seria um link morto, e o próprio LEIA-ME
   proíbe publicar link que não leva a lugar nenhum. O mesmo documento diz que a
   página de privacidade só é necessária havendo medição ou formulário, e o site
   não tem nenhum dos dois. Está preparado no `config.js` para entrar quando
   existir.
4. **O conceito anterior a este repasse foi arquivado**, não apagado: está em
   `_arquivo/` e no histórico do git. A identidade que havia sido proposta aqui
   (paleta azul/marfim, Georgia/Arial e um símbolo monogramático) foi substituída
   pela identidade v0.5 aprovada.
