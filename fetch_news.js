const key = "33e321f139df4e38b0b400f6ce6f8f58"
let url = `https://newsapi.org/v2/everything?q=design+sweden&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".top-container")
    newsdata.articles.forEach((article,index) => {

      if(index<3){

			//Here we create and add html elements to our html file
      const div = document.createElement("div")
      div.className = "puff-2"


      

			//This fetches and add images to our articles
			const img = document.createElement("img")
            img.src = article.urlToImage
            div.appendChild(img)

            const heading = document.createElement("h3")
                  heading.innerHTML = article.title
                  div.appendChild(heading)

			const description = document.createElement("p")
				description.innerHTML = article.description
				div.appendChild(description)

        const source = document.createElement("p")
          source.innerHTML = article.source.name
          div.appendChild(source)

          const publishedAt = document.createElement("p")
            publishedAt.innerHTML = article.publishedAt
            div.appendChild(publishedAt)

              articlesDiv.appendChild(div)
            }


    })
}

//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.
fetch(url)
  .then(response => response.json())
  .then(recievedNews)
