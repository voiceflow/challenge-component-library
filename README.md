# Voiceflow Interview Component Library Project 💬

Welcome to Voiceflow's Component Library Project!

Congratulations on making it to this part of the interview process. 🥳

The goal of this project is to put together the foundations of a scalable and
robust component library and to implement some components using those patterns.

## Setup 📦

Make sure you have [Node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) on your computer.

Fork this repository (keep your repo private).

> to install all dependencies (node_modules) :

```sh
yarn install
```

> to start the component documentation on <http://localhost:61000> :

```sh
yarn dev
```

## Boilerplate 🧩

To reduce the scope of this challenge some things have already been setup for you, however we
encourage you to change anything that isn't explicitly listed as a requirement.
[React](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/) and
[ESLint](https://eslint.org/) have already been installed and configured for this repository.
There is also a lightweight Storybook alternative called [Ladle](https://ladle.dev/) setup,
however it was only chosen to keep this template simple and is not a required technology choice
(feel free to replace this with Storybook or any other tool you prefer).

## Overview ℹ️

This challenge requires setting up the foundation for a scalable component library.
Imagine this repository will be used to implement components from an existing mature design system,
which libraries, patterns and tools would you use to ensure a smooth component development process?

One critical decision, how to apply styles to your components, has been
left entirely to your discretion.
We also expect you to choose tools and patterns to effectively test the components
you will be creating for this challenge.
You may also want to replace our component documentation solution (Ladle) with
Storybook or another alternative depending on the features you want to leverage when documenting.
You should prepare to defend all choices made about technology and tools used in your implementation.

In addition to the foundation there are three components that must be implemented:

1. [A button component with interactivity states](#button-component)
1. [An image component with multiple variants](#image-component)
1. [A stateful layout system with multiple views](#document-manager-component)

We will be looking for strong, repeatable and consistent patterns that can be
composed to implement a larger and more complex design system, such as the one used at Voiceflow.
Keep in mind that this component library and the patterns used to create it will need to be learned
and used by multiple other teams, so they should be intuitive and scale to be used on hundreds of components.

Feel free to modify the code in this repository as much as you want
**except for files in the `__stdlib` directory**.

## Requirements ✅

- [x] A component library built using `React` and `TypeScript`
- [x] The `build` script in `package.json` should create an asset that can be published to `npm`
- [x] The `dev` script in `package.json` should run a hot-reload dev server for the component documentation
- [ ] Files should be organized with a directory structure that could scale to 100+ components
- [ ] Choose a styling solution and use it to add styles to the components you implement
- [ ] Your components should be tested with your choice of testing tools

  - the type of tests, number of tests and what is tested are up to you
- [ ] Your components should be documented using either Ladle or the tool of your choice
  - the scope and details of this documentation are up to you
- [ ] Implement the `Button`, `Image` and `DocumentManager` components as per their requirements

### Button Component

The goal for this component is to perfectly replicate a provided design for a button that
includes interactivity states.

**Design Asset**: <https://www.figma.com/file/e1V5isQ4fOSNGOQ5ckgPBx/Buttons?node-id=0%3A1&t=JJhcZKErMeOyCRtH-1>

#### Requirements

- Able to configure the button label
- Matches the designs provided
- Support for interactivity states

### Image Component

The goal for this component is to create a single component that can be used
to render an image in multiple different scenarios, each with their own unique styles.

This component has 3 variants:

- `small`
  - `width: 50px`
  - `height: 50px`
- `round`
  - image should be cropped to a circle
  - `height: 80px`
  - `width: 80px`
- `hero`
  - fill width of container
  - `height: 120px`

#### Requirements

- Accepts a prop to control the image being displayed
- Able to select the variant being used

### Document Manager Component

> For this you will be using the data and components in the provided `__stdlib` module.
> Specifically `Document`, `DOCUMENTS`, `DocumentCard` and `DocumentEditor`.

The goal for this component is to create a compound component that renders a simplified document explorer and editor.
This pattern is based loosely on the canvas and editor layout featured in Voiceflow's design tool.
When a document is active the associated editor should be visible and when no document is active
the editor should be hidden. The layout of the documents changes based on whether the editor is visible.

#### Requirements

- Accepts a prop to control the list of documents being displayed
  - documentation examples can use the `DOCUMENTS` array from the `__stdlib` module
- When a `DocumentCard` is clicked the editor slides in (if it isn't already)
  - the appropriate document should be displayed in the editor
  - when the space between the cards is clicked the editor should close
- The number of cards per row should changed depending on whether the editor is visible
  - when the editor is open there should be 3 cards per row
  - when the editor is closed there should be 4 cards per row
- The editor should slide in and out from the right-hand side of the screen

## Tips 📝

Unless you get fancy and go off the rails (which isn't a bad thing 👍) this project takes around ~1-4 hours if you are familiar with the stack. Keep in mind this isn't a race to get it done - it's about getting it done well.

- use TypeScript proficiently
- use repeatable, scalable patterns
- make modular, self-describing, and composable components
- consider the readability, maintainability of your code
- record all assumptions made

## Submission 📬

Send the link to your working repository to your recruiter's email.
