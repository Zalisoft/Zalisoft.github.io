# zalisoft.com React Next Js website

For more info about the project initial configuration roadmap, features and tools see https://github.com/ouedyan/nextjs-template.


## Scripts

Run the development server

```bash
yarn dev
```

Building for production

```bash
yarn build
```

Building for production and static deploying to GitHub Pages (gh-pages branch)

```bash
yarn deploy
```

Run in production mode

```bash
yarn start
```

Generate your changelog for the first release. This will tag a release without bumping the version

```bash
yarn run release --first-release
```

Generate typical changelog and bump version

```bash
yarn run release
```

## Project directory structure

Main folder structure

```
📂 components
  ...📄 {component}.tsx
  ...📂 {page}
     ...📄 {component}.tsx

📂 lib
  📂 data
    ...📄 {service}.ts
  📂 types
    ...📄 {type}.ts

📂 pages
  📂 api
    ...📄 {apiPath}.ts
  _app.tsx ?
  _document.tsx ?
  ...📄 {path}.ts

📂 public
  📂 icons
  📂 images
  📄 favicon.ico
  📄 robots.txt

📂 styles
  📄 globals.scss
```

## Project tech stack useful resources

### React

- [W3Schools React tutorial](https://www.w3schools.com/react) - Step-by-step guide to learning React.
- [React new Docs](https://beta.reactjs.org/learn) - react official documentation (in beta).
- [React old Docs](https://reactjs.org/docs) - react official documentation (to be replaced).

### Next.js

- [Learn Next.js](https://nextjs.org/learn) - the best way to start with next.js if you are new.
- [Next.js Docs](https://nextjs.org/docs) - learn about Next.js features and API.

### Tailwind Css

- [Tailwind Docs](https://tailwindcss.com/docs) - Tailwind Css official documentation and reference.
- [Tailwind with Next.js guide](https://tailwindcss.com/docs/guides/nextjs) - Tailwind installation guide with Next.js.

### Typescript

- [W3Schools Typescript tutorial](https://www.w3schools.com/typescript/) - Step-by-step guide to learning Typescript.
