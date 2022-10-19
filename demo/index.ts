import '../src/components/button/Button';

window.addEventListener('load', () => {
    const root = document.querySelector('div#demo-root');

    const heading = document.createElement('h1');
    heading.innerHTML = 'Button Component';
    const jrButton = document.createElement('jr-button');
    root.appendChild(heading);
    root.appendChild(jrButton);
});

