import EventBubbling from '../EventBubbling/EventBubbling'
import Events from '../Events/Events'
import FeedbackForm from '../FeedbackForm/FeedbackForm'
import Form from '../Form/Form'
import FormWithValidation from '../FormWithValidation/FormWithValidation'

import './App.css'

function App() {
  return (
    <>
      <Events />
      <Form />
      <FeedbackForm />
      <FormWithValidation />
      <EventBubbling />
    </>
  )
}

export default App

// stopPropagation()
// Это метод, с помощью которого прерывается
// процесс всплытия, чтобы событие не
// продолжило передаваться дальше.
