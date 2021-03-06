## IoC + Shell/Islands + Zones Demo

> A demo tackling a microfrontend architecture applying some of the techniques shown in [Trulia's talk](https://www.youtube.com/watch?v=f7BMSVhZan0)

Things done so far:

* [x] Set up a monorepo
* [x] Implement IoC pattern via `@kwri/ioc`
* [x] Implement Shell + Islands pattern via `@kwri/shell`
* [ ] Implement Zones with Next.js

## To run it locally do the following
Start by building all the deps:

```
npm install
npm run build
```

After that, start each individual island: 

```
  npm run island-one
  npm run island-two
```

Then, start the proxy that'll allow them to play nicely:

```
  npm run proxy
```

## License

MIT © [klujanrosas](https://github.com/klujanrosas)
