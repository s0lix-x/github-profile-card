let cari = document.getElementById("cari");
let profile = document.getElementById("profile");

cari.addEventListener("click", (usernameGithub) => {
  let username = document.getElementById("username").value;
  profile.innerHTML = "Loading...";
  async function ambilData() {
    try {
      let response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        profile.innerHTML += `Erorr`;
        return;
      }
      let data = await response.json();
      profile.innerHTML = "";
      profile.innerHTML += `<img src=${data.avatar_url}><br>`;
      profile.innerHTML += `Username: ${data.name}<br>`;
      profile.innerHTML += `Public Repos: ${data.public_repos}<br>`;
      profile.innerHTML += `Jumlah Followers: ${data.followers}<br>`;
      profile.innerHTML += `Link Github: <a href="${data.html_url}">${data.html_url}</a><br>`;
    } catch (error) {
      profile.innerHTML += "Gagal Konek ke server";
    }
  }
  ambilData();
});
