var zF$={addUnitQtyProdCart:function(t,e){var n=t.getAttribute("data-qty-id");(t=document.querySelector("#"+n))&&"number"==typeof e?(n=""==t.value?0:parseInt(t.value),0<(e=parseInt(n)+e)&&e<1e3&&(t.value=e,FCLib$.MirrorCartQty(t),document.querySelector(".alert-updade-cart"),document.getElementById("FCCartRecalculateBut").click())):console.log("addUnitQtyProdCart: object HTML undefined or parameter 'number' is not type number")},addInputQtyProdCart:function(t){var e=document.querySelectorAll(t);if(e&&0<e.length)for(var n=0;n<e.length;n++){var r,a,d=e[n],o=d.id;void 0!==o?((r=document.createElement("span")).textContent="-",r.setAttribute("class","btn-qty-add btn-qty-decrease"),r.setAttribute("data-qty-id",o),r.onclick=function(){zF$.addUnitQtyProdCart(this,-1)},(a=document.createElement("span")).textContent="+",a.setAttribute("class","btn-qty-add btn-qty-plus"),a.setAttribute("data-qty-id",o),a.onclick=function(){zF$.addUnitQtyProdCart(this,1)},d.parentNode.insertBefore(r,d),d.parentNode.insertBefore(a,d.nextSibling)):console.log("addInputQtyProdCart: attribute id in object HTML undefined")}else console.log("addInputQtyProdCart: fields inputs quantity undefined")},fnChangeInnerText:function(t,e){(t=document.querySelector(t))&&(t.textContent=e)}};!function(){var t,e=document.body.getAttribute("class");"FCProduct ProductList"===e||"FCNewsletter"===e||"FCAdvancedSearch"===e||"FCCategories"===e?(t=document.getElementById("idFCContent"))&&t.setAttribute("class","col-sm-8 col-md-9 col-lg-9"):"FCProduct ProductDet"!==e&&"FCHelp"!==e||(t=document.getElementById("idFCContent"))&&t.setAttribute("class","col-xs-12 col-sm-12 col-md-12 col-lg-12"),"Cart"==FC$.Page&&zF$.addInputQtyProdCart(".FCCartQtyInput"),"Cart"==FC$.Page&&(zF$.fnChangeInnerText("#FCCartFreightSimulationBut",""+rk("cart-zip-code")),zF$.fnChangeInnerText("#FCCartRecalculateBut",""+rk("cart-update-text")),zF$.fnChangeInnerText("#idTxtRecalculateFC b",""+rk("cart-update-text")))}();