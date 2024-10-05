const handleAddReservation = () => {
    const reservations = [];
    let reservation = {};
    const chiffres = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', // Numbers
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', // Uppercase letters
    ];
    
    const nom = document.getElementById("nom_value").value;
    const prenom = document.getElementById("prenom_value").value;
    const age = document.getElementById("age_value").value;
    const phone = document.getElementById("phone_value").value;
    const date_res = document.getElementById("date_res_value").value;
    const statut = document.getElementById("statut_value").value;
    let ID = [];
    for(let i=0; i<6; i++){
        ID[i] = chiffres[Math.round(Math.random() * chiffres.length)];
    }
    // verifier que tous les inputs sont remplir et ne pas vide
    if(nom && prenom && age && phone && date_res && statut){
        // verifier le telephone est valide
        const regexPhone = /\d{10}/;
        const regexAge = /\d{2,3}/;
        if(!regexPhone.test(phone)){
            document.querySelector(".error").style.display = "block";
            return;
        }
        if(!regexAge.test(age)){
            document.querySelector(".error").style.display = "block";
            return;
        }
        // verifier est ce que la date de reservation est valide
        reservation.id = ID.join("");
        reservation.nom = nom;
        reservation.prenom = prenom;
        reservation.age = age;
        reservation.phone = phone;
        reservation.dateReservation = date_res;
        reservation.statut = statut;
        console.log(reservation);
        document.querySelector(".error").style.display = "none";
    }
    else{
        document.querySelector(".error").style.display = "block";
    }

}