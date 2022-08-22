import React, { useEffect, useState } from 'react'
import { SidoData } from '../../constants/SidoData'
import DustInfoCard from '../Card';
import * as S from './style'

function DropdownMenu() {
  const sidoData = SidoData;
  const sido = JSON.parse(localStorage.getItem('sido'));
  const [selectedSido, setSelectedSido] = useState(sido);

  const selectHandler = (e) => {
    setSelectedSido(e.target.value);
    localStorage.setItem('sido',JSON.stringify(e.target.value))
  }

  const getSido = () => {
    if (!sido) setSelectedSido('전국');
  }
  useEffect(() => {
    getSido()
  }, [])

  
  return (
    <>
      <S.Menu>
        <div className='menu'>
          <select name="sidoName" onChange={selectHandler} defaultValue={sido}>
            {sidoData.map(element => {
              return (
                <option 
                  key={element}
                  value={element}
                  >
                    {element}
                </option>
              )
            })}
          </select>
        </div>
      </S.Menu>
      <DustInfoCard sido={selectedSido}/>
    </>
  )
}

export default DropdownMenu