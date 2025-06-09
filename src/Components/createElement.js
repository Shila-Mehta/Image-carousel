  export  function createElement(type,className,text,src,alt){
    const element=document.createElement(type);
    if(className){
        element.className=className;
    };

    element.textContent=text;
    element.src=src;
    element.alt=alt;
    return element;

}