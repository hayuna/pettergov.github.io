
{
  document.querySelector('.btn').addEventListener('click', (e) => {
      fetch("https://official-joke-api.appspot.com/jokes/programming/random")
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp);

        resp.forEach(joke => {
          console.log(`Id: ${joke.id}`);
          console.log(`type: ${joke.type}`);
          console.log(`setup: ${joke.setup}`);
          console.log(`punchline: ${joke.punchline}`);
          const showJoke = document.querySelector('.showJoke').innerHTML = 
          `
            <div class="card text-white bg-primary mb-3">
              <div class="card-header">ID: ${joke.id}</div>
              <div class="card-body">
                <h5 class="card-text">${joke.setup} ${joke.punchline}</h5>
              </div>
            </div>
           `
        })
      })
      
      e.preventDefault();
  })
}

















