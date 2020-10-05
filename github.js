const elUsers = document.querySelector("#users");
const url = "https://api.github.com";
// fetch(`${url}/users`)
// .then(
//     function(data){
//         return data.json();
//     }
// ).then(
//     function(users){
//         console.log(users);
//         for(let i = 0; i < users.length; i++){
//             const user = users[i];
//             displayUser(user);
//         }
        
//     }
// }

//search bar functionality
let searchBar = document.querySelector("#searchBar");
searchBar.addEventListener("keyup", filterSearch)
function filterSearch(){
    let filterName = searchBar.value.toUpperCase();
   Array.from(elUsers.children).forEach(el => {
        if (!el.innerText.toUpperCase().includes(filterName))
            el.style.display = "none"
        else 
            el.style.display = "block"
       
   });
   console.log(filterName);
        
}

fetch(`${url}/users`)
.then(data => data.json())
.then(users => {
    console.log(users);
    users.forEach(user => displayUser(user));
});

const displayUser= user => {
    const elUser = document.createElement("div");
    elUser.classList.add("user");
    const elImage = document.createElement("img");
    elImage.src = user.avatar_url;
    elUser.appendChild(elImage);
    const elUsername = document.createElement("a");
    elUsername.innerText = user.login;
    elUsername.href = user.html_url;
    elUsername.classList.add("name");
    elUser.appendChild(elUsername);
    fetch(`${url}/users/${user.login}`)
    .then(data => data.json())
    .then(user => {
      //  console.log(user);
        const elName = document.createElement("p");
        elName.innerText = user.name;
        elUser.appendChild(elName);
    });
    elUsers.appendChild(elUser);
}
