function OAuth(serverName){

  this.AuthServer = serverName;
  this.ErrorMessage = "";

  if(!(this instanceof OAuth))
    return new OAuth();

  this.ShowServer = function(){
    alert(AuthServer);
  }

  this.ShowError = function()
  {
    alert(ErrorMessage);
  }

  this.Grant = function(){
    $.get( AuthServer + "grant")
    .done(function(data){
        alert(data);
    })
    .fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
    });
  }
}

