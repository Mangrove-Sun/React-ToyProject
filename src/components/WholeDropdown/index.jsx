import React, { useState } from 'react'
import { SidoData } from '../../constants/SidoData'
import DustInfoCard from '../Card';

function DropdownMenu() {
  const [selectedSido, setSelectedSido] = useState('서울');
  const sidoData = SidoData;
  
  const selectHandler = (e) => {
    setSelectedSido(e.target.value);
  }

  return (
    <>
      <div>
        <select name="sidoName" onChange={selectHandler}>
          {sidoData.map(element => {
            return (
              <option 
                key={element}
                value={element}
                defaultValue={selectedSido === element}>
                  {element}
              </option>
            )
          })}
        </select>
      </div>
      <DustInfoCard sido={selectedSido}/>
    </>
  )
}

export default DropdownMenu