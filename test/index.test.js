/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

describe('DevOps Landing Page', () => {
  let container;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
    document.documentElement.innerHTML = html.toString();
    container = document.body;
  });

  test('Debe contener el título principal DevOps', () => {
    const headerTitle = container.querySelector('h1');
    expect(headerTitle).not.toBeNull();
    expect(headerTitle.textContent).toMatch(/DevOps/i);
  });

  test('Debe tener la sección "¿Qué es DevOps?"', () => {
    const aboutSection = container.querySelector('#about');
    expect(aboutSection).not.toBeNull();
    expect(aboutSection.textContent).toMatch(/¿Qué es DevOps\?/i);
  });

  test('Debe incluir al menos 3 herramientas', () => {
    const toolCards = container.querySelectorAll('#tools .bg-slate-700');
    expect(toolCards.length).toBeGreaterThanOrEqual(3);
  });

  test('Footer contiene el texto de derechos reservados', () => {
    const footer = container.querySelector('footer');
    expect(footer.textContent).toMatch(/Todos los derechos reservados/i);
  });
});
