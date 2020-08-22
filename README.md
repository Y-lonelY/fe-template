# FE-TEMPLATE

This is a fe-template **React** project based on [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) and (antd)[https://ant.design/docs/react/introduce-cn]

## init module

1. In `.prettierrc` set `{ "endOfLine": "auto" }` to solve **Delete \`cr\` eslint(prettier/prettier)**

2. `craco.config.js` use to override config of create react app，you can see [this](https://github.com/gsoft-inc/craco) to learn more

3. you need to config `src/typing.d.ts` to declare global moduels, which will be compile by ts

4. if you want to config **alias**, you can add `alias` params in `tsconfig.json`

