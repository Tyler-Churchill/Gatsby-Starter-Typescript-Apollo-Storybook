import React, { useState } from "react"
import { AppButton } from "../components/AppButton"
import EmotionButton from "../components/EmotionComponent"
import CharacterAvatar from "../components/RickAndMortyCharacter"

const IndexPage = () => {
  const [characterId, setCharacterId] = useState(1)
  const [clickCount, setClickCount] = useState(0)

  const changeCharacter = () => {
    const res = Math.floor(Math.random() * 8) + 1
    if (res == characterId) {
      changeCharacter()
    } else {
      setCharacterId(res)
    }
  }
  const incrementClickCount = () => {
    setClickCount(clickCount + 1)
  }
  return (
    <div>
      <div>
        <h2>Here is an index page, please click the button</h2>
        <AppButton text={"Click me!"} onClick={incrementClickCount} />
        <span style={{ paddingLeft: "25px" }}>Total Clicks: {clickCount}</span>
      </div>
      <div>
        <h2>Rick and Morty Character:</h2>
        <CharacterAvatar id={characterId} />
      </div>
      <div>
        <EmotionButton onClick={changeCharacter}>
          Change Character
        </EmotionButton>
      </div>
      <div>
        <i>
          Notice the cache being used for characters that have already been
          fetched previously
        </i>
      </div>
    </div>
  )
}
export default IndexPage
