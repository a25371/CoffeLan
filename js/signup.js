function CheckInput() {
    let nom = document.getElementById('inputNombre').value;
    let ape = document.getElementById('inputApellido').value;
    let dir = document.getElementById('inputDir').value;
    let email = document.getElementById('inputEmail').value;
    let phone = document.getElementById('inputPhone').value;
    let fecha = document.getElementById('inputDate').value;
    let pass = document.getElementById('inputPass').value;
    let repPass = document.getElementById('inputRepPass').value;

    let Tos = document.getElementById("checkTos").checked;



    if (nom == "" || ape == "" || dir == "" || email == "" || phone == "" || fecha == "" || pass == "" || repPass == "") {  /*Empty fields make the DataBase sad, fill everything.*/
        alert('Error, There are empty fields!!');
    } else {
        if (fecha > today) {/*Date must be at least ten years before TODAY*/
            alert('Error, You need to be at least ten years old to register!!');
        } else {
            if (pass.length < 7) { /*Passwords must be over 7 chars*/
                alert('Error, Passwords must be over 7 chars!!');
            } else {
                if (pass != repPass) { /*Passwords must match*/
                    alert('Error, Passwords do not match!!');
                } else {
                    if (Tos == false) {/*They have to accept the TOS*/
                        alert('Error, you must accept the TOS to use our services!!');
                    } else { /*Everything is fine, account is made and data is sent to the DB*/
                        alert('Congratulations, your accont is ready.')
                    }/*ToDo: when everything is correct, sent data to the DB*/
                }
            }
        }

    }
}

function limpiarDatos() {
    document.getElementById("datos").innerHTML = ' ';
}


var today = new Date(); /*We want to get today's date automatically, manual work is bad!*/
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!
var yyyy = today.getFullYear() - 10;
if (dd < 10) {
    dd = '0' + dd
}
if (mm < 10) {
    mm = '0' + mm
}

today = yyyy + '-' + mm + '-' + dd;
document.getElementById("inputDate").setAttribute("max", today);