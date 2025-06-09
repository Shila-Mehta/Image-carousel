 import { createElement } from "./createElement.js";
 
 export function createSlide(slide,slideNumber){
    

   const  picContainer=createElement('div',`pic-container  slide${slideNumber}`);
   slide.forEach((imgUrl,index) => {
    const  imageFrame=createElement('div','image-frame',);
    const imgElement=createElement('img',`slide${index+1}-img`,'',imgUrl,'distorted image');
    imageFrame.appendChild(imgElement);
    picContainer.appendChild(imageFrame);
    
   });

  return  picContainer;
}