function my_levenshtein(len1, len2){
	if(len1.length == 0 || len2.length == 0){
	    // console.log("return 0");
        return 0;
    }else if(len1.length != len2.length){
        // console.log("return -1");
        return -1;
    }else{
        value = 0;
        for(i=0;i<len1.length;i++){
            if(len1[i]!=len2[i]){
                value ++;
            }
        }
        return value;
    }
}
