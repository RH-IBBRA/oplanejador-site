/* ============================================================
   oPlanejador — comportamento da página
   ------------------------------------------------------------
   Não guarda conteúdo: só aplica o que está em assets/config.js.
   Regras que garante, conforme o LEIA-ME do repasse:
   - link só fica ativo quando o destino está confirmado;
   - cartão sem destino real não aparece na versão pública;
   - material sem arquivo real não é anunciado;
   - no rascunho, tudo que falta aparece marcado.
   ============================================================ */

(function () {
  'use strict';

  var cfg = (typeof OP_CONFIG === 'object' && OP_CONFIG) ? OP_CONFIG : {};
  var rascunho = cfg.modo !== 'publico';
  var canais = cfg.canais || {};
  var expansao = cfg.expansao || {};
  var contato = cfg.contato || {};
  var materiais = Array.isArray(cfg.materiais) ? cfg.materiais : [];

  function mostrar(el) { if (el) el.hidden = false; }
  function esconder(el) { if (el) el.hidden = true; }
  function ativo(c) { return !!(c && c.confirmado && c.url); }

  function externo(a, url) {
    a.href = url;
    if (/^https?:/i.test(url)) { a.target = '_blank'; a.rel = 'noopener'; }
  }

  /* ---------- 1. Modo público ---------- */
  if (!rascunho) document.body.classList.add('publico');

  /* ---------- 2. Canais ---------- */
  var visiveis = 0;
  document.querySelectorAll('[data-canal]').forEach(function (cartao) {
    var c = canais[cartao.getAttribute('data-canal')] || {};
    var link = cartao.querySelector('[data-canal-link]');
    var aviso = cartao.querySelector('[data-canal-pendencia]');
    var nota = cartao.querySelector('[data-canal-nota]');
    var arroba = cartao.querySelector('[data-canal-arroba]');

    if (arroba && c.arroba) arroba.textContent = c.arroba;

    if (ativo(c)) {
      if (link) { externo(link, c.url); mostrar(link); }
      if (aviso) aviso.remove();
      visiveis++;
      return;
    }
    if (nota && c.nota) nota.textContent = c.nota;
    if (rascunho) { visiveis++; } else { esconder(cartao); }
  });

  if (!visiveis) {
    esconder(document.getElementById('conteudos'));
    document.querySelectorAll('a[href="#conteudos"]').forEach(function (a) {
      a.href = '#para-quem';
    });
  }

  /* ---------- 3. Contato ---------- */
  var email = (contato.email || '').trim();
  var cLink = document.getElementById('contatoLink');
  if (email && cLink) {
    cLink.href = 'mailto:' + email;
    cLink.textContent = email;
    mostrar(cLink);
    var cPend = document.getElementById('contatoPendencia');
    if (cPend) cPend.remove();
  }

  /* ---------- 4. Materiais ---------- */
  var lista = document.getElementById('listaMateriais');
  if (lista) {
    if (materiais.length) {
      lista.classList.remove('pendente-bloco');
      lista.querySelectorAll('[data-material-modelo]').forEach(function (el) { el.remove(); });

      materiais.forEach(function (m) {
        var art = document.createElement('article');
        art.className = 'material';

        var detalhe = [m.formato, m.aula].filter(Boolean).join(' · ');
        if (detalhe) {
          var meta = document.createElement('p');
          meta.className = 'material-meta';
          meta.textContent = detalhe;
          art.appendChild(meta);
        }

        var h3 = document.createElement('h3');
        h3.textContent = m.titulo || 'Material';
        art.appendChild(h3);

        if (m.problema) {
          var p = document.createElement('p');
          p.textContent = m.problema;
          art.appendChild(p);
        }

        if (m.url) {
          var a = document.createElement('a');
          a.className = 'botao botao-contorno';
          a.textContent = 'Acessar material';
          externo(a, m.url);
          art.appendChild(a);
        }
        lista.appendChild(art);
      });
    } else if (!rascunho) {
      esconder(document.getElementById('materiais'));
    }
  }

  /* ---------- 5. Links do rodapé ---------- */
  var rodape = document.getElementById('rodapeLinks');
  if (rodape) {
    var rotulos = { youtube: 'YouTube', instagram: 'Instagram', podcast: 'Podcast' };

    Object.keys(canais).forEach(function (k) {
      var c = canais[k];
      if (!ativo(c)) return;
      var a = document.createElement('a');
      a.textContent = rotulos[k] || k;
      externo(a, c.url);
      rodape.appendChild(a);
    });

    var contatoLink = document.createElement('a');
    contatoLink.textContent = 'Contato';
    contatoLink.href = '#contato';
    rodape.appendChild(contatoLink);

    Object.keys(expansao).forEach(function (k) {
      var c = expansao[k];
      if (!ativo(c)) return;
      var a = document.createElement('a');
      a.textContent = c.rotulo || k;
      externo(a, c.url);
      rodape.appendChild(a);
    });
  }

  /* ---------- 6. Itens de menu sem destino visível ---------- */
  document.querySelectorAll('.menu a[href^="#"]').forEach(function (a) {
    var alvo = document.getElementById(a.getAttribute('href').slice(1));
    if (!alvo || alvo.hidden) esconder(a);
  });
})();
