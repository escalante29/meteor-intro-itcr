UI.registerHelper('toTitleCase', function(string, options) {
  if(string){
    return (string.charAt(0)).toUpperCase() + string.substring(1).toLowerCase();
  }
});
