# No Escape (Manage escape characters as part of string):

## Description:
The usual problem that JSON.parse is that sometimes in case your json string contains some of the escape characters like “ or \ then it fails to successfully parse.

This library provides functionality to overcome this by explicitly formatting your string such that it manages the escape characters as is.

## Example:

 

    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example of no Escape</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../src/noescape.js"></script>
    </head>
    <body>
    <div class="container">
        <div class="row">
            <hr/>
        	<div>
                <div class="form-group">
                    <label for="inpTxt" >Enter any special character even the escape characters and let no escape manage those</label>
                    <input id="inpTxt" type="text" class="form-control" placeholder="Enter Your Data" >
                </div>
                <button id = "myBtn" class="btn btn-primary">Press to see the output printed</button>
            </div>
            <hr/>
    		<p id="dispTxt"></p>
    		<hr/>
        </div>
    </div>
    
    <script type="text/javascript">
    	$(document).ready(function(){
    		$("#myBtn").click(function(){
    			var inp = $("#inpTxt").val();
    			
    			if(inp == null || inp == ""){
    				return;
    			}
    			
    			//Marking the escape characters
    			valueEscaped = noescape.escapeForJSONStrings(inp);
    			
    			//Converting as JSON and Passing it to the JSON Parser
    			jsonResult = JSON.parse('{"data": "' + valueEscaped + '"}');
    			console.log(jsonResult);
    			$("#dispTxt").text(JSON.stringify(jsonResult));
    			$("#inpTxt").val("");
    		});
    	});
    </script>
    
    </body>
    </html>     

For example a user may enter "Hello" which actually should be stored as "Hello" but using JSON.parse on the string like: `'{"data": ""Hello""}'` will yield an error.

To properly escape the characters use the `noescape.escapeForJSONStrings` function and let it do all the formatting.
Also it will work for all other escape characters.
