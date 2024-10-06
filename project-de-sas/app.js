const handleAddReservation = () => {
    const reservations = [];
    let reservation = {};
    const chiffres = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', // Numbers
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', // Uppercase letters
    ];
    
    let nom = document.getElementById("nom_value").value;
    let prenom = document.getElementById("prenom_value").value;
    let age = document.getElementById("age_value").value;
    let phone = document.getElementById("phone_value").value;
    let date_res = document.getElementById("date_res_value").value;
    let statut = document.getElementById("statut_value").value;
    let ID = [];
    for(let i=0; i<6; i++){
        ID[i] = chiffres[Math.round(Math.random() * chiffres.length)];
    }
    // verifier que tous les inputs sont remplir et ne pas vide
    if(nom && prenom && age && phone && date_res && statut){
        const regexPhone = /\d{10}/;
        const regexAge = /\d{2,3}/;
        const regexDate = /\d{1,2}\/\d{1,2}\/\d{4}/;
        // verifier est ce que le numero de telephone matcher exactement dix chiffres
        if(!regexPhone.test(phone)){
            document.querySelector(".error").style.display = "block";
            return;
        }
        // verifier est ce que l'age est valide entre deux ou trois nombres
        if(!regexAge.test(age)){
            document.querySelector(".error").style.display = "block";
            return;
        }
        // verifier est ce que la date de reservation est valide
        if(!regexDate.test(date_res)){
            document.querySelector(".error").style.display = "block";
            return;
        }
        reservation.id = ID.join("");
        reservation.nom = nom;
        reservation.prenom = prenom;
        reservation.age = age;
        reservation.phone = phone;
        reservation.dateReservation = date_res;
        reservation.statut = statut;
        document.querySelector(".error").style.display = "none";
        //! This line not working, I don't know why! I'll fix it later
        nom = ""; prenom = ""; age = ""; phone = ""; date_res = ""; statut = "";
        document.querySelector(".succes").style.display = "block";
    }
    else{
        document.querySelector(".error").style.display = "block";
    }
    // section where the reservation will added to his brothers in the array
    //! I will do it later

}