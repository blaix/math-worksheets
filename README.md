# Worksheet Generator

Web app for generating algebra worksheets using the [prettynice framework](https://github.com/blaix/prettynice).

You can see it running at https://math-worksheets.fly.dev

## Usage

Initial setup: `npm install`

Start local dev server: `npm run dev`

The dev server will restart when files change
(but you will need to refresh the browser yourself).

## Now what?

Take a look at [`server/src/Main.gren`](server/src/Main.gren) for the server-side logic, [`client/src/Components/Equations.gren`](client/src/Components/Equations.gren) for the client-side logic, and [`client/src/Components/Equations.js`](client/src/Components/Equations.js) for the little bit of js needed for the print button.

If you aren't familiar with prettynice, take a look at [the README](https://github.com/blaix/prettynice?tab=readme-ov-file#pretty-nice-framework) or the [doc site](https://prettynice.dev/).

## Deployment

This repo is deployed Fly at https://math-worksheets.fly.dev/

You can [deploy your own fork to fly](https://fly.io/docs/reference/fly-launch/) or deploy anywhere that supports docker containers or node servers.

You can create an optimized production build in `dist/` with `npm run build`, and start the server with `npm start`.
See [`package.json`](package.json) for details.

## Distribution and Copyright

This is Free Software. All files in this repository are Copyright 2024-present Justin Blake and distributed without warranty under the terms of the [GNU Affero General Public License](https://www.gnu.org/licenses/agpl-3.0.en.html).

This means you can copy, fork, use, modify, and distribute this code however you want, even for commercial purposes, as long as you make the code, including your modifications, available under these same terms to anyone who uses it. This applies even if they are using it as a web app or service over a network.
