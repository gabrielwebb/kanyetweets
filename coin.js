const url = "https://api.kanye.rest"
const quoteTag = document.querySelector('.tweet')
const buttonTag = document.querySelector('button')



// grabs Data from Coindesk
const getTweet = function(){
  fetch(url)
  .then(response => response.json())
  .then(data => {
    quoteTag.innerHTML = data.quote
  })
  
}
// runs on load
getTweet() 

// loop over every nav link 



/// get a tweet price every 10secs

setInterval(
  getTweet()
,10000)



buttonTag.addEventListener('click', function(){
  getTweet()
})






