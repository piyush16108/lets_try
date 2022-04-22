$(document).ready(function(){
			//alert("Loading navbar");
			$("#nav-placeholder").load("https://piyush16108.github.io/lets_try/nav.html");
			
			var stickNavBar = true;
			var showFooter = true;
			var goToURL = "https://vedabase.io/en/library/";
			
			$("#nav-placeholder").on("click", "#goFindVerse", function(){
				alert("#goFindVerse clicked!!!");
				var book = $("#book").val();
				var level1Val = $("#level1").val();
				var level2Val = $("#level2").val();
				var level3Val = $("#level3").val();
				goToURL += (book + "/" + level1Val + "/" + level2Val + "/" + level3Val);
				window.open(goToURL,"_self");
			});
			
			$("#nav-placeholder").on("click", "#hideNavBar", function(){
				if(stickNavBar){
					$("#navBar").removeClass("sticky-top");
					stickNavBar = false;
					$("#hideNavBar").text("Keep Header");
				}
				
				else if(!stickNavBar){
					$("#navBar").addClass("sticky-top");
					stickNavBar = true;
					$("#hideNavBar").text("Hide Header");
				}
			});
			
			$("#nav-placeholder").on("click", "#hideFooter", function(){
				if(showFooter){
					$("#fixedFooter").hide();
					showFooter = false;
					$("#hideFooter").text("Show Footer");
				}
				
				else if(!showFooter){
					$("#fixedFooter").show();
					showFooter = true;
					$("#hideFooter").text("Hide Footer");
				}
			});
		});
