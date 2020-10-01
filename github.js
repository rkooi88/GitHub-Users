const elUsers = document.querySelector("#users");
console.log(elUsers);
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
// )

fetch(`${url}/users`)
.then(data => data.json())
.then(users => {
    console.log(users);
    users.forEach(user => displayUser(user));
});

function displayUser(user){
    const elUser = document.createElement("div");
    elUser.classList.add("user");
    const elImage = document.createElement("img");
    elImage.src = user.avatar_url;
    elUser.appendChild(elImage);
    const elName = document.createElement("a");
    elName.innerText = user.login;
    elName.href = user.html_url;
    elName.classList.add("name");
    elUser.appendChild(elName);
    fetch(`${url}/users/${user.login}`)
    .then(data => data.json())
    .then(user => {
        console.log(user);
    });
    elUsers.appendChild(elUser);
}
