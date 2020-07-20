import React from "react"
import { gql, useQuery, ApolloError } from "@apollo/client"
import { Avatar } from "./Avatar"

const GET_CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      name
      image
    }
  }
`
type CharacterData = {
  character: {
    name: string
    image: string
  }
}

function CharacterAvatar({ id }: { id: number }) {
  const {
    loading,
    error,
    data,
  }: {
    loading: boolean
    error?: ApolloError
    data?: CharacterData
  } = useQuery(GET_CHARACTER_QUERY, {
    ssr: false,
    variables: { id },
  })
  if (error) return <>`Error! ${error.message}`</>

  return (
    <>
      {loading && <h3>"loading..."</h3>}
      {data && (
        <div style={{ minHeight: "150px" }}>
          <Avatar src={data.character.image} alt={data.character.name} />
          <h3>{data.character.name}</h3>
        </div>
      )}
    </>
  )
}

export default CharacterAvatar
