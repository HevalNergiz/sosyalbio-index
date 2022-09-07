const root = document.documentElement;

const marqueeElementsDisplayed0 = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed0");
const marqueeContent0 = document.querySelector("ul.marquee-content0");

root.style.setProperty("--marquee-elements0", marqueeContent0.children.length);

for(let m=0; m<marqueeElementsDisplayed0; m++) {
  marqueeContent0.appendChild(marqueeContent0.children[m].cloneNode(true));
}

const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

const marqueeElementsDisplayed2 = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed2");
const marqueeContent2 = document.querySelector("ul.marquee-content2");

root.style.setProperty("--marquee-elements2", marqueeContent2.children.length);

for(let k=0; k<marqueeElementsDisplayed2; k++) {
  marqueeContent2.appendChild(marqueeContent2.children[k].cloneNode(true));
}


const marqueeElementsDisplayed3 = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed3");
const marqueeContent3 = document.querySelector("ul.marquee-content3");

root.style.setProperty("--marquee-elements3", marqueeContent3.children.length);

for(let l=0; l<marqueeElementsDisplayed3; l++) {
  marqueeContent3.appendChild(marqueeContent3.children[l].cloneNode(true));
}