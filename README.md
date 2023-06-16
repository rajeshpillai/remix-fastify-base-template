# Welcome to Remix!
The remix template with fastify, patch-package and pm2.

- [Remix Docs](https://remix.run/docs)

## Development

Start the Remix development asset server and the Express server by running:

```sh
npm run dev
```

This starts your app in development mode, which will purge the server require cache when Remix rebuilds assets so you don't need a process manager restarting the express server.

## Deployment

First, build your app for production:

```sh
npm run prod:build
```

Then run the app in production mode:

```sh
npm run prod:start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying express applications you should be right at home just make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

