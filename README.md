# ts-template

English | [中文](./README.CN.md)

- support output `cjs / mjs / umd`
- support generate `.d.ts`
- `pnpm`
- `vitest`

## How

`degit https://github.com/ChpShy/ts-template.git project-name`

## ⚠️Notice ⚠️

### rollup.config.js

`change [filename] to your app name what you want to use. e.g window.xxx`

## run module command

- `pnpm run dev --filter pag1`
- `pnpm run dev --filter pag2`

## install global dependencies

- `pnpm i -w xxx`

## install module dependencies

- `pnpm i xxx --filter pag1`

## if git hooks not effective

run `npx simple-git-hooks`
