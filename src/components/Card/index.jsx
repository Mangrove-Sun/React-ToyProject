import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import * as S from './style';

function DustInfoCard({sido}) {

  const getParameters = {
    serviceKey: process.env.REACT_APP_SERVICE_KEY,
    returnType: 'json',
    numOfRows: '100',
    pageNo: '1',
    sidoName: sido,
    ver: '1.0'
  }

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const getData = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty', {params: getParameters});
      setData(res.data.response.body.items);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!isLoading) getData();
  }, [sido])

  
  return (
    <div>
      {isLoading ?
      <S.Loading></S.Loading> :
      <>
        {data && data.map(element => {
          return (
            <S.Card color={element.pm10Grade}  key={element.stationName}>
              <S.Location className="location">
                <S.Title>{element.stationName}</S.Title><S.Sido className="sido">{element.sidoName}</S.Sido>
                <S.StarButton>{<AiOutlineStar/>}</S.StarButton>
              </S.Location>
              <S.Info className="info">
                <S.DustLv color={element.pm10Grade} className="dust-lv">
                  {element.pm10Grade === '1' ? '좋음' 
                    : element.pm10Grade === '2' ? '보통' 
                    : element.pm10Grade === '3' ? '한때나쁨' 
                    : element.pm10Grade === '4' ? '나쁨' 
                    : element.pm10Grade === '5' ? '매우나쁨' : '알수없음'}
                </S.DustLv>
                <div className="dust-stats">
                  <S.DustInfo>미세먼지 수치: {element.pm10Value}</S.DustInfo>
                  <S.DustInfo>({element.dataTime} 기준)</S.DustInfo>
                </div>
              </S.Info>
            </S.Card>
          )
        })}
      </>}
    </div>
  )
}

export default DustInfoCard