//RESUELVE TUS EJERCICIOS AQUI

//      Dog API

//Ejercicio 1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro. La función devuelve todas las razas de perro
const getAllBreeds = () => {
  return fetch("https://dog.ceo/api/breeds/list")
    .then((res) => res.json())
    .then((json) => json.message)
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
};

getAllBreeds().then((data) => console.log(data));

//2.- Declara una función **getRandomDog** que obtenga una imagen random de una raza.
const getRandomDog = () => {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((dog) => dog.message)
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
};
getRandomDog().then((data) => console.log(data));

//3.- Declara una función **getAllImagesByBreed** que obtenga todas las imágenes de la raza komondor.
const getAllImagesByBreed = () => {
  return fetch("https://dog.ceo/api/breed/komondor/images")
    .then((res) => res.json())
    .then((dog) => dog.message)
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
};
getAllImagesByBreed().then((data) => console.log(data));

//4.- Declara una funcion **getAllImagesByBreed2(breed)** que devuelva las imágenes de la raza pasada por el argumento.
const getAllImagesByBreed2 = (shiba) => {
  return fetch(`https://dog.ceo/api/breed/${shiba}/images`)
    .then((res) => res.json())
    .then((dog) => dog.message)
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
};
getAllImagesByBreed2().then((data) => console.log(data));

//      GitHub API

//5.- Declarara una función **getGitHubUserProfile(username)** que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).
const getGitHubUserProfile = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
};
console.log(getGitHubUserProfile('AlbeertoDZ'));

//6.- Declara una función **printGithubUserProfile(username)** que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.

function printGithubUserProfile(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((response) => response.json())
        .then((data) => {
            const userProfile = {
                img: data.avatar_url,
                name: data.name
            };
            const imgElement = document.createElement('img');
            const nameElement = document.createElement('p');
            imgElement.src = userProfile.img;
            nameElement.textContent = userProfile.name;
            document.body.appendChild(imgElement);
            document.body.appendChild(nameElement);
            return userProfile
            .catch(function (error) {
                console.error("Error fetching data:", error);
              });
        });
}

printGithubUserProfile('alenriquez96').then(data => console.log(data));

//7.- Crea una función **getAndPrintGitHubUserProfile(username)** que contenga una petición a la API para obtener información de ese usuario y devuelva un string que represente una tarjeta HTML como en el ejemplo, la estructura debe ser exactamente la misma:

const getAndPrintGitHubUserProfile = () => {
  return fetch(`https://api.github.com/users/alenriquez96`)
    .then((res) => res.json())
    .then(
      (data) =>
        `<section>
    <img src="${data.avatar_url}" alt="Alberto Enriquez">
    <h1>${data.name}</h1>
    <p>Public repos: ${data.public_repo}</p>
</section>`
    )
    .catch(function (error) {
      console.error("Error fetching data:", error);
    });
};

//8.- Manipulación del DOM: Crea un input de tipo texto, y un botón buscar. El usuario escribirá en el input el nombre de usuario de GitHub que quiera buscar. Después llamaremos a la función **getAndPrintGitHubUserProfile(username)** que se ejecute cuando se pulse el botón buscar.(Esto no se testea).

