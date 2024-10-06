let reservations = [];
const message = document.querySelector(".message");
const res_table = document.querySelector(".reservations-table");

const handleAddReservation = () => {
    let reservation = {};
    const chiffres = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', // Numbers
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', // Uppercase letters
    ];
    
    let nom = document.getElementById("nom_value");
    let prenom = document.getElementById("prenom_value");
    let age = document.getElementById("age_value");
    let phone = document.getElementById("phone_value");
    let date_res = document.getElementById("date_res_value");
    let statut = document.getElementById("statut_value");
    let ID = [];
    for(let i=0; i<6; i++){
        ID[i] = chiffres[Math.round(Math.random() * chiffres.length)];
    }
    // verifier que tous les inputs sont remplir et ne pas vide
    if(nom.value && prenom.value && age.value && phone.value && date_res.value && statut.value){
        const regexPhone = /\d{10}/;
        const regexAge = /\d{2,3}/;
        const regexDate = /\d{1,2}\/\d{1,2}\/\d{4}/;
        // verifier est ce que le numero de telephone matcher exactement dix chiffres
        if(!regexPhone.test(phone.value)){
            document.querySelector(".error").style.display = "block";
            return;
        }
        // verifier est ce que l'age est valide entre deux ou trois nombres
        if(!regexAge.test(age.value)){
            document.querySelector(".error").style.display = "block";
            return;
        }
        // verifier est ce que la date de reservation est valide
        if(!regexDate.test(date_res.value)){
            document.querySelector(".error").style.display = "block";
            return;
        }
        reservation.id = ID.join("");
        reservation.nom = nom.value;
        reservation.prenom = prenom.value;
        reservation.age = age.value;
        reservation.phone = phone.value;
        reservation.dateReservation = date_res.value;
        reservation.statut = statut.value;
        document.querySelector(".error").style.display = "none";
        nom.value = ""; prenom.value = ""; age.value = ""; 
        phone.value = ""; date_res.value = ""; statut.value = "";
        document.querySelector(".succes").style.display = "block";
        setInterval(() => {
            document.querySelector(".succes").style.display = "none";
        }, 1000);
    }
    else{
        document.querySelector(".error").style.display = "block";
        return;
    }
    // section where the reservation will added to his brothers in the array
    // TODO: I will do it later
    reservations.push(reservation);
    handleAfficheReservations();

}

const showHideTable = () => {
    if(reservations.length == 0){
        message.classList.remove("hide-item");
        res_table.classList.add("hide-item");
    }
    else{
        message.classList.add("hide-item");
        res_table.classList.remove("hide-item");
    }
}

const handleAfficheReservations = () => {
    showHideTable();
    console.log(reservations.length);
    reservations.forEach((item) => {
        
    });
}