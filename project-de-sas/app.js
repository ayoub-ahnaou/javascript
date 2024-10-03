const handleAddReservation = () => {
    let ID = [];
    let chiffres = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', // Numbers
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', // Uppercase letters
      ];

    for(let i=0; i<6; i++){
        ID[i] = chiffres[Math.round(Math.random() * chiffres.length)];
    }
}