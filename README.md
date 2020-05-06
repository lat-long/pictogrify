<p align="center">
  <h2 align="center">Pictogrify</h2>
  <p align="center">🎭 Generate unique pictograms from any text: https://luciorubeens.github.io/pictogrify/</p>
</p>

<p align="center"><img src="https://i.imgur.com/V7WcroX.png" width="600px" alt="Avatar"></p>
<p align="center">(More shapes and themes soon)</p>

## Background

This is a forked version of the [Pictogify tool by @luciorubeens](https://github.com/luciorubeens/pictogrify). While the original is setup for in-browser usage, this adaptation created an API and demo web app proof of concept.

## Structure

```
- src 
    - api:  Contains the node api for fetching avatars. Uses Express
        - app.js
        - routes.js
        - dist: Contains webpack output of bundled library and image sprites
            - pictogrify.js
            - sprite-{theme}.svg: Each theme is reduced to an SVG sprite with named elements
        - src
            - app: Contains modified version of Pictogrify library
                - pictogram.js: Core library; some methods, etc in here are still oriented toward in-browser usage rather than API. More adaptation and clean up work to be done here
                - setup.js:    Handles much of the SVG assembly
            - themes: Contains files for each available set of avatar image assets. #TODO: further define contents of themes
        - config.js:    Sets default Theme and exports theme assets
    - app: Contains the demo webpage for showcasing integration with API and testing output
        - index.html
        - assets
            - images
            - scripts
                - demoSite.js: Handles on-page changes and calls API to get avatars
            - styles
```

### API 
* Set port number in `.env`
* Build project with `npm run build`
    * You'll need to re-run this anytime you make changes to anything in the `/api/src/` directory in order to trigger weback compile
* Start server with `npm start`
* Make request to [http://localhost:3000/image/anystringhere](http://localhost:3000/image/anystringhere)
    * Response will contain object with your provided text string and the resulting avatar SVG.

## Webapp
* Update `apiURL` variable in `/serc/app/assets/scripts/demoSite.js` to match port specified for API
* Start webapp by running `npm start` in project root. (Uses `http-server` to load assets from `/src/app`)
    * Project should be live at [http://localhost:8080](http://localhost:8080)


## In-Browser Usage
* I havent tested this with the latest updates, but it should still work as an in-browser library as well.

```javascript
<script>
new Pictogrify('my text').render(document.querySelector('.pictogram'))
</script>
```

## TODOs

* [ ] Move `app` and `api` our of `/src` into project root
* [ ] Test library for in-browser usage
* [ ] Add API param support to specify which theme to use per-request
* [ ] Refactor core library a bit
* [ ] Add deployment pipelines to public demo

## Contributing

The "api" is totally customizable, so you can contribute with a design pack for what you want, people, monsters, animals, houses..

- Create folders with the shapes name. Eg: `hair`, `mouth`, ...
- Name the file with the folder name and include a version number. Eg: `hair-01`
- Edit the config file and add your new theme. (Set the name, colors and shapes order)

## Author

- Lúcio Rubens <luciorubeens@gmail.com>
- Adapted by Andrew <andrew@latlo.ng>
 
## Similar Tools

This project was based on [nimiq/robohash](https://github.com/nimiq/robohash).

- [RoboHash](https://robohash.org)
- [FlatHash](http://flathash.com)

## License

[MIT](LICENSE) © Lúcio Rubens
