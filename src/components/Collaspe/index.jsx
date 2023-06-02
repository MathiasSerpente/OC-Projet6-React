import React, { useState } from 'react'
import Open from '../../assets/open-collapse.svg'
import Close from '../../assets/close-collapse.svg'
import './style.css'

const Collapse = ({ id, title, content }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse-container">
      <div className="collapse-header" key={id} onClick={toggleCollapse}>
        <h3>{title}</h3>
        <img src={isOpen ? Close : Open} alt={isOpen ? 'Close' : 'Open'} />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  )
}

export default Collapse
