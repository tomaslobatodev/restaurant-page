import { content } from "./index"
import imgsrc from "./resto-bar.png"

const homepage = () => {
  const main = document.createElement("main")

  //title
  const title = document.createElement("h1")
  title.textContent = "Tom's resto-bar"

  //quote
  const quoteBox = document.createElement("div")
  quoteBox.classList.add("quoteBox")
  const quote = document.createElement("i")
  const quoteCustomer = document.createElement("b")
  quote.textContent = `"A customer's quote about the place remarking how good it is in the matter of making food"`
  quoteCustomer.textContent = "- John Cena"
  quoteBox.appendChild(quote)
  quoteBox.appendChild(quoteCustomer)

  //image
  const image = new Image()
  image.src = imgsrc

  //hours
  const hoursBox = document.createElement("ul")
  hoursBox.classList.add('hoursBox')
  const hoursTitle = document.createElement('h2')
  hoursTitle.textContent = 'Hours'
  hoursBox.appendChild(hoursTitle)
  const hours = [
    "monday: 6am to 6pm",
    "tuesday: 6am to 6pm",
    "wednesday: 6am to 6pm",
    "thursday: 8am to 10pm",
    "friday: 8am to 10pm",
    "saturday: 8am to 10pm",
    "sunday: 6am to 8pm",
  ]
  hours.forEach(hour => {
    const item = document.createElement('li')
    item.textContent = hour
    hoursBox.appendChild(item)
  })

  //location
  const locationBox = document.createElement('div')
  locationBox.classList.add('locationBox')
  const locationTitle = document.createElement('h2')
  locationTitle.textContent = 'Location'
  const locationAdress = document.createElement('p')
  locationAdress.textContent = '221b, Baker Street, London'
  locationBox.appendChild(locationTitle)
  locationBox.appendChild(locationAdress)

  main.appendChild(title)
  main.appendChild(quoteBox)
  main.appendChild(image)
  main.appendChild(hoursBox)
  main.appendChild(locationBox)

  content.appendChild(main)
}

export { homepage }
