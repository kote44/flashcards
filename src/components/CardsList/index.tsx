// Libs
import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const CardsList = () => {
  const data = useStaticQuery(graphql`
    query CardsListQuery {
      allMongodbFlashcardsdbCards {
        nodes {
          front
          back
        }
      }
    }
  `)
  const cards = data.allMongodbFlashcardsdbCards.nodes

  const cardsList = cards.map(card => {
    return (
      <div>
        {card.front}
        {" => "}
        {card.back}
      </div>
    )
  })

  return <div>{cardsList}</div>
}

export default CardsList
