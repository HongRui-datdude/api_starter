
let getData = async () => {
    let apiKey = "afee10d4a4fb4b0907ab400fc7895e70"
    let proxy = "https://cors-anywhere.herokuapp.com/"
    let myURL = `https://api.darksky.net/forecast/${apiKey}/1.3521,103.8198`

    let response = await fetch(proxy+myURL)
    let data = await response.json()
    console.log(data)


}

let postToFirebase = async ( user ) => {

    let firebaseURL = `https://test-2c2ca.firebaseio.com/users.json`

    let options = {
        method: "POST",
        body:JSON.stringify(user)
    }

    let response = await fetch(firebaseURL,options)
    console.log("Response Sent")





}

getData()


postToFirebase({
    name:"jared",
    email: "jaredlalal@gmail.com",
    password: "password"
})