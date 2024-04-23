# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint <i>rules.</i>

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint <i>rules:</i>

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<p>Task</p>
There are the following data structures describing the product – the Model interface and a set of parameters for this product. It is necessary to implement components on React that allow you to edit the Model structure – to put parameter values in this case, all parameters should be output and immediately available for editing, and the passed values in the structure are put down in the form of editing, which are passed to params: Param[], and also allow you to get the full structure in the getModel() method – containing all the entered parameter values. The solution should be easily extensible (for example, it should allow you to easily add new types of parameters – not only text, but for example numeric or with a list of values) Your implementation should work only with text parameters Input – type string.

The solution must be designed as a single file with all the components and types that are used.
