import React from 'react'
import { Link } from 'react-router-dom';

function BottomTapMenu() {
  return (
    <>
      <footer>
        <Link to="mylocation">내 지역 보기</Link>
        <Link to="wholesido">전체 시도보기</Link>
        <Link to="favoritelist">즐겨찾기 지역 보기</Link>
      </footer>
    </>
  )
}

export default BottomTapMenu