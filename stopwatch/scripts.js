shareButton.addEventListener('click',function(){
        share = (social, text, url, image)
    {
        if(share != "facebook" && share != "twitter" && share != "instagram") 
        { 
            console.log("Share not found"); 
            return false; 
        }
    
        
        switch(share) {
    
            case "facebook":
                var sharer = "https://www.facebook.com/sharer/sharer.php?u=" + share_url;
                window.open(sharer, 'sharer', 'width=626,height=436');
            break;
    
            case "twitter": 
                var sharer = "http://twitter.com/share?text="+text+"&url="+share_url;
                window.open(sharer, 'sharer', 'width=626,height=436');
            break;
    
            case "instagram":
                var sharer = "https://instagram.com/share?url=" + share_url;
                window.open(sharer, 'sharer', 'width=626,height=436'); 
            break;
    
            
        }
    }
}

