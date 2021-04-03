export const sendToHeroku = (event, thing) =>{
    event.preventDefault()
    // const route = `http://localhost:3001/things`
    const route = `https://my-sous-backend.herokuapp.com/things`
    const configObject = {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Accept": 'application/json'
        },
        body: JSON.stringify(thing)
    }

    fetch(route, configObject)
      .then(response => response.json())
      .then(json => console.log(json))
}