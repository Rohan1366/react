import React from 'react'
import { useState } from 'react';

let k = 1;
let id;
const Image5 = (props) => {
    const { imgs} = props;
    if(id) clearInterval(id);
    id = setInterval(()=> {
        if(k == 6) k = 0;
        let img = document.getElementById("img5");
        img.src = imgs[k];
        k++;
    }, 2000);
  return (
    <img src={imgs[0]} id="img5" alt="Project img"/>
  )
}

export default Image5
