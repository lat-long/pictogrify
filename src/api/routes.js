var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("You're probably looking for /image:string");
    });

    app.get("/image/:string", function (req, res) {

        var theme = req.params.theme || "monsters";
        const string = req.params.string || "Forgot Your String, Yo";

        var data = ({
            image: "https://google.com",
            originatingString: req.params.string
        });

        const pict = require('./src/pictogram.js');

        console.log(new Pictogrify(string, theme));

        res.status(200).send(data);
        
    });
}
  
  module.exports = appRouter;