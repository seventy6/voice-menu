console.log('\'Allo \'Allo!');

//https://ctrlq.org/code/20004-google-spreadsheets-json
// ID of the Google Spreadsheet
var spreadsheetID = "1vqUZqDLpf_T2Je3bRRn_KoGs-qXZmbwf3WdZo9Z_tEM/od6";

// Make sure it is public or set to Anyone with link can view 
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/public/basic?alt=json",
    peopleArray = [],
    menuArray = [];

$.getJSON(url, function(data) {

 var entry = data.feed.entry;

 $(entry).each(function(){
      var array = this.content.$t.split(/([-a-zA-Z]+\: )/)
      //var array = this.content.$t.split(": ")
      // array_2 = String(array).split(': ') 
      //console.log(array);
      console.log(this.content.$t)
   // Column names are name, age, etc.
   //$('.results').prepend('<h2>'+this.gsx$name.$t+'</h2><p>'+this.gsx$age.$t+'</p>');
   menuArray.push({
    'name' : getName(this.content.$t)
   })
 });
 console.log(menuArray);
});

 var getName = function(name) {

    var _name = name.match(/name: ([-a-zA-Z])*([^,]+)/)[0];
    _name = _name.split(': ')[1]    
    return _name;
 }

if (annyang) {
  
  console.log('annyang');
  // Let's define our first command. First the text we expect, and then the function it should call
  var commands = {
    //'show me *tag': getPerson,
    'that was good': getPerson,
    'hello': function() {
          console.log('hello')
        }
  };

  var getPerson = function(name) {
  	console.log('name', name);
  };
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
}

//monday: Ham and salad roll with mayo, wednesday: Applewood smoked cheddar, chutney  and leaves baguette, thursday: Jerk chicken and coleslaw roll, friday-sausagerolldayagain: one meat one veg, name: Dave Cropley
