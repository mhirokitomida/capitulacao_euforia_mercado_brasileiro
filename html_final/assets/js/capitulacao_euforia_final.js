
const META = window.HTML_FINAL_META || {};
const GRAFICOS = META.grafico_catalogo || [];
const TABELAS = META.tabela_catalogo || [];

function byViewer(items, viewer) {
  return items.filter(x => x.viewer === viewer);
}

function initIframeViewer(viewer, items, tipo) {
  const select = document.getElementById(`${tipo}_select_${viewer}`);
  const frame = document.getElementById(`${tipo}_frame_${viewer}`);
  const openBtn = document.getElementById(`${tipo}_open_${viewer}`);
  const caption = document.getElementById(`${tipo}_caption_${viewer}`);

  if (!select || !frame || !openBtn || !caption) return;

  select.innerHTML = "";

  if (!items.length) {
    const opt = document.createElement("option");
    opt.value = "";
    opt.textContent = "Nenhum item disponível";
    select.appendChild(opt);
    frame.src = "about:blank";
    openBtn.href = "#";
    caption.textContent = "Nenhum item disponível para esta seção.";
    return;
  }

  items.forEach((item, idx) => {
    const opt = document.createElement("option");
    opt.value = idx;
    opt.textContent = item.titulo;
    select.appendChild(opt);
  });

  const sync = () => {
    const item = items[Number(select.value) || 0];
    const caminho = item.caminho_relativo || item.caminho_html_rel || "";

    frame.src = caminho || "about:blank";
    openBtn.href = caminho || "#";
    caption.textContent = item.subtitulo || item.titulo || "";
  };

  select.addEventListener("change", sync);
  select.value = 0;
  sync();
}

function initActiveSectionNav() {
  const sections = Array.from(document.querySelectorAll("section[id]"));
  const links = Array.from(document.querySelectorAll(".nav-link"));

  if (!sections.length || !links.length) return;

  const onScroll = () => {
    let currentId = sections[0].id;
    const offset = window.scrollY + 185;

    sections.forEach(sec => {
      if (sec.offsetTop <= offset) currentId = sec.id;
    });

    links.forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
    });
  };

  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

document.addEventListener("DOMContentLoaded", () => {
  initIframeViewer("performance", byViewer(GRAFICOS, "performance"), "grafico");
  initIframeViewer("risco", byViewer(GRAFICOS, "risco"), "grafico");
  initIframeViewer("capitulacao_euforia", byViewer(GRAFICOS, "capitulacao_euforia"), "grafico");
  initIframeViewer("inferencia", byViewer(GRAFICOS, "inferencia"), "grafico");
  initIframeViewer("composicao", byViewer(GRAFICOS, "composicao"), "grafico");
  initIframeViewer("auditoria", byViewer(GRAFICOS, "auditoria"), "grafico");

  initIframeViewer("resumo", byViewer(TABELAS, "resumo"), "tabela");
  initIframeViewer("performance_tab", byViewer(TABELAS, "performance"), "tabela");
  initIframeViewer("risco_tab", byViewer(TABELAS, "risco"), "tabela");
  initIframeViewer("inferencia_tab", byViewer(TABELAS, "inferencia"), "tabela");
  initIframeViewer("composicao_tab", byViewer(TABELAS, "composicao"), "tabela");

  initActiveSectionNav();
});
