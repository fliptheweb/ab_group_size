!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ab_calculator",[],t):"object"==typeof exports?exports.ab_calculator=t():e.ab_calculator=t()}(this,function(){return function(e){function t(r){if(a[r])return a[r].exports;var n=a[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}a(1);var n=a(7),o=a(8),i=a(9),s=!1,l={alpha:5,beta:20,deltaConversion:5};e.exports=function(e){if(!i(e))return void console.log("Given element isn`t DOM element");e.innerHTML=n;var t=e.querySelector("#a-group-size"),a=e.querySelector("#b-group-size"),c=e.querySelector("#a-conversion"),u=e.querySelector("#b-conversion"),M=e.querySelector("#a-conversion-rate"),N=e.querySelector("#b-conversion-rate"),d=e.querySelector("#alpha"),p=e.querySelector("#beta"),g=e.querySelector("#needed-delta-conversion"),z=e.querySelector("#settings-button"),b=e.querySelector(".ab-calculator__result-message"),x=e.querySelector(".ab-calculator__needed-group-size"),j=e.querySelector(".ab-calculator__delta-conversion"),D=function(){var t={},a=e.dataset,r=a.abcalculatorConversion,n=a.abcalculatorGroupSize;if(r)try{t.conversion=JSON.parse(r)}catch(o){console.warn("Can't parse conversion from data attribute. "+o.message)}if(n)try{t.groupSize=JSON.parse(n)}catch(o){console.warn("Can't parse current group size from data attribute. "+o.message)}return a.abcalculatorAlpha&&(t.alpha=a.abcalculatorAlpha),a.abcalculatorBeta&&(t.beta=a.abcalculatorBeta),a.abcalculatorNeededDeltaConversion&&(t.neededDeltaConversion=a.abcalculatorNeededDeltaConversion),t},I=function(){var e={};return""!==d.value&&(e.alpha=d.value),""!==p.value&&(e.beta=p.value),""!==t.value&&""!==a.value&&(e.groupSize=[t.value,a.value]),""!==c.value&&""!==u.value&&(e.conversion=[c.value,u.value]),""!==g.value&&(e.neededDeltaConversion=g.value),e},y=function(e){var r=e.alpha,n=e.beta,o=e.groupSize,i=e.conversion,s=e.neededDeltaConversion;r&&(d.value=r),n&&(p.value=n),s&&(g.value=s),o&&(t.value=o[0],a.value=o[1]),i&&(c.value=i[0],u.value=i[1])},f=function(e){return"Δ "+(isFinite(e)?parseFloat(e.toFixed(2))+"%":"∞")},v=function(t){var a={};return s?a=I():(s=!0,a=Object.assign({},l,D()),y(a)),a.conversion&&a.groupSize?(a=o(a),e.classList.remove("is-winner-a","is-winner-b"),void(a instanceof Error?(j.innerHTML="",x.innerText="",b.innerHTML="Errors: "+a.message):(a.conversionRate&&(M.innerHTML=a.conversionRate[0]+"%",N.innerHTML=a.conversionRate[1]+"%"),a.winner&&e.classList.add(1===a.winner?"is-winner-a":"is-winner-b"),j.innerHTML=f(a.deltaConversion),x.innerText="min "+Math.max.apply(Math,r(a.neededGroupSize)).toLocaleString(),b.innerHTML=a.text.join("<br/>")))):void console.log("You must pass conversion and groups size to ABCalculator plugin")};[d,p,g,t,a,c,u].forEach(function(e){["change","click","keyup"].forEach(function(t){e.addEventListener(t,v)})}),z.addEventListener("click",function(){return e.classList.toggle("is-settings-opened")}),v()}},function(e,t,a){var r=a(2);"string"==typeof r&&(r=[[e.id,r,""]]);a(6)(r,{});r.locals&&(e.exports=r.locals)},function(e,t,a){t=e.exports=a(3)(),t.push([e.id,".ab-calculator{all:initial;display:block;box-sizing:border-box;font-family:OpenSans,Tahoma,Arial,serif;padding:10px;padding-bottom:15px;width:580px;height:190px;position:relative;color:#222;border:1px solid #e4e4e4;box-shadow:0 0 4px 0 rgba(0,0,0,.1),0 1px 1px 0 rgba(0,0,0,.05);border-radius:3px;overflow:hidden}.ab-calculator h3{margin:0;margin-bottom:10px;font-size:15px}.ab-calculator p{margin:0}.ab-calculator__field{border:0;border-radius:2px;background:#fff;text-align:center;height:25px;line-height:25px;font-size:14px;box-shadow:0 0 0 2px rgba(92,217,253,.1);-webkit-transition:box-shadow .3s;transition:box-shadow .3s;display:inline-block;width:100%;padding-left:12px}.ab-calculator__field:focus{outline:none;box-shadow:0 0 0 2px rgba(92,217,253,.5)}.ab-calculator__data{width:330px;position:relative;margin-top:20px}.ab-calculator__data:before{content:'';position:absolute;left:0;right:0;top:35px;height:39px;background:#bdffa4;background-image:-webkit-linear-gradient(212deg,#bdffa4,#e0ffbe);background-image:linear-gradient(-122deg,#bdffa4,#e0ffbe);border-radius:2px;z-index:0;opacity:0;-webkit-transition:opacity .3s;transition:opacity .3s}.is-winner-a .ab-calculator__data:before{opacity:1;top:35px}.is-winner-b .ab-calculator__data:before{opacity:1;top:83px}.ab-calculator__table{table-layout:fixed;width:100%;position:relative}.ab-calculator__table td,.ab-calculator__table th{text-align:center;padding:0 5px}.ab-calculator__table th{color:#b1b1b1;vertical-align:bottom;font-size:9px;font-weight:400;padding-bottom:10px}.ab-calculator__heading-group{width:20px;padding-right:10px!important}.ab-calculator__heading-conversion,.ab-calculator__heading-group-size{width:100px}.ab-calculator__heading-conversion-rate{width:50px}.ab-calculator__delta-conversion,.ab-calculator__needed-group-size{font-size:10px;color:#b1b1b1;white-space:nowrap;height:14px}.ab-calculator__group{font-size:30px;line-height:30px;font-weight:600;text-align:center}.is-winner-a .ab-calculator__group.\\--a,.is-winner-b .ab-calculator__group.\\--b{color:#48b711}.ab-calculator__result{box-sizing:border-box;font-size:14px;float:right;width:220px;padding-top:25px;padding-left:30px}.ab-calculator__settings{box-sizing:border-box;width:240px;padding:30px 45px 20px 40px;background:#eefcff;border-radius:0 3px 3px 0;position:absolute;right:0;top:0;bottom:0;-webkit-transform:translateX(100%);transform:translateX(100%);-webkit-transform-origin:right;transform-origin:right;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;pointer-events:none}.is-settings-opened .ab-calculator__settings{pointer-events:auto;-webkit-transform:translateX(0);transform:translateX(0)}.ab-calculator__settings-row{clear:both;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:7px}.ab-calculator__settings-row label{color:#b1b1b1;display:block;font-size:9px;width:85px}.ab-calculator__settings-field{width:50px}.ab-calculator__settings-percent{display:inline-block;font-size:14px;font-weight:600}.ab-calculator__settings-button{position:absolute;top:10px;right:10px;background:url("+a(4)+") 50% 50% no-repeat;width:20px;height:20px;cursor:pointer}.is-settings-opened .ab-calculator__settings-button{background-image:url("+a(5)+")}.ab-calculator__mark{color:#ff645e}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var a=this[t];a[2]?e.push("@media "+a[2]+"{"+a[1]+"}"):e.push(a[1])}return e.join("")},e.i=function(t,a){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},n=0;n<this.length;n++){var o=this[n][0];"number"==typeof o&&(r[o]=!0)}for(n=0;n<t.length;n++){var i=t[n];"number"==typeof i[0]&&r[i[0]]||(a&&!i[2]?i[2]=a:a&&(i[2]="("+i[2]+") and ("+a+")"),e.push(i))}},e}},function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjIwcHgiIGhlaWdodD0iMjBweCIgdmlld0JveD0iMCAwIDIwIDIwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MS4yICgzNTM5NykgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+Z2VhcjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJBcnRib2FyZC0xIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjIwLjAwMDAwMCwgLTIwMy4wMDAwMDApIiBmaWxsPSIjQjFCMUIxIj4KICAgICAgICAgICAgPGcgaWQ9Ikdyb3VwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MC4wMDAwMDAsIDg0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTUzMi42MjU2NDEsMTMwLjc5NDg3MiBDNTMyLjgzMDUxMywxMzEuNjI1NjQxIDUzMy4xNjg5NzQsMTMyLjQgNTMzLjYxNTEyOCwxMzMuMDk3NDM2IEw1MzIuMzY5MjMxLDEzNC4zNDg0NjIgQzUzMS44MDk3NDQsMTM0LjkwNzQzNiA1MzEuODE1Mzg1LDEzNS4yNDA3NjkgNTMyLjMwNzY5MiwxMzUuNzMzMDc3IEw1MzMuNTIzMDc3LDEzNi45NDg3MTggQzUzNC4wMjAyNTYsMTM3LjQ0NjQxIDUzNC4zNTg5NzQsMTM3LjQzNTg5NyA1MzQuOTA3NjkyLDEzNi44ODcxNzkgTDUzNi4yMTUzODUsMTM1LjU3NDYxNSBDNTM2LjgzMDc2OSwxMzUuOTI4MjA1IDUzNy40OTc0MzYsMTM2LjIgNTM4LjIwNTEyOCwxMzYuMzc0MzU5IEw1MzguMjA1MTI4LDEzNy45NzQzNTkgQzUzOC4yMDUxMjgsMTM4Ljc2OTIzMSA1MzguNDQ1ODk3LDEzOSA1MzkuMTM4NzE4LDEzOSBMNTQwLjg2MTUzOCwxMzkgQzU0MS41NjQxMDMsMTM5IDU0MS43OTQ4NzIsMTM4Ljc1MzU5IDU0MS43OTQ4NzIsMTM3Ljk3NDM1OSBMNTQxLjc5NDg3MiwxMzYuMzc0MzU5IEM1NDIuNTAyNTY0LDEzNi4yIDU0My4xNjg5NzQsMTM1LjkyODIwNSA1NDMuNzg0NjE1LDEzNS41NzQ2MTUgTDU0NS4xMjMzMzMsMTM2LjkxNzY5MiBDNTQ1LjY3NzE3OSwxMzcuNDY2NjY3IDU0Ni4wMTAyNTYsMTM3LjQ3NzE3OSA1NDYuNTA3NDM2LDEzNi45ODQ4NzIgTDU0Ny43Mjg0NjIsMTM1Ljc2Mzg0NiBDNTQ4LjIxNTEyOCwxMzUuMjc3MTc5IDU0OC4yMjU2NDEsMTM0Ljk0MzU5IDU0Ny42NjEyODIsMTM0LjM3OTc0NCBMNTQ2LjM3OTIzMSwxMzMuMDk3NjkyIEM1NDYuODMxMDI2LDEzMi40IDU0Ny4xNjk0ODcsMTMxLjYyNTg5NyA1NDcuMzc0MzU5LDEzMC43OTUxMjggTDU0OS4wNjY2NjcsMTMwLjc5NTEyOCBDNTQ5Ljc2OTIzMSwxMzAuNzk0ODcyIDU1MCwxMzAuNTQ4NDYyIDU1MCwxMjkuNzY5MjMxIEw1NTAsMTI4LjIzMDc2OSBDNTUwLDEyNy40NzE1MzggNTQ5Ljc5OTc0NCwxMjcuMjA1MTI4IDU0OS4wNjY0MSwxMjcuMjA1MTI4IEw1NDcuMzc0MTAzLDEyNy4yMDUxMjggQzU0Ny4xOTk3NDQsMTI2LjQ5NzQzNiA1NDYuOTI3OTQ5LDEyNS44MzEwMjYgNTQ2LjU3NDM1OSwxMjUuMjE1Mzg1IEw1NDcuNzk0ODcyLDEyNCBDNTQ4LjMzMzMzMywxMjMuNDYxNTM4IDU0OC4zNzkyMzEsMTIzLjEyODIwNSA1NDcuODYxNTM4LDEyMi42MTUzODUgTDU0Ni42NDEwMjYsMTIxLjM5NDg3MiBDNTQ2LjE1Mzg0NiwxMjAuOTA3NjkyIDU0NS44MDUxMjgsMTIwLjkxMzA3NyA1NDUuMjU2NDEsMTIxLjQ2MTUzOCBMNTQ0LjA5NzQzNiwxMjIuNjE1Mzg1IEM1NDMuMzk5NzQ0LDEyMi4xNjkyMzEgNTQyLjYyNTY0MSwxMjEuODMwNTEzIDU0MS43OTQ4NzIsMTIxLjYyNTg5NyBMNTQxLjc5NDg3MiwxMjAuMDI1NjQxIEM1NDEuNzk0ODcyLDExOS4yNjY0MSA1NDEuNTk0NjE1LDExOSA1NDAuODYxMjgyLDExOSBMNTM5LjEzODQ2MiwxMTkgQzUzOC40NDU4OTcsMTE5IDUzOC4yMDUxMjgsMTE5LjI1MTI4MiA1MzguMjA1MTI4LDEyMC4wMjU2NDEgTDUzOC4yMDUxMjgsMTIxLjYyNTY0MSBDNTM3LjM3NDM1OSwxMjEuODMwNTEzIDUzNi42LDEyMi4xNjg5NzQgNTM1LjkwMjU2NCwxMjIuNjE1MTI4IEw1MzQuNzQzNTksMTIxLjQ2MTI4MiBDNTM0LjE5NDYxNSwxMjAuOTEyODIxIDUzMy44NDYxNTQsMTIwLjkwNzQzNiA1MzMuMzU4OTc0LDEyMS4zOTQ2MTUgTDUzMi4xMzg0NjIsMTIyLjYxNTEyOCBDNTMxLjYyMDUxMywxMjMuMTI3OTQ5IDUzMS42NjY2NjcsMTIzLjQ2MTUzOCA1MzIuMjA1MTI4LDEyMy45OTk3NDQgTDUzMy40MjA1MTMsMTI1LjIxNTEyOCBDNTMzLjA3MjA1MSwxMjUuODMwNTEzIDUzMi44LDEyNi40OTcxNzkgNTMyLjYyNTY0MSwxMjcuMjA0ODcyIEw1MzAuOTMzMzMzLDEyNy4yMDQ4NzIgQzUzMC4yNDA3NjksMTI3LjIwNTEyOCA1MzAsMTI3LjQ1NjQxIDUzMCwxMjguMjMwNzY5IEw1MzAsMTI5Ljc2OTIzMSBDNTMwLDEzMC41NjQxMDMgNTMwLjI0MDc2OSwxMzAuNzk0ODcyIDUzMC45MzM1OSwxMzAuNzk0ODcyIEw1MzIuNjI1NjQxLDEzMC43OTQ4NzIgTDUzMi42MjU2NDEsMTMwLjc5NDg3MiBaIE01MzcuMDY2NDEsMTI5IEM1MzcuMDY2NDEsMTI3LjM3OTQ4NyA1MzguMzc5NDg3LDEyNi4wNjY5MjMgNTQwLDEyNi4wNjY5MjMgQzU0MS42MjA1MTMsMTI2LjA2NjkyMyA1NDIuOTMzMDc3LDEyNy4zNzk0ODcgNTQyLjkzMzA3NywxMjkgQzU0Mi45MzMwNzcsMTMwLjYyMDUxMyA1NDEuNjIwNTEzLDEzMS45MzM1OSA1NDAsMTMxLjkzMzU5IEM1MzguMzc5NDg3LDEzMS45MzM1OSA1MzcuMDY2NDEsMTMwLjYyMDUxMyA1MzcuMDY2NDEsMTI5IEw1MzcuMDY2NDEsMTI5IFoiIGlkPSJnZWFyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg=="},function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTciIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNyAxNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik01LjMxNCA4LjE0MnMtMy44NTggMy42MTEtMy41MzYgMy41MzZsLTEuMjUgMS41NGMtLjU2My41NjMtLjU1Ni44OTYtLjA2NiAxLjM4NmwxLjIxOCAxLjIxOGMuNDk3LjQ5Ny44MzQuNDg2IDEuMzg1LS4wNjVsMS41NDItMS4yNWMtLjEwNS4zMDQgMy41MzUtMy41MzYgMy41MzUtMy41MzZzMy41NzIgMy44OCAzLjUzNiAzLjUzNWwxLjYwNiAxLjMxN2MuNDk3LjQ5Ni44MzQuNDg1IDEuMzg1LS4wNjZsMS4wODgtMS4wODhjLjUzNy0uNTM3LjU4NC0uODY3LjA2NS0xLjM4NWwtMS4zMTYtMS42MDZjLjMyMy4wNzMtMy41MzUtMy41MzYtMy41MzUtMy41MzZzMy44NTktMy42MDcgMy41MzUtMy41MzVsMS4yNTEtMS41NDJjLjUzNy0uNTM2LjU4NC0uODY2LjA2NS0xLjM4NUwxNC42MDQuNDYyYy0uNDktLjQ5LS44MzgtLjQ4Mi0xLjM4NS4wNjVsLTEuNTQxIDEuMjUxYy4wMjUtLjM1Mi0zLjUzNiAzLjUzNi0zLjUzNiAzLjUzNlM0LjQ5NCAxLjQ3OSA0LjYwNyAxLjc3OEwzIC40NjJjLS40OS0uNDktLjgzNy0uNDgyLTEuMzg1LjA2NUwuNTI3IDEuNjE1Qy0uMDM1IDIuMTc3LS4wMjggMi41MS40NjIgM2wxLjMxNiAxLjYwN2MtLjMyNS0uMDcgMy41MzYgMy41MzUgMy41MzYgMy41MzV6IiBmaWxsPSIjQjFCMUIxIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=="},function(e,t,a){function r(e,t){for(var a=0;a<e.length;a++){var r=e[a],n=d[r.id];if(n){n.refs++;for(var o=0;o<n.parts.length;o++)n.parts[o](r.parts[o]);for(;o<r.parts.length;o++)n.parts.push(c(r.parts[o],t))}else{for(var i=[],o=0;o<r.parts.length;o++)i.push(c(r.parts[o],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function n(e){for(var t=[],a={},r=0;r<e.length;r++){var n=e[r],o=n[0],i=n[1],s=n[2],l=n[3],c={css:i,media:s,sourceMap:l};a[o]?a[o].parts.push(c):t.push(a[o]={id:o,parts:[c]})}return t}function o(e,t){var a=z(),r=j[j.length-1];if("top"===e.insertAt)r?r.nextSibling?a.insertBefore(t,r.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),j.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");a.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=j.indexOf(e);t>=0&&j.splice(t,1)}function s(e){var t=document.createElement("style");return t.type="text/css",o(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",o(e,t),t}function c(e,t){var a,r,n;if(t.singleton){var o=x++;a=b||(b=s(t)),r=u.bind(null,a,o,!1),n=u.bind(null,a,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=l(t),r=N.bind(null,a),n=function(){i(a),a.href&&URL.revokeObjectURL(a.href)}):(a=s(t),r=M.bind(null,a),n=function(){i(a)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else n()}}function u(e,t,a,r){var n=a?"":r.css;if(e.styleSheet)e.styleSheet.cssText=D(t,n);else{var o=document.createTextNode(n),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(o,i[t]):e.appendChild(o)}}function M(e,t){var a=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}function N(e,t){var a=t.css,r=t.sourceMap;r&&(a+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var n=new Blob([a],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(n),o&&URL.revokeObjectURL(o)}var d={},p=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=p(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),z=p(function(){return document.head||document.getElementsByTagName("head")[0]}),b=null,x=0,j=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var a=n(e);return r(a,t),function(e){for(var o=[],i=0;i<a.length;i++){var s=a[i],l=d[s.id];l.refs--,o.push(l)}if(e){var c=n(e);r(c,t)}for(var i=0;i<o.length;i++){var l=o[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete d[l.id]}}}};var D=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports='<div class=ab-calculator> <div class=ab-calculator__result> <h3>Result:</h3> <p class=ab-calculator__result-message></p> </div> <div class=ab-calculator__data> <table class=ab-calculator__table> <thead> <tr> <th class=ab-calculator__heading-group></th> <th class=ab-calculator__heading-group-size>The number of visitors on page was:</th> <th class=ab-calculator__heading-conversion>The number of overall conversions was:</th> <th class=ab-calculator__heading-conversion-rate>Convertion rate:</th> </tr> </thead> <tbody> <tr> <td class="ab-calculator__group --a">A</td> <td><input id=a-group-size class=ab-calculator__field type=number min=0 step=1 /></td> <td><input id=a-conversion class=ab-calculator__field type=number min=0 step=1 /></td> <td id=a-conversion-rate></td> </tr> <tr> <td></td> <td class=ab-calculator__needed-group-size title="Minimum group size for statistical significance"></td> <td></td> <td class=ab-calculator__delta-conversion title="Relative delta between conversion rates"></td> </tr> <tr> <td class="ab-calculator__group --b">B</td> <td><input id=b-group-size class=ab-calculator__field type=number min=0 step=1 /></td> <td><input id=b-conversion class=ab-calculator__field type=number min=0 step=1 /></td> <td id=b-conversion-rate></td> </tr> </tbody> </table> </div> <div class=ab-calculator__settings> <h3>Settings:</h3> <div class=ab-calculator__settings-row> <label for="">Alpha (I-type error):</label> <div class=ab-calculator__settings-value> <input id=alpha class="ab-calculator__field ab-calculator__settings-field" type=number min=0 max=100 step=1 /> <span class=ab-calculator__settings-percent>%</span> </div> </div> <div class=ab-calculator__settings-row> <label for="">Beta (II-type error):</label> <div class=ab-calculator__settings-value> <input id=beta class="ab-calculator__field ab-calculator__settings-field" type=number min=0 max=100 step=1 /> <span class=ab-calculator__settings-percent>%</span> </div> </div> <div class=ab-calculator__settings-row> <label for="">Minimum delta conversion:</label> <div class=ab-calculator__settings-value> <input id=needed-delta-conversion class="ab-calculator__field ab-calculator__settings-field" type=number min=0 max=100 step=1 /> <span class=ab-calculator__settings-percent>%</span> </div> </div> </div> <span class=ab-calculator__settings-button id=settings-button></span> </div> '},function(e,t){"use strict";var a=function(){function e(e,t){var a=[],r=!0,n=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(a.push(i.value),!t||a.length!==t);r=!0);}catch(l){n=!0,o=l}finally{try{!r&&s["return"]&&s["return"]()}finally{if(n)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=6,n=5,o=20,i=1,s=2,l={WINNER_FIRST:"First variant are winner.",WINNER_SECOND:"Second variant are winner.",WINNER_EQUAL:"Both variants are equal.",NOT_ENOUGH:function(e,t,a){var r=Math.max(e[0]-t[0],e[1]-t[1]);return'It`s not enough traffic in groups, need at least <span class="ab-calculator__mark">'+r.toLocaleString()+"</span> more per both groups."},NO_CURRENT_GROUP:"We can`t detect winner, because it`s relative to the group size.",NOT_MINIMUM_DELTA_CONVERSION:function(e,t){return"Enough size of both groups riched. But waiting for minimum delta between conversion ("+e+"). Now both variants are equal."},ERROR_CONVERSIONS_LENGTH:"You must pass 2 conversion value, like [3, 3.2].",ERROR_CONVERSIONS_VALID:"You must pass valid conversion values.",ERROR_GROUP_SIZE:"You must pass 2 group size value, like [1000, 1000].",ERROR_GROUP_SIZE_VALID:"You must pass currentGroupSize.",ERROR_ALPHA:"Alpha must be from 0 to 100 percent. Alpha set to defaul "+n+".",ERROR_BETA:"Beta must be from 0 to 100 percent. Beta set to default "+o+".",ERROR_RATIO:"Ratio temporarily must be only "+i+".",ERROR_CONVERSION_MORE_THAN_GROUP:"Conversion can`t be more than group size."},c=function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return l[e]?"function"==typeof l[e]?l[e].apply(l,a):l[e]:void console.warn("Message '"+e+"' doesn't exist")},u={constructor:function(e){var t=u._validateParams(e);if(t.errors){var a=t.errors.reduce(function(e,t){return console.warn(t),e+=t+"\n"},"");return new Error(a)}var r={winner:!1,text:[]};if(r.neededGroupSize=u.getNeededGroupSize(t),t.groupSize&&2===t.groupSize.length&&r.neededGroupSize){r.deltaConversion=u._getDeltaConversion(t.conversionRate);var n=!(t.neededDeltaConversion&&t.neededDeltaConversion>r.deltaConversion),o=!1,i=r.neededGroupSize[0]===1/0;t.groupSize[0]>=r.neededGroupSize[0]&&t.groupSize[1]>=r.neededGroupSize[1]&&(o=!0),o&&n?t.conversion[0]>t.conversion[1]?(r.winner=1,r.text.push(c("WINNER_FIRST"))):t.conversion[0]<t.conversion[1]?(r.winner=2,r.text.push(c("WINNER_SECOND"))):(r.winner=!1,r.text.push(c("WINNER_EQUAL"))):o&&!n?(r.winner=!1,r.text.push(c("NOT_MINIMUM_DELTA_CONVERSION",t.neededDeltaConversion,r.deltaConversion))):i?(r.winner=!1,r.text.push(c("WINNER_EQUAL"))):r.text.push(c("NOT_ENOUGH",r.neededGroupSize,t.groupSize,r.deltaConversion))}return Object.assign({},t,r)},getNeededGroupSize:function(e){var t=e.alpha,a=e.beta,r=e.conversionRate,n=e.ratio;if(r[0]===r[1])return[1/0,1/0];t/=100,a/=100,r=[r[0]/100,r[1]/100];var o=Math.abs(r[0]-r[1]),i=1-r[0],s=1-r[1],l=(r[0]+n*r[1])/(1+n),c=1-l,M=u._computeCriticalNormalZValue(1-t/2),N=u._computeCriticalNormalZValue(1-a),d=Math.pow(M*Math.sqrt(l*c*(1+1/n))+N*Math.sqrt(r[0]*i+r[1]*s/n),2)/Math.pow(o,2),p=n*d;return[parseInt(Math.round(d),10),parseInt(Math.round(p),10)]},_getDeltaConversion:function(e){var t=a(e,2),r=t[0],n=t[1];if(n>r){var o=[r,n];n=o[0],r=o[1]}return Math.abs(100-r/(n/100))},_conversionToConversionRate:function(e,t){return(parseInt(t)/(parseInt(e)/100)).toFixed(s)},_validateParams:function(e){var t=e.alpha,a=void 0===t?n:t,r=e.beta,s=void 0===r?o:r,l=e.conversion,M=e.groupSize,N=e.ratio,d=void 0===N?i:N,p=e.neededDeltaConversion,g={},z=[],b=2===M.length&&""!==M[0]&&""!==M[1]&&!isNaN(M[0])&&!isNaN(M[1]),x=2===l.length&&""!==l[0]&&""!==l[1]&&!isNaN(l[0])&&!isNaN(l[1]);return a=parseFloat(a),s=parseFloat(s),d=parseFloat(d),x?l=[parseFloat(l[0]),parseFloat(l[1])]:(2!==l.length&&z.push(c("ERROR_CONVERSIONS_LENGTH")),z.push(c("ERROR_CONVERSIONS_VALID"))),M?b?M=[parseInt(M[0]),parseInt(M[1])]:z.push(c("ERROR_GROUP_SIZE")):z.push(c("ERROR_GROUP_SIZE_VALID")),(a<0||a>100||isNaN(a))&&(z.push(c("ERROR_ALPHA")),a=n),(s<0||s>100||isNaN(s))&&(z.push(c("ERROR_BETA")),s=o),isNaN(d)&&d!==i&&(z.push(c("ERROR_RATIO")),d=i),g={conversion:l,groupSize:M,ratio:d,alpha:a,beta:s},x&&b&&((l[0]>M[0]||l[1]>M[1])&&z.push(c("ERROR_CONVERSION_MORE_THAN_GROUP")),g.conversionRate=[parseFloat(u._conversionToConversionRate(M[0],l[0])),parseFloat(u._conversionToConversionRate(M[1],l[1]))]),p&&!isNaN(p)&&(g.neededDeltaConversion=parseFloat(p)),z.length&&(g.errors=z),g},_computeCriticalNormalZValue:function(e){var t=1e-6,a=-r,n=r,o=0,i=void 0;if(e<0||e>1)return-1;for(;n-a>t;)i=u._probabilityOfNormalZValue(o),i>e?n=o:a=o,o=.5*(n+a);return o},_probabilityOfNormalZValue:function(e){var t,a,n;return 0===e?a=0:(t=.5*Math.abs(e),t>.5*r?a=1:t<1?(n=t*t,a=((((((((.000124818987*n-.001075204047)*n+.005198775019)*n-.019198292004)*n+.059054035642)*n-.151968751364)*n+.319152932694)*n-.5319230073)*n+.797884560593)*t*2):(t-=2,a=(((((((((((((-45255659e-12*t+.00015252929)*t-19538132e-12)*t-.000676904986)*t+.001390604284)*t-.00079462082)*t-.002034254874)*t+.006549791214)*t-.010557625006)*t+.011630447319)*t-.009279453341)*t+.005353579108)*t-.002141268741)*t+.000535310849)*t+.999936657524)),e>0?.5*(a+1):.5*(1-a)}};e.exports=function(e){return e?u.constructor(e):u}},function(e,t){e.exports=function(e){return!(!e||"object"!=typeof e)&&(window&&"object"==typeof window.Node?e instanceof window.Node:"number"==typeof e.nodeType&&"string"==typeof e.nodeName)}}])});