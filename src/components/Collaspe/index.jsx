import './style.css'
import React, { useState } from 'react'
import Open from '../../assets/open-collapse.svg'
import Close from '../../assets/close-collapse.svg'

function Collapse({ id, title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  function toggleCollapse() {
    setIsOpen(!isOpen)
  }

  return (
    <li className="collapse-container">
      <div className="collapse-header" key={id} onClick={toggleCollapse}>
        <div className="title-collapse-header">{title}</div>
        <img
          className="arrow-collapse-header"
          src={isOpen ? Close : Open}
          alt={isOpen ? 'Fermer' : 'Ouvrir'}
        />
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </li>
  )
}

export default Collapse
