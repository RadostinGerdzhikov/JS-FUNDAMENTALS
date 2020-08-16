function calculateTotalPriceТоStayInHotel(groupNumber, typeGroup, day) {
    let totalPrice = 0;
    // Friday	Saturday	Sunday
    switch (typeGroup) {
        case "Students":
            if (day === "Friday") {
                totalPrice = 8.45;
            }

            if (day === "Saturday") {
                totalPrice = 9.80;
            }

            if (day === "Sunday") {
                totalPrice = 10.46;
            }

            if (groupNumber >= 30) {
                totalPrice = totalPrice * 0.85;
            }

            totalPrice *= groupNumber;
            break;

        case "Business":
            if (day === "Friday") {
                totalPrice = 10.90;
            }

            if (day === "Saturday") {
                totalPrice = 15.60;
            }

            if (day === "Sunday") {
                totalPrice = 16;
            }

            if (groupNumber >= 100) {
                groupNumber -= 10;
            }

            totalPrice *= groupNumber;
            break;

        case "Regular":
            if (day === "Friday") {
                totalPrice = 15;
            }

            if (day === "Saturday") {
                totalPrice = 20;
            }

            if (day === "Sunday") {
                totalPrice = 22.50;
            }

            if (groupNumber >= 10 && groupNumber <= 20) {
                totalPrice -= totalPrice * 0.05;
            }
            totalPrice *= groupNumber;
            break;
    }
     
    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

calculateTotalPriceТоStayInHotel(30, "Students", "Sunday");
calculateTotalPriceТоStayInHotel(40, "Regular", "Saturday");