# Bootstrap Migration Proof of Concept

This project demonstrates how to use both Bootstrap v4 and v5 side-by-side in a modern React/Vite application. It showcases scoping of Bootstrap versions using PostCSS, allowing legacy Bootstrap 4 components and new Bootstrap 5 components to coexist without style conflicts.

## Key Features

- **Bootstrap v4 and v5 loaded together**: Bootstrap 5 is installed via npm; Bootstrap 4 is downloaded as a static asset.
- **Scoped CSS**: PostCSS with `postcss-prefixwrap` is used to namespace each version (`.bs4` for v4, `.bs5` for v5), preventing style collisions.
- **One import**: Import the migration Bootstrap CSS from one stylesheet `<link rel="stylesheet" href="/bootstrap-migration.css" />`
- **Migration-friendly**: Easily migrate components from v4 to v5 by changing their wrapper class.
- **React + Vite**: Fast development environment with hot module replacement.

## How It Works

- Bootstrap 4 CSS and JS are downloaded and placed in the `public` folder.
- Bootstrap 5 is installed via npm and imported in the app.
- PostCSS processes the CSS to scope each version.
- Components are wrapped in either `.bs4` or `.bs5` via a reusable `Bootstrap` component to apply the correct styles.

## Usage

1. Install dependencies: `npm install`
2. Download Bootstrap 4 assets: `npm run download:bootstrap4`
3. Build scoped CSS: `npm run build:css`
4. Start the app: `npm run dev`

## How to Set Up Bootstrap v4 and v5 Scoping in Any Project

Follow these steps to recreate the migration proof of concept in your own repository:

1. **Initialize your project**
   
   Create a new project folder and initialize with your preferred frontend stack (e.g., React + Vite):

     ```bash
     npm create vite@latest my-app -- --template react
     cd my-app
     npm install
     ```

2. **Install Bootstrap v5 via npm**
   ```bash
   npm install bootstrap
   ```

3. **Download Bootstrap v4 as scoped assets**
   
   Download the CSS and JS files from the official CDN:

     ```bash
     curl -o public/bootstrap4-scoped.css https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css
     curl -o public/bootstrap4-scoped.bundle.min.js https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js
     ```

4. **Install PostCSS and postcss-prefixwrap**
   ```bash
   npm install --save-dev postcss postcss-cli postcss-prefixwrap sass
   ```

5. **Configure PostCSS**
   
   Create `postcss.config.cjs` in your project root:

     ```js
     import prefixWrap from 'postcss-prefixwrap';
     export default {
       plugins: [
         prefixWrap('.bs4'),
         prefixWrap('.bs5'),
       ],
     };
     ```

6. **Create a migration SCSS file that can later be ejected**
   
   Example: `src/styles/bootstrap-migration.scss`

     ```scss
     @use "bootstrap/scss/bootstrap" as *;
     @import "../public/bootstrap4.css";
     ```

7. **Build the migration CSS**
   
   Add a script to your `package.json`:

     ```json
     "build:css": "sass --load-path=node_modules src/styles/bootstrap-migration.scss public/bootstrap-migration.css && postcss public/bootstrap-migration.css -o public/bootstrap-migration.css"
     ```
   - Run:
     ```bash
     npm run build:css
     ```

8. **Reference the migration CSS in your HTML**
   
   Add to your `index.html`:

     ```html
     <link rel="stylesheet" href="/bootstrap-migration.css" />
     ```

9. **Scope your components**
   - Create a reusable component that takes in a `version` and `children` which prefixes with either version 4 or 5 of Bootstrap
      - Wrap Bootstrap 4 components in `<div class="bs4">...</div>`
      - Wrap Bootstrap 5 components in `<div class="bs5">...</div>`

---


## Why?

This setup is ideal for teams migrating large codebases from Bootstrap 4 to 5, allowing gradual migration and easy comparison of styles and features with with clear style separation and minimal conflicts and without fighting breaking changes.

