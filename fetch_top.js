url = `https://newsapi.org/v2/everything?au&q=architecture+sweden&apiKey=${key}`

const recievedNews2 = (newsdata) => {
    const articlesDiv = document.querySelector(".toppen")
    newsdata.articles.forEach((article,index) => {

      if(index<1){

			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "topp-puff"




			//This fetches and add images to our articles
			const img = document.createElement("img")
            img.src = article.urlToImage
            div.appendChild(img)
            articlesDiv.appendChild(div)


const copydiv=document.createElement("div")
  copydiv.className = "copy"

            const heading = document.createElement("h2")
                  heading.innerHTML = article.title
                  copydiv.appendChild(heading)

			const description = document.createElement("p")
				description.innerHTML = article.description
				copydiv.appendChild(description)

        const source = document.createElement("p")
          source.innerHTML = article.source.name
          copydiv.appendChild(source)

          const publishedAt = document.createElement("p")
            publishedAt.innerHTML = article.publishedAt
            copydiv.appendChild(publishedAt)

                articlesDiv.appendChild(copydiv)
            }


    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews2)
