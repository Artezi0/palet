export default function({ tiles, addTiles, deleteTiles, updateTiles, generateHex }) {
  let sorted = tiles.sort((a, b) => a.id - b.id)

  return (
    <section>
      <div style={{ display: 'flex', gap: 10 }}>
      {sorted.map(({id, value}) => { 
        return (
          <div style={{ width: 100, height: 100, background: value }} key={id}>
            <button type="button" onClick={() => updateTiles({
              ...id,
              id: id,
              value: generateHex()
            })}>Shuffle</button>
            <button type="button" onClick={() => deleteTiles(id)}>Del</button>
          </div>
        )
      })}
      </div>
      <button type="button" onClick={addTiles} disabled={tiles.length > 3 ? true : false}>New block</button>
    </section>
  )
}

