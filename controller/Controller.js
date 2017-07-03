function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// to hide parts of the page with jQuery
$(document).ready(function(){
	$("#Tabs").hide();
	
	$("#AdresseHinzufügen").click(function(){
    	$("#Tabs").show();
        
    });
	
	$("#TypTab").click(function(){
    	$("#Typ").show();
        
    });
    
    $("#AdresseTab").click(function(){
    	$("#adressetab1").show();
        $("#adressetab2").hide();
    });
    
    $("#show").click(function(){
        $("#adressetab2").show();
        $("#adressetab1").hide();
    });
    
    $("#ProdukteTab").click(function(){
    	$("#Produkte").show();
        
    });
    
    $("#Fertig").click(function(){
    	$("#Fertig").show();
       
    });
    
});