javascript:(()=>{console.clear();document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach((hel) => {const textElement = document.createElement("span");textElement.innerHTML=hel.tagName;textElement.style.cssText='z-index:999; color: red; font-size:2rem; font-weight: 700; outline: 1px solid red; margin-left: 0.2em; padding: 0.1em;';hel.appendChild(textElement); console.log(hel);});})();
