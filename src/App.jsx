import { useEffect, useState } from "react"
import uuid from 'react-uuid'
import Hex from "./components/Hex"

export default function() {
  const [ tiles, setTiles ] = useState(
    localStorage.tiles ? JSON.parse(localStorage.tiles) : []
  );

  useEffect(() => {
    localStorage.setItem("tiles", JSON.stringify(tiles));
  }, [tiles]);

  function addTiles() {
    const newTiles = {
      id: uuid(),
      value: generateHex()
    }

    setTiles([newTiles, ...tiles])
  }

  function deleteTiles(tileID) {
    setTiles(tiles.filter(({ id }) => id !== tileID))
  }

  function updateTiles(updated) {
    const updatedTiles = tiles.map((tile) => {      
      if (tile.id === updated.id) {
        return updated
      }

      return tile
    })

    setTiles(updatedTiles)
  }
    
  function generateHex() {
    let colorHex = '#'
    const codeHex = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
    const randHex = () => { return Math.floor(Math.random()*codeHex.length)}
    
    for(let i = 0; i < 6; i++) { colorHex += codeHex[randHex()].toString()}

    return colorHex
  }
  
  return (
    <div className="App">
      <Hex 
        tiles={tiles}
        addTiles={addTiles}
        deleteTiles={deleteTiles}
        updateTiles={updateTiles}
        generateHex={generateHex}
      />
    </div>
  )
}
