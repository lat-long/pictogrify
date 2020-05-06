var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("You're probably looking for /image:string");
    });

    app.get("/image/:string", function (req, res) {

        //this param is not actually passed into the Pictogrify library. #TODO: allow for setting theme with this param
        var theme = req.params.theme || "monsters";  

        const string = req.params.string || "Forgot Your String, Yo";

        const Pictogrify = require('./dist/pictogrify.js');

        const avatar = new Pictogrify(string, theme);

        var returnData = ({
            originatingString: req.params.string,
            svg: avatar.svg
        });
        
        res.status(200).send(returnData);
        
    });
}
  
  module.exports = appRouter;