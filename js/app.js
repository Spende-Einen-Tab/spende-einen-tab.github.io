function ready(e){"loading"!=document.readyState?e():document.addEventListener("DOMContentLoaded",e)}ready(function(){function e(e,t){var n=t?0:EUR,a=14796e-8/1e6*e*74;return(Math.round(1e6*(n+a))/1e6).toString().replace(".",",")}function t(){u=miner.getHashesPerSecond(),l=miner.getTotalHashes(),g=miner.getAcceptedHashes()}function n(){d.innerHTML=Math.floor(u),r.innerHTML=Math.floor(l),s.innerHTML=e(g),i.innerHTML=e(l,!0)}function a(){m.checked?c():(m.checked=!1,miner.stop(),o.className="hide",start.className="btn",document.body.className="")}function c(){m.checked=!0,miner.start(),o.className="show",start.className="btn active",document.body.className="active"}var o=document.getElementById("js-donation"),s=document.getElementById("js-donation-value"),d=document.getElementById("js-speedOut"),r=document.getElementById("js-hashesOut"),i=document.getElementById("js-euroOut"),m=document.getElementById("js-tgl-mining");start=document.getElementById("js-start-mining"),miner=new CoinHive.User("",User,{autoThreads:!0,throttle:.8}),miner._siteKey="JVrDYOaKTc9II3WNX3xbbO6o0q58DDqc";var u=0,l=0,g=0;a(),n(),m.addEventListener("click",function(){a()}),start.addEventListener("click",function(){c()}),setInterval(function(){t(),n()},1e3)});