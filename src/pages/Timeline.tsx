
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../Components/Header"
import { Separator } from "../Components/Separator"
import { Tweet } from "../Components/Tweet"

import './Timeline.css'

let newTweet = ''

export function Timeline() {
const [newTweet, setNewTweet] = useState('') // Estado
//   Mostrar os tweets,   Atualizar os Tweets 
  const [tweets, setTweets] = useState([
    'Meu primeiro Tweet',
    'Teste',
    'Deu certo o tweet'
  ])

    function createNewTweet(event: FormEvent) {   //Atributo do TypeScript
      event.preventDefault()

      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }

    function handleHotkeySubmit(event:KeyboardEvent) {
      if(event.key === 'Enter' && event.ctrlKey) {
        setTweets([newTweet, ...tweets])
        setNewTweet('')
      }
   }
    return (
        <main className="timeline">
        <Header title="Home" /> 
    
            <form onSubmit={createNewTweet} className="new-tweet-form">
              <label htmlFor="tweet">
                <img
                  src="https://github.com/felipenobrg.png"
                  alt="Felipe Nóbrega"
                />
                <textarea
                 id="tweet"
                 placeholder="What's happening?" 
                 value={newTweet}
                 onKeyDown={handleHotkeySubmit}
                onChange={(event) => {
                  setNewTweet(event.target.value)
                }}
                />
              </label>

              <button type="submit">Tweet</button>
            </form>
  
          <Separator />
  
          {tweets.map(tweet => {
            return <Tweet key={tweet} content={tweet} />
          })}
  
          </main>
    )
}