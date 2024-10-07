let reservations = [];
const message = document.querySelector(".message");
const updateMessage = document.querySelector(".updateMessage");
const res_table = document.querySelector(".reservations-table");

let nom = document.getElementById("nom_value");
let prenom = document.getElementById("prenom_value");
let age = document.getElementById("age_value");
let phone = document.getElementById("phone_value");
let date_res = document.getElementById("date_res_value");
let statut = document.getElementById("statut_value");

const handleAddReservation = () => {
    let reservation = {};
    const chiffres = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', // Numbers
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', // Uppercase letters
    ];
    
    let ID = [];
    for(let i=0; i<6; i++){
        ID[i] = chiffres[Math.round(Math.random() * chiffres.length)];
    }
    // verifier que tous les inputs sont remplir et ne pas vide
    if(nom.value && prenom.value && age.value && phone.value && date_res.value && statut.value){
        const regexPhone = /\d{10}/;
        const regexAge = /\d{2,3}/;
        const regexDate = /\d{1,2}\/\d{1,2}\/\d{4}/;
        const regexPreNom = /^[a-zA-Z]+$/;
        // verifier est ce que le nom et le prenom sont valide
        if(!regexPreNom.test(nom.value) || !regexPreNom.test(prenom.value)){
            document.querySelector(".error").style.display = "block";
            return;
        }            
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
        let i = 0;
        reservation.index = i++;
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
    // side where the reservation will added to his brothers in the array
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
    res_table.innerHTML = `
        <tr>
            <th>uid</th>
            <th>nom</th>
            <th>prenom</th>
            <th>age</th>
            <th>telephone</th>
            <th>statut</th>
            <th>date de reservation</th>
            <th>operation</th>
        </tr>
    `;
    reservations.forEach((item) => {
        res_table.innerHTML += `
            <tr>
              <td>${item.id}</td>
              <td>${item.nom}</td>
              <td>${item.prenom}</td>
              <td>${item.age}</td>
              <td>${item.phone}</td>
              <td>${item.statut}</td>
              <td>${item.dateReservation}</td>
              <td class="operation">
                <div onClick="fillInputsWithValue(${item.index})" >update</div>
                <div>delete</div>
              </td>
            </tr>
        `;
    });
}

const fillInputsWithValue = (index) => {
    document.querySelector(".error").style.display = "none";

    nom.value = reservations[index].nom;
    prenom.value = reservations[index].prenom;
    age.value = reservations[index].age;
    phone.value = reservations[index].phone;
    date_res.value = reservations[index].dateReservation;
    statut.value = reservations[index].statut;

    document.querySelector(".updateMessage").style.display = "block";
    setInterval(() => {
        document.querySelector(".updateMessage").style.display = "none";
    }, 5000);
    // switch between buttons (update and submit) in html
    document.querySelector(".btn-update").style.display = "block";
    document.querySelector(".btn-submit").style.display = "none";
    document.querySelector(".btn-update").addEventListener("click", () => {
        handleUpdateReservation(index);
    })
    handleAfficheReservations();
}

const handleUpdateReservation = (index) => {
    document.querySelector(".error").style.display = "none";

    if(nom.value && prenom.value && age.value && phone.value && date_res.value && statut.value){
        const regexPhone = /\d{10}/;
        const regexAge = /\d{2,3}/;
        const regexDate = /\d{1,2}\/\d{1,2}\/\d{4}/;
        const regexPreNom = /^[a-zA-Z]+$/;
        // verifier est ce que le nom et le prenom sont valide
        if(!regexPreNom.test(nom.value) || !regexPreNom.test(prenom.value)){
            document.querySelector(".error").style.display = "block";
            return;
        }            
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
        reservations[index].nom = nom.value;
        reservations[index].prenom = prenom.value;
        reservations[index].age = age.value;
        reservations[index].phone = phone.value;
        reservations[index].dateReservation = date_res.value;
        reservations[index].statut = statut.value;
        document.querySelector(".error").style.display = "none";
        nom.value = ""; prenom.value = ""; age.value = ""; 
        phone.value = ""; date_res.value = ""; statut.value = "";
        document.querySelector(".succes").style.display = "block";
        setInterval(() => {
            document.querySelector(".succes").style.display = "none";
        }, 1000);

        // switch between buttons (update and submit) in html
        document.querySelector(".btn-update").style.display = "none";
        document.querySelector(".btn-submit").style.display = "block";
    }
    else{
        document.querySelector(".error").style.display = "block";
        return;
    }
}