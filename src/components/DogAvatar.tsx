import React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import { Avatar } from "./Avatar"
import styled from "@emotion/styled"

const GRAPHQL_QUERY = gql`
  {
    dog(key: "uTW2q9d_") {
      imageUrl
    }
  }
`
type DogData = {
  dog: {
    imageUrl: string
  }
}

const SpeechBubble = styled.span`
  width: 300px;
  margin: 50px auto;
  background: #00bfb6;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  color: #fff;
  position: relative;
  :before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #00bfb6;
    border-top: 10px solid #00bfb6;
    border-bottom: 10px solid transparent;
    left: -19px;
    top: 6px;
  }
`

function DogAvatar() {
  return (
    <Query query={GRAPHQL_QUERY}>
      {({ data, loading }: { data: DogData; loading: boolean }) => {
        if (loading) return <span>Loading cute dog...</span>
        return (
          <div>
            <span>
              <Avatar src={data.dog.imageUrl} alt={"dog"} />
            </span>
            <SpeechBubble>woof!</SpeechBubble>
          </div>
        )
      }}
    </Query>
  )
}

export default DogAvatar
