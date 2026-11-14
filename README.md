# Vitória Cavallaro | Portfolio

Personal portfolio of a Software Engineering student focused on front-end development. It is a single-page site with a bilingual interface (Portuguese and English), light and dark themes, a project gallery and a working contact form.

**Live site:** https://vitoriacdev.github.io

## Features

- **Bilingual:** switch between Portuguese (PT) and English (EN) without reloading the page
- **Light and dark themes:** toggled with the `<>` button in the header
- **Responsive:** works on desktop, tablet and mobile
- **Project gallery:** featured projects on the home page, a full projects page and a detail page for each project (title, description, links, challenges and technical decisions)
- **Hover effects:** project cards expand on hover to reveal quick actions
- **Technologies marquee:** an infinite, auto-scrolling strip of the tools I use
- **Contact form:** messages are delivered to my email through [Formspree](https://formspree.io)
- **Privacy policy page**
- **Accessible basics:** semantic HTML, keyboard focus styles and reduced-motion support

## Built with

| Technology | Use |
| --- | --- |
| HTML5 | Structure and content |
| CSS3 | Layout, theming (CSS variables), animations and responsiveness |
| JavaScript (vanilla) | Translations, project rendering, navigation between pages, theme toggle and form submission |
| Formspree | Contact form backend |
| GitHub Pages | Hosting |

No frameworks or build tools: just plain HTML, CSS and JavaScript.

## Project structure

```
.
├── index.html        # Page structure
├── style.css         # Styles, themes and responsive rules
├── script.js         # Texts (PT/EN), projects list and site logic
├── README.md
└── assets/
    └── images/       # Profile photo and project screenshots
```

## Running locally

1. Clone the repository:

   ```bash
   git clone https://github.com/vitoriacdev/vitoriacdev.github.io.git
   ```

2. Open the folder and double-click `index.html`, or use the **Live Server** extension in VS Code ("Go Live").

No installation is needed.

## Customizing

- **Texts (PT/EN):** edit the `T` object at the top of `script.js`
- **Projects:** edit the `PR` list in `script.js`. Each project accepts a name, year, type, description, technologies, photo, GitHub link, live link, challenges and technical decisions
- **Colors:** change the CSS variables in the `:root` blocks at the top of `style.css`
- **Contact form:** replace the Formspree URL in the form section of `script.js` with your own endpoint

## Contact

- **Email:** contatovitoriacavallro@gmail.com
- **LinkedIn:** [linkedin.com/in/thamillycavallar0](https://linkedin.com/in/thamillycavallar0/)
- **GitHub:** [@vitoriacdev](https://github.com/vitoriacdev)

## License

© 2026 Vitória Cavallaro. All rights reserved.