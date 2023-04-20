const api_key = "pnjLRyC1b1QDADbFPerQL74CEqWvdlAfcfKUAuswxCNB3Kw4dZ";

const type = document.getElementById("type");
const result = document.getElementById("result-paragraph");
const resultImage = document.getElementById("result-image");
const resultLink = document.getElementById("result-link")
const btn = document.getElementById("submit");


btn.addEventListener('click', () => {
   
    fetch(('https://pokeapi.co/api/v2/type/' + type.value), {
    }).then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data => {
        //console.log(data);
        //console.log(data["pokemon"][16]["pokemon"]['name'])
        const tempName = data["pokemon"][Math.floor(Math.random() * data["pokemon"]["length"])]["pokemon"]['name']
        //linkResult = data["pokemon"][Math.floor(Math.random() * data["pokemon"]["length"])]["pokemon"]['url']
        
        result.innerHTML = tempName.charAt(0).toUpperCase() + tempName.slice(1);

        fetch(('https://pokeapi.co/api/v2/pokemon/' + tempName), {
        }).then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            console.log(data);
            //console.log(data["pokemon"][16]["pokemon"]['name'])
            resultImage.setAttribute("src", data["sprites"]['front_default']);



        }).catch(error => {
            console.error('There was an error!', error);
        });
        
    }).catch(error => {
        console.error('There was an error!', error);
    });
    

    
})
document.getElementById("submit").addEventListener("click", clear);

function clear() {
    console.log("yes")
    document.getElementById("form").reset();
}

// data["pokemon"][16]
// data["pokemon"][Math.floor(Math.random() * data["pokemon"]["length"])]
