// Unchecked, other way old one 

const button = document.querySelector("button")

const getUser = async () =>{
    try {
        const response = await fetch("https://randomuser.me/api/")
        const data = await response.json()
        const randomUser = data.results[0]
        console.log(randomUser);
        return randomUser
    } catch (error) {
        console.error("Error: ", error);
    }
    
}

const container = document.querySelector(".container")

const renderUser = async () => {
    const user = await getUser()

    console.log(user);
    
    

    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card")

    const userImage = document.createElement("img")
    userImage.classList.add("user-image")
    userImage.src = user.picture.large
    userImage.alt = "User Image"

    const userList = document.createElement("ul")

    const userName = document.createElement("li")
    userList.textContent = `User: ${user.name.title} ${user.name.first} ${user.name.last}`

    const userEmail = document.createElement("li")
    userEmail.textContent = `${user.email}`

    const userPhone = document.createElement("li")
    userPhone.textContent = `${user.phone}`

    const userThumbnail = document.createElement("img")
    userThumbnail.src = user.picture.thumbnail
    userThumbnail.alt = "User Image"




    container.appendChild(cardDiv)
    cardDiv.appendChild(userImage)
    cardDiv.appendChild(userList)
    userList.appendChild(userName)
    userList.appendChild(userEmail)
    userList.appendChild(userPhone)
    cardDiv.appendChild(userThumbnail)
}

button.addEventListener("click", ()=>{
    container.innerHTML = ""
    renderUser()

})