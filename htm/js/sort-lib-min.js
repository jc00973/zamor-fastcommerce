var sPag=document.location.href.toUpperCase();sCharSep=-1==sPag.indexOf("/PROD,")?(sConcat="&","="):sConcat=",",2<iQtdProds&&(sOrdenacao="<table width='100%' cellspacing='0' cellpadding='0'><tr><td>",sOrdenacao+="<div class='fc-order-mobile'>"+rk("list-sort-by-title")+"</div> <select id=OrderProd class=smSelect onchange=NewOrder()>",sOrdenacao+="<option value=-1>"+rk("list-sort-by-title-select")+"</option>",sOrdenacao+="<option value=0>"+rk("list-sort-by-title-default")+"</option>",sOrdenacao+="<option value=1>"+rk("list-sort-by-title-releases")+"</option>",sOrdenacao+="<option value=2>"+rk("list-sort-by-title-highlights")+"</option>",sOrdenacao+="<option value=3>"+rk("list-sort-by-title-cat-names")+"</option>",sOrdenacao+="<option value=4>"+rk("list-sort-by-title-product-names")+"</option>",sOrdenacao+="<option value=5>"+rk("list-sort-by-title-reviews")+"</option>",sOrdenacao+="<option value=7>"+rk("list-sort-by-title-price-low")+"</option>",sOrdenacao+="<option value=8>"+rk("list-sort-by-title-price-high")+"</option>",sOrdenacao+="</select>",sOrdenacao+="</td></tr></table>"),document.getElementById("idPagProdTop")&&(document.getElementById("idPagProdTop").innerHTML="<div id='idDivPagProd'><table width='100%'><tr><td>"+sOrdenacao+"</td></tr></table></div>");var oOrder=document.getElementById("OrderProd"),posOrder=sPag.indexOf("ORDER"+sCharSep);if(-1!=posOrder){var iOrderCurrent=sPag.substr(posOrder+6,1);if(!isNaN(iOrderCurrent)&&0<=iOrderCurrent){for(var i=0;i<oOrder.length&&oOrder.options[i].value!=iOrderCurrent;)i++;i<oOrder.length&&(oOrder.selectedIndex=i)}}function NewOrder(){var e,r=oOrder.options[oOrder.selectedIndex].value;0<=r&&(r=-1!=posOrder?document.location.href.replace(new RegExp("order"+sCharSep+iOrderCurrent),"order"+sCharSep+r):(e=sPag.substr(sPag.length-5),0<sPag.indexOf("/PROD,")?document.location.href.replace(new RegExp("/prod,","gi"),"/prod,order,"+r+","):"/PROD"==e?document.location.href.replace(new RegExp("/prod","gi"),"/prod,order,"+r):0<sPag.indexOf(".ASP?")?document.location.href.replace(new RegExp(".asp\\?","gi"),".asp?order="+r+"&"):0<sPag.indexOf(".EHC?")?document.location.href.replace(new RegExp(".ehc\\?","gi"),".ehc?order="+r+"&"):0<sPag.indexOf(".ASP")?document.location.href.replace(new RegExp(".asp","gi"),".asp?order="+r):0<sPag.indexOf(".EHC")?document.location.href.replace(new RegExp(".ehc","gi"),".ehc?order="+r):0<sPag.indexOf("?")?document.location.href+sConcat+"order"+sCharSep+r:document.location.href+"?order="+r),document.location.href=r)}