function addRemoveNumsFromArr(inputArr) {
   let arr = inputArr;
   let resultArr = [];
   let num = 1;
   for (let i = 0; i < arr.length; i++) {
      if(arr[i] === "add"){
          resultArr.push(num);
      } else if(arr[i] === "remove"){
          resultArr.pop(); 
        }
        num++;
   }
    if(resultArr.length === 0){
        console.log("Empty");
        return;
    } 
    console.log(resultArr.join(" "));
}

// addRemoveNumsFromArr(['add', 'add', 'add', 'add']);
// addRemoveNumsFromArr(['add', 'add', 'remove', 'add', 'add']);
// addRemoveNumsFromArr(['remove', 'remove', 'remove']);