import React from 'react'

const infEnum = {
  2: 'infinite',
  3: 'gravity',
  4: 'heavenly',
  5: 'vivid',
}

const infShortEnum = {
  2: 'inf',
  3: 'grv',
  4: 'hvn',
  5: 'vvd',
}

function Difficulty({ difficulty, inf_ver }) {
  function difStrings(difName) {
    switch (difName) {
      case 'novice':
        return [difName, 'nov']
      case 'advanced':
        return [difName, 'adv']
      case 'exhaust':
        return [difName, 'exh']
      case 'infinite':
        return [infEnum[inf_ver], infShortEnum[inf_ver]]
      case 'maximum':
        return [difName, 'mxm']
      default:
        return [difName, '']
    }
  }

  return (
    <div className="difficulties">
      {/* object to array and map */}
      {Object.entries(difficulty).map((entry) => {
        const [difName, difInfo] = entry;
        const [difClass, difShort] = difStrings(difName, inf_ver);
        if (difInfo.difnum === 0) return null;
        return (
          <div className={`difficulty ${difClass}`}>{difShort} {difInfo.difnum}</div>
        )
      })}
    </div>
  )
}

export default Difficulty
