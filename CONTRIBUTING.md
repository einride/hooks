# Contributing

Thanks for showing interest in contributing to Einride Hooks!

## Adding New Hooks

Only hooks that are generally usable at Einride are added in this central hooks
project.

## Pull Request Guidelines

Einride Hooks is using the
[Conventional Commits](https://www.conventionalcommits.org/) commit message
convention.

All hooks should come with one hook file `useHook.ts` and one test file
`useHook.test.ts` in a `useHook` directory. All hooks should be documented with
appropriate [JSDoc](https://jsdoc.app/).

Before opening a PR, please make sure you get no errors when running
`yarn review`.
