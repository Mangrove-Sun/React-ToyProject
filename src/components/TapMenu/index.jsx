import React from 'react'
import { Link } from 'react-router-dom';
import { GoLocation } from 'react-icons/go';
import { GrMapLocation } from 'react-icons/gr';
import { AiFillStar } from 'react-icons/ai';
import * as S from './style'

function BottomTapMenu() {
  return (
    <>
      <S.Footer>
        <Link to="mylocation">
          <S.Tap>
            <span>내 지역보기</span>
            <i>{<GoLocation/>}</i>
          </S.Tap>
        </Link>
        <Link to="wholesido">
          <S.Tap>
            <span>전체 시도보기</span>
            <i>{<GrMapLocation/>}</i>
          </S.Tap>
        </Link>
        <Link to="favoritelist">
          <S.Tap>
            <span>즐겨찾기</span>
            <i>{<AiFillStar/>}</i>
          </S.Tap>
        </Link>
      </S.Footer>
    </>
  )
}

export default BottomTapMenu