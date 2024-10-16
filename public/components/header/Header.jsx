import React from 'react'

function Header() {
  return (
    <>
    
    <header>
        <div className="container">
          <div className="header-top">
            <div className="header-top-left">
              <p><a href>Tap.az</a></p>
              <p className="sil"> <a href>Boss.az</a></p>
              <p className="sil"><a href>Bina.az</a></p>
            </div>
            <div className="header-top-right">
              <p className="destek" style={{color: 'black'}}>Dəstək:(012)505-77-55</p>
              <p className="destek">Yardım</p>
              <p>RU</p>
              <p><i className="fa-solid fa-heart" />Seçilmişlər</p>
              <p><i className="fa-solid fa-user" />Giriş</p>
            </div>
          </div>
        </div>
        <nav>
          <div className="container">
            <div className="nav-con">
              <i onclick="burgerShow()" id="bar-icon" className="fa-solid fa-bars" />
              <ul id="bugerMenu">
                <li style={{display: 'flex', justifyContent: 'end', padding: 0}}><i onclick="burgerBagla()" className="fa-solid fa-xmark" /></li>
                <li>Bütün elanlar</li>
                <li>Salonlar</li>
                <li>Avtokataloq</li>
                <li>Aksesuarlar</li>
                <li>Audio və video texnika </li>
                <li>Avto kosmetika və avtokimya</li>
                <li>Ehtiyat hissələri</li>
                <li>Ehtiyat hissələri və
                  aksesuarlar</li>
                <li>GPS naviqatorlar</li>
                <li>Qeyydiyat nişanları </li>
                <li>Siqnalizasiyalar</li>
                <li>Videoqeydiyyatçılar</li>
                <li>Şinlər,diskler və təkərlər</li>
                <li>Digər</li>
              </ul>
              <ul className="nav-list">
                <li><a style={{fontSize: '18px', fontWeight: 700}} href>TURBO.AZ</a></li>
                <li><a href>Bütün elanlar</a></li>
                <li><a href>Salonlar</a></li>
                <li><a href>Avtokataloq</a></li>
                <li><a style={{padding: '10px 0'}} href>Moto</a></li>
                <li className="ehtiyat"><a style={{position: 'relative', padding: '10px 0'}} href>Ehtiyat hissələri və
                    aksesuarlar</a>
                  <div className="ehtiyat-drop">
                    <ul>
                      <li>Aksesuarlar</li>
                      <li>Audio və video texnika </li>
                      <li>Avto kosmetika və avtokimya</li>
                      <li>Ehtiyat hissələri</li>
                      <li>GPS naviqatorlar</li>
                      <li>Qeyydiyat nişanları </li>
                      <li>Siqnalizasiyalar</li>
                      <li>Videoqeydiyyatçılar</li>
                      <li>Şinlər,diskler və təkərlər</li>
                      <li>Digər</li>
                    </ul>
                  </div>
                </li>
                <li className="icare"><a style={{padding: '5px'}} href>İcarə</a>
                  <div className="ehtiyat-drop drop2">
                    <ul>
                      <li>Avtomobillər </li>
                      <li>avtobuslar və mikroavtobuslar</li>
                      <li>Motosiklet və mopedlər</li>
                      <li>Xüsusi texnika </li>
                      <li>Digər</li>
                    </ul>
                  </div>
                </li>
              </ul>
              <button><i className="fa-solid fa-plus" />Yeni elan</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header