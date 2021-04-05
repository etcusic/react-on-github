export const getThings = () => {
    fetch("https://rails-with-heroku.herokuapp.com/things")
    .then(resp =>  resp.json())
    .then(things => things)
}

export const sendToHeroku = (event, thing) =>{
    event.preventDefault()
    // const route = `http://localhost:3001/things`
    const route = `https://rails-with-heroku.herokuapp.com/things`
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