function calculateVolumeAndAreaCone(radius, height) {
   
   let slantHeight = Math.sqrt(radius ** 2 + height ** 2);    
   let areaCone = Math.PI * radius **2 + Math.PI * radius * slantHeight;
   
   let volumeCone = Math.PI * radius * radius * (height/3);

    console.log(`volume = ${volumeCone.toFixed(4)}`); 
    console.log(`area = ${areaCone.toFixed(4)}`);
}

 calculateVolumeAndAreaCone(3,5);
 //calculateVolumeAndAreaCone(3.3,7.8);