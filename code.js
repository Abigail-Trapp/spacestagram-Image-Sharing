// API key g9SQl5TxrWHWIwcMFM0gUDcuD404ecMK34t2MUU3

const url = "https://api.nasa.gov/planetary/apod?api_key=g9SQl5TxrWHWIwcMFM0gUDcuD404ecMK34t2MUU3"
fetch(url, {
    method: "GET",
    headers: {
        "X-Auth-Token": "ef72570ff371408f9668e414353b7b2e"
    }
})
    .then(resp => resp.json())
    .then(function (data) {
    
        let picBox = document.getElementById("picBox")
        let title = document.createElement("h2")
        title.innerHTML=`${data.title}`
        picBox.append(title)

        let explanation = document.createElement("p")
        explanation.innerHTML = `${data.explanation}`
        picBox.append(explanation)

        let img = document.createElement("img")
        img.src = data.url
        explanation.append(img)

        let likeBtn = document.getElementById("like")

        function likeReaction(){
            
        }
       
        likeBtn.onclick = function () {
            likeBtn.style.color = "red"
            let p = document.getElementById("reactMessage")
            p.innerHTML="You love this!"
        }

        if(likeBtn.onclick === true){
          likeBtn.onclick = null
        }

        let copyright = document.createElement("p")
        copyright.innerHTML= `copyright: ${data.copyright} ${data.date}`
        picBox.append(copyright)

    })
    .catch(function (error) {
        console.log(error);
    });

  


