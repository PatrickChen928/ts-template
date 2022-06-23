# ts-template

中文 | [English](./README.md)

ts 开发模版

- 支持输出 `cjs / mjs / umd`
- 支持生成`.d.ts`
- `pnpm`
- `vitest`

## 怎么用

`degit https://github.com/ChpShy/ts-template.git project-name`

## ⚠️ 注意 ⚠️

### rollup.config.js

`把 [filename] 改成你想设置的应用的名称`

## 运行模块命令

- `pnpm run dev --filter pag1`
- `pnpm run dev --filter pag2`

## 安装全局依赖

- `pnpm i -w xxx`

## 安装模块依赖

- `pnpm i xxx --filter pag1`

## 如果 git 钩子未生效

执行 `npx simple-git-hooks`
