// var pointx1 = parseInt(document.getElementById("pointx1").value);
// var pointy1 = parseInt(document.getElementById("pointy1").value);
// var pointx2 = parseInt(document.getElementById("pointx2").value);
// var pointy2 = parseInt(document.getElementByID("pointy2").value);

// var distance = Math.sqrt(Math.Pow((pointx1-pointx2),2)+Math.Pow((pointy1-pointy2),2));

// window.alert("Distance: "+distance);

// }    

function calculateDistanceBetweenTwoPoints(x1, y1, x2, y2) {
    let distance = Math.sqrt(Math.pow((x1-x2),2) + Math.pow((y1-y2),2));
    console.log(distance);
}

calculateDistanceBetweenTwoPoints(2, 4, 5, 0);
calculateDistanceBetweenTwoPoints(2.34, 15.66, -13.55, -2.9985);
