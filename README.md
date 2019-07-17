This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Tech stack & Tools

- Rendering: React 16.7.0
- Styles: Styled Components
- Linting: Eslint, Stylelint
- Code formatting: Prettier
- Unit tests: Jest, Enzyme
- Deployment: Netlify

## Setup

```
git clone git@github.com:elpassion/groomy.git
cd groomy
yarn install
```

## Development

Available scripts:

### `yarn start`

Runs the app in the development mode at [http://localhost:3000](http://localhost:3000) with enabled hot reloading & ongoing linting verification (you should see any linting errors printed in the console).

### `yarn format:js`

Runs code formatter (prettier)

### `yarn format:css`

Runs scss linter (stylelint). Can be run with the `--fix` flag

### `yarn test`

Runs unit tests in a watch mode. Can be run with `--coverage` or `--verbose` flags

### `yarn run build`

It correctly bundles React in the production mode and optimizes the build for the best performance. Build results are available in the `/build/` directory

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
