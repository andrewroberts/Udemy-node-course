console.log('Client-side javscript running!')

fetch('http://localhost:3000/weather').then((response) => {
    response.json(data).then((data) => {
        console.log(data)
    })
})