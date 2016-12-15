
// Quotes Object

var quotes = [
  {
    "body": "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    "author": "Ralph Waldo Emerson"
  },
  {
    "body": "“I am so clever that sometimes I don't understand a single word of what I am saying.”",
    "author": "Oscar Wilde"
  },
  {
    "body": "“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”",
    "author": "J.K. Rowling"
  }
];


// Random Quote Machine Code

var initialQuote = quotes[Math.floor(Math.random() * quotes.length)];
var bdy = initialQuote.body;
var auth = initialQuote.author;

var twit = function() {
  var link = $("#twitter_btn");
  var linkURL = "http://twitter.com/?status=" + bdy + " by " + auth;
  link.attr('href', linkURL);
};

twit();

$("h2").text(bdy);
$("#author").text(auth);
$("#button_q").click(function(){
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
    bdy = quote.body;
    auth = quote.author;
    $("h2").text(bdy);
    $("#author").text(auth);
    twit();
});
