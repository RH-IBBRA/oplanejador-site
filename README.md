# oPlanejador — site (rascunho)

Site pessoal de Leonardo Ces para formar e desenvolver **Financial Advisors**.
Uma página só: apresenta o projeto e leva o visitante para as aulas, os materiais
gratuitos e o contato. **Não é o site da IBBRA.**

Implementação da **home aprovada por Leonardo** (identidade v0.5 "Caderno",
aprovada em 12/10/2026; pacote de repasse `oPlanejador_site_repasse_Marcelo_v1.1`,
de 14/10/2026). A especificação visual é o `site-referencia/index.html` do pacote.

Estático: HTML, CSS e JS, sem build. A única dependência externa são as fontes
(Google Fonts, licença OFL).

## Estado

Em **modo rascunho**: `noindex` ativo, faixa de aviso no topo e marcações de
pendência visíveis. Pendências e checklist em [ACEITE.md](ACEITE.md).

## Como abrir

- Duplo clique em `index.html`, ou
- `powershell -ExecutionPolicy Bypass -File serve.ps1` → `http://localhost:8899`

## Arquivos

| Arquivo | O que é |
| --- | --- |
| `index.html` | a página inteira; os **textos** ficam aqui |
| `assets/config.js` | **links, materiais, contato e o modo** (rascunho/público) |
| `assets/style.css` | cores, fontes e escala — tudo no `:root` no topo |
| `assets/app.js` | aplica o `config.js` na página; não guarda conteúdo |
| `assets/img/` | fotos aprovadas (1200×1800) e a imagem de compartilhamento |
| `assets/icons/` | favicon (ICO, SVG, 32px), apple-touch e assinatura em SVG |
| `serve.ps1` | servidor local opcional (fora do deploy) |
| `_arquivo/` | conceito anterior ao repasse, fora do deploy |

A identidade completa (9 SVG e 18 PNG da assinatura, avatar e favicon) está no
pacote de repasse e no Dropbox de Leonardo, em `/oPlanejador/Identidade`.

## Como editar

**Cores e tipografia:** o bloco `:root` no início de `assets/style.css`.
**Não alterar as cores e as fontes da marca sem aprovação de Leonardo.**

**Textos:** direto no `index.html`, com cada seção comentada.

**Links, materiais e contato:** só o `assets/config.js`. As regras que o site
garante sozinho, conforme o LEIA-ME do repasse:

- link só fica ativo quando o destino está confirmado;
- canal sem destino real não aparece na versão pública;
- material sem arquivo real não é anunciado — a seção some se não houver nenhum;
- no rascunho, tudo que falta aparece marcado.

## Como virar a versão pública

Só depois da aprovação de Leonardo:

1. Preencher `assets/config.js` com a URL do podcast e o primeiro material real.
2. Trocar `modo: 'rascunho'` por `modo: 'publico'`.
3. Remover a linha `<meta name="robots" content="noindex, nofollow" />` do `index.html`.
4. Testar todos os links com destinos reais.

## Deploy

Repositório: `RH-IBBRA/oplanejador-site` (branch `main`), renomeado em 15/10/2026
(antes `LEO-CES-Mentoria`, do conceito anterior). Sem build: o repositório
é servido como está. Domínio `oplanejador.com` no Squarespace Domains, no nome de
Leonardo, que é o único administrador — o acesso ao DNS é nominal e restrito, e
vem quando a implantação começar (S03.11).

## Hospedagem e custos

Hospedado na **Vercel, no time da IBBRA (plano Pro)**, do qual Marcelo faz parte.
O site é estático e não consome build nem função serverless, então **não gera
custo incremental** — ele aproveita uma assinatura que já existe. Mas **não é
grátis**: a assinatura Pro é paga pela IBBRA.

Dois pontos para a entrega final, que o LEIA-ME do repasse levanta:

- O repasse pede **"contas no nome do projeto"** e, na entrega, **"acesso
  administrativo em nome de Leonardo"**. Hoje o projeto vive na organização da
  IBBRA, e o oPlanejador é explicitamente **"não é o site da IBBRA"**. Migrar
  para uma conta do projeto é decisão de Leonardo.
- Custos do site devem ser apresentados a Leonardo **separadamente** do teto de
  R$ 1.000/mês dos agentes. O valor a apresentar não é zero: é "sem custo
  incremental, sobre a assinatura Pro da IBBRA".

**Domínio:** `oplanejador.com` é o host oficial e serve a produção; o `www`
redireciona para ele (308). O `canonical`, o `og:url` e a `og:image` apontam
todos para a raiz — se o host oficial mudar, os três mudam juntos.

## Prazos

Rascunho navegável **18/10/2026** · testes de navegação e links 19–25/10 ·
publicação no lançamento integrado, a partir de 16/11, com aprovação de Leonardo.
