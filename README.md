# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```
# Run in Docker
Initial build:
```bash
docker-compose up -d --build
```

only start the project:

```bash
docker-compose up -d
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.



#### Variables, classes, functions, etc. naming convention ####
- **.ts** Control over the consistent naming of variables, classes, functions, etc. is assigned to eslint. The [@typescript-eslint/naming-convention](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md) rule is used for this purpose. Config for rule placed in **naming-convention.js**.

- **.vue** We should use components name in Pascal case. It is more readable and consistent with component class name. So global search by component name will be more efficient.

  ```vue

  <script setup lang="ts">
  const welcomeMessage = ref('Hello world!');
  </script>

  <template>
    <div class="home">
      <HelloWorld :msg="welcomeMessage"/>
    </div>
  </template>
  ```

We should follow [Vue Style Guide](https://vuejs.org/v2/style-guide/) and use the **Base** prefix to name common components.




### Project architecture ###
- **assets** - General assets. Like styles, fonts, images, etc.

- **auth** - All files related to authorization.

- **docker** - Responsible for deployment process. Ignored by eslint.

- **components** - Components grouped by their usage. For example `components/Home/HelloWorld`, `components/Home/HomePage`,
	`components/Navigation/NavLink`, etc. Nuxt auto-import the components you use. If you need to add new folder under components, you should add it to nuxt.config.js.

- **locales** - Contain required files for i18n translation library.

- **layouts** - Contain different page layouts. [More details](https://nuxtjs.org/docs/directory-structure/layouts)

- **middleware** - Contain Nuxt middleware files. [More details](https://nuxtjs.org/docs/directory-structure/middleware)

- **pages** - Contain pages with vue router integration. Each vue file added to this folder will force Nuxt to generate new route.[More details](https://nuxtjs.org/docs/directory-structure/pages)

- **settings** - General application settings.

- **public** - The static directory is directly mapped to the server root and contains files that likely won't be changed. [More details](https://nuxtjs.org/docs/directory-structure/static)

- **composables** - Vue reusable composables if they are used across multiple components. Tools that do not depend on components or pages and can be used in any of the component or outside of them. Should provide an external API which if possible not tied to a specific technology or library. Composables are stateless.

- **stores** - Pinia store for application state. Stores are stateful.[More details](https://pinia.vuejs.org/ssr/nuxt.html)

- **types** - Typescript assets, such as an interfaces, types, enums etc.

- **utils** - Contains helper functions whose task is to take a value, perform some kind of action with it and return a new value. At the same time, without producing any side effects.

#### Files and folders organization and naming convention ####
We call general folders in a **kebab-case** and name should be as simple as possible. For example **components**, **modules**, **services** etc. Some of these folders will contain more specific content - *component*, *service*, *module* etc. If this content require more than one file, we should create own folder for it, in **PascalCase**. *Pages* folder is exception, because Nuxt creating routes based on folder name, so they should be named in **kebab-case**.
