import React from 'react'

import { ItemContainer } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <button href={repo.html_url} rel="noreferrer" target="_blank" className='verRepo'>Github</button><br />
        <button href="#"  rel="noreferrer" className="remover">Remover</button>
        <hr />
    </ItemContainer>
  )
}

export default ItemRepo;
