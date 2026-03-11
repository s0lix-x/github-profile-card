let cari = document.getElementById("cari");
let profile = document.getElementById("profile");

cari.addEventListener("click", (usernameGithub) => {
  let username = document.getElementById('username').value;
  profile.innerHTML = ""
  fetch(`https://api.github.com/users/${username}`)
    .then(response => {
        if (!response.ok) {
            profile.innerHTML += `Erorr`
            return 
        } return response.json()
    })
    .then(data => {
            profile.innerHTML += `<img src=${data.avatar_url}><br>`;
            profile.innerHTML += `Username: ${data.name}<br>`;
            profile.innerHTML += `Public Repos: ${data.public_repos}<br>`;
            profile.innerHTML += `Jumlah Followers: ${data.followers}<br>`;
            profile.innerHTML += `Link Github: <a href="${data.html_url}">${data.html_url}</a><br>`;
    }) .catch(error => {profile.innerHTML = "Gagal Konek ke server"});
});
