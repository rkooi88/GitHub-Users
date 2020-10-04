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
// )

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
        console.log(user);
        const elName = document.createElement("p");
        elName.innerText = user.name;
        elUser.appendChild(elName);
    });
    elUsers.appendChild(elUser);
}
