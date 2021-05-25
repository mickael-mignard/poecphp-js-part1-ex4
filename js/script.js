
/**
 * Display the lastname, first name and city of the user
 */
function display() {
    let lastName = document.getElementById("lastName").value;
    let firstName = document.getElementById("firstName").value;
    let city = document.getElementById("city").value;

    alert(
        "Nom : " + lastName + "\n" +
        "Prénom : " + firstName + "\n" +
        "Ville : " + city
    )
}