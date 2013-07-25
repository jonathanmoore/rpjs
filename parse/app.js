$(document).ready(function(){
  var parseApplicationId = "SjKeeMfogDSMcvIzGWDP6AIf65zq38s45WqgDQaI";
  var parseJavaScriptKey = "2ABF7iIrTGxfxEnvEViQPm8px0QAEF7Hq6d1N5bY";

  Parse.initialize(parseApplicationId, parseJavaScriptKey);
  var Test = Parse.Object.extend("Test");
  var test = new Test();

  test.save({
    name: "John", 
    text: "hi"
  }, {

    success: function(object){
      console.log("Parse.com object is saved: " + object);
    },
    error: function(object){
      console.log("Error! Parse.com object is not saved: " + object);
    }
    
  });
  
})