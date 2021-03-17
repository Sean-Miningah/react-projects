import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main className="container">
      <h3>questions and answers about login</h3>
      <section className="info">
        {
          questions.map((question)=>{
            return <SingleQuestion key={question.id} {...question} />
          })
        }
      </section>
    </main>
  ) 
  return <h2>accordion project setup</h2>;
}

export default App;
