
{
  document.querySelector('.btn').addEventListener('click', (e) => {
    fetch("https://official-joke-api.appspot.com/jokes/programming/random")
    .then(resp => resp.json())
    .then(resp => {
      console.log(resp);

      resp.forEach(joke => {
        console.log(joke);
        console.log(`setup: ${joke.setup}`);
        console.log(`punchline: ${joke.punchline}`);
          
        const jokeDiv = document.querySelector('.joke');
          
        jokeDiv.innerHTML = `
          <div class="row">
            <div class="col-6"><h4 class="card-text text-inherit">${joke.setup}</h4></div>
          </div>
          <div><img class="img-fluid" src="2-2.png" alt=""></div>
        `

        function showPunchline() {
          jokeDiv.innerHTML = `
            <div class="row">
              <div class="col-6"><h4 class="card-text text-inherit">${joke.setup}</h4></div>
              <div class="col-6"><h4 class="card-text text-justify">${joke.punchline}</h4></div>
              </div>
            <div><img class="img-fluid" src="3-3.png" alt=""></div>
          `
        }
          setTimeout(showPunchline, 2500); 
      })
      e.preventDefault();
    })
  })
}




