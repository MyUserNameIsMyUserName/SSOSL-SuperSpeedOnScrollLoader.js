var testItems={},wnd=window;function addSSOSLOBJ(a=null){console.log("FunctionCall >> [ function addSSOSLOBJ(newItems) ]"),null!==a&&(testItems=a)}function initSSOSL(){console.log("FunctionCall >> [ function initSSOSL() ]");try{handler(),wnd.addEventListener("scroll",handler)}catch(a){console.error(a)}}var raf=wnd.requestAnimationFrame||wnd.webkitRequestAnimationFrame||wnd.mozRequestAnimationFrame||function(a){wnd.setTimeout(a,1e3/60)};const isInUserView=a=>{console.log("FunctionCall >> [ function isInUserView(el) ] || [ Elem: "+a+" ]");const b=wnd.scrollY||wnd.pageYOffset;var c=document.querySelector(a);if("undefined"!=typeof c){const d=(c?c.getBoundingClientRect().top:0)+b,e={top:b,bottom:b+wnd.innerHeight},f={top:d,bottom:d+a.clientHeight};return f.bottom>=e.top&&f.bottom<=e.bottom||f.top<=e.bottom&&f.top>=e.top}return!1},handler=()=>raf(()=>{console.log("yea...scrolling");var a=0;"undefined"!=typeof testItems&&0<testItems.length&&testItems.forEach(b=>{b.done||(isInUserView(b.className)?(console.log("Is "+b.className+" visible? YES"),b.call(),b.done=!0):(console.log("Is "+b.className+" visible? NO"),a++))}),0==a&&(console.log("Done! Detaching scroll event listener..."),wnd.removeEventListener("scroll",handler))});document.onreadystatechange=function(){switch(document.readyState){case"loading":break;case"interactive":wnd.dispatchEvent(new Event("ssosl_ready"));break;case"complete":}},window.addEventListener("ssosl_ready",()=>{console.log("EventListener got:[> ssosl_ready <]");try{addSSOSLOBJ(appItems)}catch(a){console.error(a)}try{initSSOSL()}catch(a){console.error(a)}}),window.addEventListener("ssosl_die",()=>{console.log("EventListener got:[> ssosl_die <]");try{window.removeEventListener("ssosl_ready",this),window.removeEventListener("ssosl_die",this)}catch(a){console.error(a)}});