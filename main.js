let panels = document.querySelectorAll('.faq__panel');

function togglePanel(panel) {
  let openedPanel = document.querySelector('.faq__panel--opened');
  if (openedPanel) {
    if (openedPanel != panel) {
      openedPanel.classList.remove('faq__panel--opened');
    }
  }
  panel.classList.toggle('faq__panel--opened');
}

function initAccordion() {
  panels.forEach(panel => {
    panel.onclick = function () {
      togglePanel(panel);
    };
  });
}

initAccordion();
