import { PaperPlaneRight } from "phosphor-react"
import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../Components/Header"
import { Separator } from "../Components/Separator"
import { Tweet } from "../Components/Tweet"

import './Status.css'

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo',
    'Faz sentido',
    'Parabéns pelo progresso'
  ])

    function createNewAnswer(event: FormEvent) {
      event.preventDefault()

      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }

    function handleHotkeySubmit(event:KeyboardEvent) {
       if(event.key === 'Enter' && event.ctrlKey) {
        setAnswers([newAnswer, ...answers])
        setNewAnswer('')
       }
    }

    return (
        <main className="status">
        <Header title="Tweet" /> 
    
        <Tweet content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime repellendus omnis id earum. Facilis, sint. Fuga sunt, iure nulla corporis, totam harum, mollitia temporibus est et nemo quos veniam rerum"} />

        <Separator />

            <form onSubmit={createNewAnswer} className="answer-tweet-form">
              <label htmlFor="tweet">
                <img
                  src="https://github.com/felipenobrg.png"
                  alt="Felipe Nóbrega"
                />
                <textarea id="tweet"
                 placeholder="Tweet your answer" 
                 value={newAnswer}
                 onKeyDown={handleHotkeySubmit}
                 onChange={(event) => {
                  setNewAnswer(event.target.value)
                 }}
                 />
              </label>
              <button type="submit">
               <PaperPlaneRight />
               <span> Answer </span>
              </button>
            </form>
  
  
          {answers.map(answer => {
            return <Tweet key={answer} content={answer} />
          })}
  
          </main>
    )
}