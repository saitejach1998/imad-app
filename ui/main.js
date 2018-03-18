console.log('Loaded!');


var button = document.getElementById("counter");

button.onclick= function(){
   
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        console.log(request.readyState);
        if(request.readyState === XMLHttpRequest.DONE){
            console.log(request.status);
            if(request.status === 200){
                
                var counter = response.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }   
        }
        
    };
    
    request.open("GET","http://saitejach1998.imad.hasura-app.io/counter",true);
    
    request.send(null);
    };
