# Intro to React
This project includes following packages:
 - React v16.8
 - React router
 - TailwindCSS

## How to run
1. Make sure NodeJS and NPM is installed
2. Open terminal/cmd and go to root of this project
3. Run the command `npm install`
4. Run the command `npm start`
5. Browser opens webpage `localhost:3000`

## How the application is structured
 - index.tsx is where we initialize our application starts. This file makes sure to attach our application in the HTML.
 - App.tsx is the entry point for our application and the one that index.tsx calls. Routing is controlled here.
 - components/* is the directory for all our components that can be used. Components can use other components
 - pages/* is the directory for all pages. These pages use components.

Feel free to restructure your app to have it look like you want it too.

## Important things to remember
### Keep components small
By keeping your components small it is easier to maintain different components and reuse them.

### Smart and dumb components
A smart component is defined as a component that stores logic.

A dumb component is defined as a component that is only visual. Often it doesn't even contain state (can do in rare cases) but only receives data to visualize from props.

Try have a lot of dumb components and a few smart components.

### Simple over complexity
Try not to introduce too many libraries just because they are popular. This often results in a more complex application that is harder to maintain.


## React
React is a JavaScript library for building UI.

## Typescript
Typescript is a superset of Javascript. Typescript introduces a lot of extra stuff to Javascript such as types, enums, interfaces etc.

## Tailwind CSS
Tailwind is utility-first and provides highly composable, low-level utility classes that make it easy to build complex user interfaces.

Tailwind is not a UI kit like Bootstrap, so it doesn't have a default theme and no built-in UI components.

The problem that is often seen by using css is that everytime the css is changed it might break the design on some pages because more elements are using the same classes.
Tailwind tries to solve that problem by providing low-level utility classes to built up the design. These classes are never changed.

Documentation for Tailwind CSS can be found [here](https://tailwindcss.com/docs/what-is-tailwind).