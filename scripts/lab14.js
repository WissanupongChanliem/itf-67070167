const usernameInput = document.getElementById('username_input')
const usernameText = document.getElementById('username')
const pictureUrlInput = document.getElementById('profile_url_input')
const profilePicture = document.getElementById('profile_picture')
const phoneNameInput = document.getElementById('phone_name_input')
const phoneNumberInput = document.getElementById('phone_number_input')
const phoneBookTable = document.getElementById('phone_book_table')
let phonenumber = []
function saveUsername() {
    const new_username = usernameInput.value;
    usernameText.textContent = new_username;
}

function saveProfileURL() {
    const new_url = pictureUrlInput.value;
    profilePicture.style.backgroundImage = `url('${new_url}')`;
}

function addPhoneNumberList(){
    const name = phoneNameInput.value;
    const number = phoneNumberInput.value;
    if (name && number){
        phonenumber.push([name,number])
        let table_row = document.createElement("tr");
        let index = document.createElement('td');
        index.textContent = phonenumber.length
        let phone_name = document.createElement('td')
        phone_name.textContent = name
        let phone_number = document.createElement('td')
        phone_number.textContent = number

        table_row.appendChild(index)
        table_row.appendChild(phone_name)
        table_row.appendChild(phone_number)
        phoneBookTable.appendChild(
            table_row
        )
    }
}

function saveCSV() {
    const csvContent = phonenumber.map(row => row.join(",")).join("\n"); // Convert array to CSV string
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "data.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
};
