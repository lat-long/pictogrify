var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("You're probably looking for /image:string");
    });

    app.get("/image/:string", function (req, res) {

        var theme = req.params.theme || "monsters";
        const string = req.params.string || "Forgot Your String, Yo";

        const Pictogrify = require('./dist/pictogrify.js');

        const avatar = new Pictogrify(string, theme);
        console.log(avatar.svg);
        //console.log(avatar.keys());
        var returnData = ({
            originatingString: req.params.string,
            data: avatar.shapes
        });
        
        res.status(200).send(returnData);
        
    });
}
  
  module.exports = appRouter;