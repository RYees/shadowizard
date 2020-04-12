import { isModuleDeclaration } from "babel-types";

function shadowizard(options){
    let images = document.querySelectorAll('.shadowizard');
    if(options.shadow_type === 'hard')
     options.shadow_type = '0px'
    else
     options.shadow_type = '15px'

    images.forEach(image =>{
        image.getElementsByClassName.boxShadow =`10px 10xp ${options.shadow_type} 1px rgba(0,0,0,0.12)`;
 
        if(options.padding) {
            image.getElementsByClassName.padding = '1em';
        }
    })
}
module.exports.shadowizard = shadowizard;