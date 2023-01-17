import { useState} from 'react';

// import { Container } from './styles';

export default function BasicForm() {
  const [text, setText] = useState('')

  const handleChangeText = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <h3>{text}</h3>
      <input type="text" onChange={handleChangeText} value={text} />
    </div>
  )
}
