<div align="center">
  
<img alt="Svelte" src="https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.png" width="100">

<h1>Svelte Avatar</h1>

A simple avatar component for Svelte.

</div>

<br />
<br />

[![npm version](https://badge.fury.io/js/svelte-avatar.svg)](https://www.npmjs.com/package/svelte-avatar) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)

This component display an avatar image with fallback to the name initials. This component is inspired from [react-user-avatar](https://github.com/wbinnssmith/react-user-avatar) and [vue-avatar](https://github.com/eliep/vue-avatar).

## Installation

`yarn add svelte-avatar`

or

`npm install svelte-avatar`

<em>Note: to use this library in sapper, install as devDependency. See the [link](https://github.com/sveltejs/sapper-template#using-external-components).</em>

## Usage

![example](./assets/example.png)

with image:

```js
<script>
  import Avatar from "svelte-avatar";
</script>

<Avatar name="John Walker" src="https://avatars0.githubusercontent.com/u/6810985?s=460&u=a2a24f33ad8d17377cef8163f596a7fbd1501cd4&v=4" />
```

with name:

```js
<script>
  import Avatar from "svelte-avatar";
</script>

<Avatar name="John Walker" />
```

## Prop

<table class="table">
<thead><tr>
  <th>Name</th><th>Required</th><th>Default</th><th>Type</th><th>Description</th>
</tr></thead>
<tbody>
  <tr><td>style</td>
    <td> N </td>
    <td> - </td>
    <td> String </td>
    <td>Style property for avatar wrapper.</td></tr>
  <tr><td>name</td>
    <td> N </td>
    <td> Avatar </td>
    <td> String </td>
    <td>The name that will be used to compute user initial (when 'src' property not set).</td></tr>
  <tr><td>initials</td>
    <td> N </td>
    <td> - </td>
    <td> String </td>
    <td>Force the displayed initials by overriding the computed ones.</td></tr>
  <tr><td>src</td>
    <td> N </td>
    <td> - </td>
    <td> String </td>
    <td>Path to the avatar image to display.</td></tr>
  <tr><td>bgColor</td>
    <td> N </td>
    <td> lightGray </td>
    <td> String </td>
    <td>The avatar background color to use if no image is provided.</td></tr>
  <tr><td>textColor</td>
    <td> N </td>
    <td> white </td>
    <td> String </td>
    <td>The font color used to render the user initials.</td></tr>
  <tr><td>size</td>
    <td> N </td>
    <td> 50px </td>
    <td> String </td>
    <td>The avatar size.</td></tr>
  <tr><td>borderRadius</td>
    <td> N </td>
    <td> 50% </td>
    <td> String </td>
    <td>The border-radius css property of avatar.</td></tr>
  <tr><td>square</td>
    <td> N </td>
    <td> false </td>
    <td> Boolean </td>
    <td>If true, Avatar will be a Square</td></tr>
  <tr><td>randomBgColor</td>
    <td> N </td>
    <td> false </td>
    <td> Boolean </td>
    <td>If true, Avatar background will be colored randomly</td></tr>
</tbody>
</table>

## Build Setup

```bash
# install dependencies
yarn
# or
npm i

# serve gh pages with hot reload at localhost:5000
yarn dev
# or
npm run dev

# build
yarn build
# or
npm run build
```

## Test

```bash
yarn test
# or
npm test
```

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-avatar.png)](https://nodei.co/npm/svelte-avatar/)

## License

Released under the [MIT](./LICENSE) License.
