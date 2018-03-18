console.log('Loaded!');


var button = documet.getElementById("counter");

button.onclick= function(){
    
    var request = new XMLHttpRequest();
    request.readystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status == 200){
                var counter = response.Text;
                var span = documnet.getElementById("count");
                span.innerHTML = counter.toString();
            }   
        }
        
    };
    
    request.open("GET","http://saitejach1998.imad.hasura-app.io/counter");
    
    request.send(null);
    };
