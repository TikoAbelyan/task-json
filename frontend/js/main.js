
fetch('https://api.myjson.com/bins/ea4rc')
.then(function(response){
	return response.json();
})
.then(function(data){
	var out='';
	for (var key in data){
		var img=data[key].primaryImageUrl;
		var k=img.length-4;
		out+=''	     
		out+='<div id="products_section">';			
		out+='<div class="product">';				
		out+='<div class="product_photo product_section">';					
		out+='<a href="#" class="product_photo--link">';						
		out+='<img src="http:'+img.substr(0,k)+'_220x220_1.jpg">';							
		out+='</a>';						                                   
		out+='</div>';					
		out+='<div class="product-info product_section">';					
		out+='<p class="product_code">Код: '+parseInt(data[key].code,10)+'</p>';						
		out+='<div class="product_description">';						
		out+='<a href="#" class="product__link">'+data[key].title+'</a>';							
		out+='</div>';						
		out+='<div class="product_tags">';						
		out+='<p>Могут понадобиться:</p>';
		var assocPr=data[key].assocProducts.split(";");
		for(var i=0; i<assocPr.length-2; i++){
			out+='<a href="#" class="product_tags--link">'+'&nbsp'+assocPr[i]+',</a>';	
		}
		out+='<a href="#" class="product_tags--link">'+'&nbsp'+assocPr[i]+'.</a>';							
		out+='</div>';						
		out+='</div>';					
		out+='<div class="product-sale product_section">';					
		out+='<div class="product-sale-section">';					
		out+='<p class="product_status">Наличие</p>';						
		out+='<div class="product_price">';						
		out+='<span class="product_price_text">По карте<br>клуба</span>';							
		out+='<span class="goldPrice">'+(data[key].priceGoldAlt).toFixed(2)+'<i class="fas fa-ruble-sign" style="font-size:20px"></i></span>';							
		out+='</div>';						
		out+='<p class="product_price_default">';						
		out+='<span class="retailPrice">'+(data[key].priceRetailAlt).toFixed(2)+'<i class="fas fa-ruble-sign" style="font-size:20px"></i></span>';							
		out+='</p>';						
		out+='<div class="product_price_points">';						
		out+='<p>Можно купить за 231,75 балла</p>';							
		out+='</div>';	
	var doc=document;
	
		var unitSelect1=doc.getElementsByClassName("zamkv");
		var unitSelect2=doc.getElementsByClassName("zaupak");
		
		for(var a=0; a<unitSelect2.length; a++){
			unitSelect2[a].addEventListener("click",active2);
			function active2(){
				unitSelect1[a].removeAttribute('class','product_unit--active');
				unitSelect2[a].setAttribute('class','product_unit--active');
				var goldPr = (data[key].priceGold).toFixed(2);
				var retailPr = (data[key].priceRetail).toFixed(2);
			}
		}
		for(var a=0; a<unitSelect1.length; a++){
			unitSelect1[a].addEventListener("click",active1);
			function active1(){
				unitSelect2[a].removeAttribute('class','product_unit--active');
				unitSelect1[a].setAttribute('class','product_unit--active');
				var goldPr = (data[key].priceGoldAlt).toFixed(2);
				var retailPr = (data[key].priceRetailAlt).toFixed(2);
			}
		}
					
		out+='<div class="product_units">';						
		out+='<div class="zamkv product_units--select product_unit--active">';							
		out+='<p class="mkv">За м. кв.</p>';								
		out+='</div>';							
		out+='<div class="zaupak product_units--select">';							
		out+='<p class="upak">За упаковку</p>';								
		out+='</div>';							
		out+='</div>';						
		out+='<div class="product_unit--desc">';						
		out+='<div class="orange-icon">i</div>';							
		out+='<p>';							
		out+='<span>Продается упаковками:<br></span>';								
		out+='<span class="unit--infoInn">1 упак. = 2.47 м. кв. </span>';								
		out+='</p>';							
		out+='</div>';	
	/*
		var count = doc.getElementsByClassName('product__count_input');
		
		var arrowUp = doc.getElementsByClassName('btn_arrow-up');
		for(var m=1 ; m<=arrowUp.length ; m++){
		  arrowUp[m].addEventListener("click", function(e){for(var j=1; j<=m;m++){count[j].value+=1;}}, false);
		}				
					
		var arrowDown = doc.getElementsByClassName('btn_arrow-down');
		for(m=0 ; m<arrowDown.length ; m++){
		  arrowDown[m].addEventListener("click", function(e){for(j=m; j>1;m--){count[j].value-=1;}}, false);
		}
	*/		
		out+='<form class="product__count">';						
		out+='<input class="product__count_input" type="text" value="1"/>';							
		out+='<button class="btn_arrow-up"><div class="icon"></div></button><br>';							
		out+='<button class="btn_arrow-down"><div class="icon"></div></button>';							
		out+='<button class="btn_cart" data-url="/cart/" data-product-id="'+data[key].productId+'"><div class="big-icon"></div>В корзину</button>';							
		out+='</form>';						
		out+='</div>';					
		out+='</div>';					
		out+='</div>';				
        out+='</div>';               
		}	
	document.getElementById('product').innerHTML = out;

	let inpStatic = document.getElementsByClassName("product__count_input");
	let btnChangePlus = document.getElementsByClassName("btn_arrow-up");
	let btnChangeMinus = document.getElementsByClassName("btn_arrow-down");
	for(let x=0;x<btnChangePlus.length;x++){
		btnChangePlus[x].onclick=function(){
			inpStatic[x].value++
		}
	}
	for(let y=0;y<btnChangeMinus.length;y++){
		btnChangeMinus[y].onclick=function(){
			inpStatic[y].value--
		}
	}
}) 
		 
		 
	/* Your template JS*/	 
		/* 
		out+='<div id="products_section">'; 
		out+='<div class="products_page pg_0">';	
		out+='<div class="product product_horizontal">';
		out+='<span class="product_code">Код: '+parseInt(data[key].code,10)+'</span>';
        out+='<div class="product_status_tooltip_container">';                      
        out+='<span class="product_status">Наличие</span>';                           
        out+='</div>';  
		out+='<div class="product_photo">';				
		out+='<a href="#" class="url--link product__link">';
		out+='<img src="http:'+img.substr(0,k)+'_220x220_1.jpg">';		
		out+='</a>';				                                    
		out+='</div>';			
		out+='<div class="product_description">';			
		out+='<a href="#" class="product__link">'+data[key].title+'</a>';				
		out+='</div>';			
		out+='<div class="product_tags hidden-sm">';			
		out+='<p>Могут понадобиться:</p>';			
		var assocPr=data[key].assocProducts.split(";");
		for(var i=0; i<assocPr.length-2; i++){
			out+='<a href="#" class="url--link"> '+assocPr[i]+',</a>';	
		}		
		out+='<a href="#" class="url--link"> '+assocPr[i]+'.</a>';			
		out+='</div>';			
		out+='<div class="product_units">';			
		out+='<div class="unit--wrapper">';	
		out+='<div class="unit--select unit--active">';					
		out+='<p class="ng-binding">За м. кв.</p>';	
		out+='</div>';
		out+='<div class="unit--select">';					
		out+='<p class="ng-binding">За упаковку</p>';	
		out+='</div>';
		out+='</div>';				
		out+='</div>';	
		out+='<p class="product_price_club_card">';			
		out+='<span class="product_price_club_card_text">По карте<br>клуба</span>';				
		out+='<span class="goldPrice">'+(data[key].priceGoldAlt).toFixed(2)+'</span>';				
		out+='<span class="rouble__i black__i">';				
		out+='<svg version="1.0" id="rouble__b" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">';					
		out+='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_black"></use>';					   
		out+='</svg>';					
		out+='</span>';				 
		out+='</p>';			
		out+='<p class="product_price_default">';
		out+='<span class="retailPrice">'+(data[key].priceRetailAlt).toFixed(2)+'</span>';				
		out+='<span class="rouble__i black__i">';				
		out+='<svg version="1.0" id="rouble__g" xmlns="http://www.w3.org/2000/svg" x="0" y="0" width="30px" height="22px" viewBox="0 0 50 50" enable-background="new 0 0 50 50" xml:space="preserve">';					
		out+='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#rouble_gray"></use>';					   
		out+='</svg>';					
		out+='</span>';				 
		out+='</p>';			
		out+='<div class="product_price_points">';			
		out+='<p class="ng-binding">Можно купить за 231,75 балла</p>';				
		out+='</div>';			
		out+='<div class="list--unit-padd"></div>';			
		out+='<div class="list--unit-desc">';			
		out+='<div class="unit--info">';				
		out+='<div class="unit--desc-i"></div>';					
		out+='<div class="unit--desc-t">';					
		out+='<p>';						
		out+='<span class="ng-binding">Продается упаковками:</span>';							
		out+='<span class="unit--infoInn">1 упак. = 2.47 м. кв. </span>';							
		out+='</p>';						
		out+='</div>';					
		out+='</div>';				
		out+='</div>';			
		out+='<div class="product__wrapper">';			
		out+='<div class="product_count_wrapper">';				
		out+='<div class="stepper">';
		out+='<input class="product__count stepper-input" type="text" value="1">';						
		out+='<div class="stepper-arrow up stepper-arrow-up"></div>';						
		out+='<div class="stepper-arrow down stepper-arrow-down"></div>';						                                            
		out+='</div>';					
		out+='</div>';				
		out+='<span class="btn btn_cart" data-url="/cart/" data-product-id="'+data[key].productId+'">';				
		out+='<svg class="ic ic_cart">';					
		out+='<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart"></use>';					   
		out+='</svg>';					
		out+='<span class="ng-binding">В корзину</span>';					
		out+='</span>';				
		out+='</div>';			
		out+='</div>';		
		out+='</div>';	
		
	}	
	doc.getElementById('product').innerHTML = out;
})

*/
/*	var doc=document;
		var unitSelect1=doc.getElementsByClassName("unit--select:firstChild");
		var unitSelect2=doc.getElementsByClassName("unit--select:nth-child(2)");
		
		for(var a=0; a<unitSelect2.length; a++){
			unitSelect2[a].addEventListener("click",active2);
			function active2(){
				unitSelect1[a].removeAttribute('class','unit--active');
				unitSelect2[a].setAttribute('class','unit--active');
				var goldPr = (data[key].priceGold).toFixed(2);
				var retailPr = (data[key].priceRetail).toFixed(2);
			}
		}
		for(var a=0; a<unitSelect1.length; a++){
			unitSelect1[a].addEventListener("click",active1);
			function active1(){
				unitSelect2[a].removeAttribute('class','unit--active');
				unitSelect1[a].setAttribute('class','unit--active');
				var goldPr = (data[key].priceGoldAlt).toFixed(2);
				var retailPr = (data[key].priceRetailAlt).toFixed(2);
			}
		}
	
		var count = doc.getElementsByClassName('product__count');
		
		var arrowUp = doc.getElementsByClassName('stepper-arrow-up');
		for(var m=1 ; m<=arrowUp.length ; m++){
		  arrowUp[m].addEventListener("click", function(e){for(var j=1; j<=m;m++){count[j].value+=1;}}, false);
		}				
					
		var arrowDown = doc.getElementsByClassName('stepper-arrow-down');
		for(m=0 ; m<arrowDown.length ; m++){
		  arrowDown[m].addEventListener("click", function(e){for(j=m; j>1;m--){count[j].value-=1;}}, false);
		}
	*/
	

	