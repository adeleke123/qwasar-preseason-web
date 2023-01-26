function my_spaceship(len){
    lenUpper = len.toUpperCase();
    
    rotation=["up", "down", "left", "up", "right", "down", "left"];
    index = 3;
    x = 0;
    y = 0;
    output = "";
    
	for(i = 0; i<lenUpper.length; i++){
        
	    while(lenUpper[i]!="R"&&lenUpper[i]!="L"&&lenUpper[i]!="A"){
	        console.log("invalid");
	    }
	    if(lenUpper[i] == "A" && index == 3){
	        y--;
	    }else if(lenUpper[i] == "R"){
	        rotation[index];
	        index++;;
	    }else if(lenUpper[i] == "L"){
	        rotation[index];
	        index--;
	    }else if(lenUpper[i] == "A" && rotation[index] == "right"){
	        x++;
	    }else if(lenUpper[i] == "A" && rotation[index] == "down"){
	        y++;
	    }else if(lenUpper[i] == "A" && rotation[index] == "left"){
	        x--;
	    }else if(lenUpper[i] == "A" && rotation[index] == "up"){
	        y--;
	    }
	
	}
	output = `{x: ${x}, y: ${y}, direction: '${rotation[index]}'}`;
	return output;
}
