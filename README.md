# React Redux Typescript boiler plate

### Table of content

#### Stacks
-   [Stack](#stack)

#### Getting started
-   [Start the project](#start-the-project)

#### Folder structure
-   [Folder structure](#understand-folder-structure)

#### Tests
-   [Run a test](#run-a-test)

<br /> 

### Stack

-   [React V17](https://reactjs.org/docs/hello-world.html)
-   [TypeScript (typing for js)](https://www.typescriptlang.org/docs/handbook/basic-types.html)
-   [Redux (state management)](https://redux.js.org/)
-   [Redux Dev Tools (chrome plugin to see redux state)](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr)
-   [React router v5 for navigation](https://reactrouter.com/web/guides/quick-start)
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
-   [React i18next for translation](https://react.i18next.com/)
-   [Linted with AirBnB standard](https://github.com/airbnb/javascript)

### Start the project

Ensure your `node -v` is 10 || 12 || >=14 then :

```
  yarn
  yarn start
```

Go to : http://localhost:3000

For a bette Redux experience : 

add redux-dev-tool extension to chrome : https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=fr


### Understand folder structure

    .
    ├── node_modules             # All installed node_modules using `npm install`
    ├──src
        ├── assets               # Fonts and images
        ├── components           # All GENERICS components
        ├── containers           # Bloc of logic (generally redux connected)
        ├── config               # General config (i18, uri, jest...)
        ├── constants            # All general constants
        ├── tests                # Tests
        ├── hooks                # Generic hooks used by react components and containers
        ├── locales              # Contains all translations used by i18n
        ├── redux                # Redux models, used to read and write in the store (contain reducers,action, selectors)
        ├── services             # Global services
        ├── style                # Contain general style, theme, colors...
        ├── pages                # Pages entry point, made of multiple components and logic
        ├── index.ts             # Entry point (contain all the providers)
        ├── global.d.ts          # General config typing ( to resolve font extension for example)
        ├── package.json         # All libs to be installed for the project to run
        ├── tsconfig.json        # Typescript default config
        └── README.md            # The file you are reading, right now

### Run a test

```
yarn test
```
