# TypeScript Next.js SSR

Server Side Rendering boilerplate using Next.js with TypeScript.

### Run the projects

Install it and run development mode:

```bash
npm install
npm build
npm run dev
# or
yarn
yarn build
yarn dev
```

Install it and run production mode:

```bash
npm install
npm build
npm run start
# or
yarn
yarn build
yarn start
```

## Project Structure

`$ components` : to save our component such as button, grid layout, table, etc.
`$ containers` : to save our UI layouts such as profile, register, login, etc.
`$ helpers` : to save our constant such as datetime format, default value, etc.
`$ interfaces` : to save our interfaces.
`$ libraries` : to save our API Class to communicate with endpoint.
`$ pages` : to save our functionality such as when onChange, calling the API, etc.
`$ utils` : to save our functionality to interact with backend.

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
