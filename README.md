# Intro to React

This project includes following packages:

- React
- React router
- Typescript
- TailwindCSS
- FontAwesome

_This is not production ready and still need optimizations before going into production. Missing tree shaking, purge css, etc._

## How to run

1. Make sure [NodeJS](https://nodejs.org/en/download) is installed with npm.
2. Download this project to a local folder on your computer.
3. Open terminal/cmd and go the local folder where you just downloaded this project to.
4. Run the command `npm install`.
5. Run the command `npm start`.
6. Browser opens webpage `localhost:3000`.

_This project has included HMR (Hot Module Reloading) so it should be able to render your changes without refreshing the browser._

## How the application is structured

- **index.tsx** is the file that connects the application to the DOM.
- **App.tsx** is the entry point for our application. Routing is handled here, so any new routes must be inserted here.
- **components/\*** is the directory for all the components that can be used. Components can be used in other components.
- **pages/\*** is the directory for all pages. These pages use components.
- **assets/\*** is the directory for all assets such as images, icons, etc.

_Feel free to restructure your app to have it look like you want it to._

## Important things to remember

### Keep components small

By keeping your components small it is easier to maintain different components and reuse them.

### Smart and dumb components

A smart component is defined as a component that stores logic.

A dumb component is defined as a component that is only visual. Often it doesn't even contain state (can do in rare cases) but only receives data to visualize from props.

Try have a lot of dumb components and a few smart components.

### Simplicity over complexity

Try not to introduce too many libraries just because they are popular. This often results in a more complex application that is harder to maintain.

## React

React is a JavaScript library for building UI.

The new thing in this is React hooks which was just released in v16.8. Find a lot of custom hooks [here](https://nikgraf.github.io/react-hooks/).

[Thinking in React](https://reactjs.org/docs/thinking-in-react.html) written by Facebook.

## Typescript

Typescript is a superset of Javascript. Typescript introduces a lot of extra stuff to Javascript such as types, enums, interfaces etc.

## Tailwind CSS

Tailwind is utility-first and provides highly composable, low-level utility classes that make it easy to build complex user interfaces.

Tailwind is not a UI kit like Bootstrap, so it doesn't have a default theme and no built-in UI components.

The problem that is often seen by using css is that every time the css is changed it might break the design on some pages because more elements are using the same classes.
Tailwind tries to solve that problem by providing low-level utility classes to built up the design. These classes are never changed.

Documentation for Tailwind CSS can be found [here](https://tailwindcss.com/docs/what-is-tailwind).

_Edit `tailwind.js` if you need to customize your own values such as colors, sizes etc._

## FontAwesome

Providing vector icons. All icons can be seen [here](https://fontawesome.com/icons).

React-fontawesome is being used to integrate it nicely into React.
