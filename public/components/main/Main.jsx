import React from 'react'
import Card from './Card';

function Main(props) {
  console.log(props.data);
  
  return (
    <>
      <main>
        <section style={{ backgroundColor: '#ebedf3' }} id="filter">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '25px' }} className="boxs ">
              <div className="boxx">
                <div id="markaDrop" className="markaDrop  bord7 mrg">
                  <div id="marka" className="marka bg-white">
                    <span><span id="wordMarka" className="wordMarka">Marka</span>
                      <p style={{ margin: 0, display: 'none', color: '#212c3a' }} id="secilmisMarka" className="secilmisMarka" />
                    </span>
                    <label htmlFor="inputMarka" onclick="markaDrop()" className="arrow fa-solid fa-chevron-down" />
                    <input oninput="filterMarka()" placeholder="Marka yazın" id="inputMarka" className="inputMarka" type="text" />
                  </div>
                  <ul id="markalar" style={{ top: '208px' }} className="markalar">
                  </ul>
                </div>
                <div id="price" className="bord7 bg-white ">
                  <div onclick="minYaz()" id="divMin" className>
                    <span style={{ transition: '.2s', color: '#8d94ad' }} id="textMin">Qiymət, min</span>
                    <input id="inpMin" type="number" />
                    <i onclick="baglaMin(event)" id="priceİcoMin" style={{ position: 'absolute', right: '12px', bottom: '5px', fontSize: '14px', color: '#8d94ad', display: 'none', cursor: 'pointer' }} className="fa-regular fa-circle-xmark" />
                  </div>
                  <div onclick="maxYaz()" id="divMax">
                    <span style={{ transition: '.2s', color: '#8d94ad' }} id="textMax">maks.</span>
                    <input id="inpMax" type="number" />
                    <i onclick="baglaMax(event)" id="priceİcoMax" style={{ position: 'absolute', right: '12px', bottom: '5px', fontSize: '14px', color: '#8d94ad', display: 'none', cursor: 'pointer' }} className="fa-regular fa-circle-xmark" />
                  </div>
                </div>
              </div>
              <div className="boxx">
                <div id="modelDrop" className="markaDrop  bord7 mrg">
                  <div id="model" className="marka bg-white">
                    <span><span id="wordModel" className="wordMarka">Model</span>
                      <p style={{ margin: 0, display: 'none', color: '#212c3a' }} id="secilmisModel" className="secilmisMarka" />
                    </span>
                    <label id="arrowModel" htmlFor="inputModel" onclick="modelDrop()" className="arrow fa-solid fa-chevron-down" />
                    <input oninput="filterModel()" placeholder="Model yazın" id="inputModel" className="inputMarka" type="text" />
                  </div>
                  <ul id="modeller" style={{ top: '208px' }} className="markalar">
                  </ul>
                </div>
                <div id="barterAndKredit" className>
                  <div id="currency" className="bg-white bord7 ">
                    <div onclick="currencyDrop()" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', padding: '0 10px', height: '100%' }}>
                      <p style={{ margin: 0 }} id="secilmisCurrency  ">AZN</p>
                      <label id="currencyArrow" htmlFor="inputModel" className="fa-solid fa-chevron-down" />
                    </div>
                    <ul id="currencyList" style={{ top: '280px' }}>
                      <li onclick="currencySec(this)">AZN</li>
                      <li onclick="currencySec(this)">USD</li>
                      <li onclick="currencySec(this)">EUR</li>
                    </ul>
                  </div>
                  <div onclick="kreditSec(this)" id="kredit" className="bart-butons bg-white   bord7 ">
                    <p>Kredit</p>
                  </div>
                  <div onclick="barterSec(this)" id="barter" className="bart-butons bg-white bord7 ">
                    <p>Barter</p>
                  </div>
                </div>
              </div>
              <div className="boxx">
                <div id="veziyet" className="bg-white bord7 mrg">
                  <div onclick="changeColor(this)" id="hamsi">
                    <p>Hamsı</p>
                  </div>
                  <div onclick="changeColor(this)" id="yeni">
                    <p>Yeni</p>
                  </div>
                  <div onclick="changeColor(this)" id="surulmus">
                    <p>Sürülmüş</p>
                  </div>
                </div>
                <div id="banDrop" className="markaDrop  bord7 mrg">
                  <div id="ban" className="marka bg-white">
                    <span><span id="wordBan" className="wordMarka">Ban növü</span>
                      <p style={{ margin: 0, display: 'none', color: '#212c3a' }} id="secilmisBan" className="secilmisMarka" />
                    </span>
                    <label id="arrowBan" htmlFor="inputBan" onclick="banDrop()" className="arrow fa-solid fa-chevron-down" />
                    <input oninput="filterBan()" placeholder="Ban yazın" id="inputBan" className="inputMarka" type="text" />
                  </div>
                  <ul style={{ top: '280px' }} id="banlar" className="markalar">
                  </ul>
                </div>
              </div>
              <div className="boxx">
                <div id="seherDrop" className="markaDrop  bord7 mrg">
                  <div id="seher" className="marka bg-white">
                    <span><span id="wordSeher" className="wordMarka">Şəhər</span>
                      <p style={{ margin: 0, display: 'none', color: '#212c3a' }} id="secilmisSeher" className="secilmisMarka" />
                    </span>
                    <label id="arrowSeher" htmlFor="inputSeher" onclick="seherrDrop()" className="arrow fa-solid fa-chevron-down" />
                    <input oninput="filterSeher()" placeholder="Şəhər yazın" id="inputSeher" className="inputMarka" type="text" />
                  </div>
                  <ul style={{ top: '210px' }} id="seherler" className="markalar">
                  </ul>
                </div>
                <div id="year" className="bg-white bord7 mrg">
                  <div onclick="yearShow(this)" id="yearMin" className>
                    <div className="boss">
                      <div>
                        <p style={{ color: '#8d94ad' }}>il,min</p>
                        <p id="minYearText" />
                      </div>
                      <label onclick className="arrow fa-solid fa-chevron-down" />
                    </div>
                    <ul className="iller">
                    </ul>
                  </div>
                  <div onclick="yearShow(this)" id="yearMax">
                    <div className="boss">
                      <div>
                        <p style={{ color: '#8d94ad' }}>maks</p>
                        <p id="maxYearText" />
                      </div>
                      <label onclick className="arrow fa-solid fa-chevron-down" />
                    </div>
                    <ul className="iller">
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="filterEnd">
              <div className="elanSayi">Bu gün: <span style={{ color: '#4c88f8' }}> 1646 yeni elan</span></div>
              <div className="elanBtn">
                <div onclick="allSifirla()" style={{ color: '#ca1016', cursor: 'pointer' }}>Sıfırla</div>
                <div style={{ color: '#ca1016', cursor: 'pointer' }}>Daha çox filter <label style={{ color: '#ca1016', cursor: 'pointer' }} onclick className="arrow fa-solid fa-chevron-down" /></div>
                <div onclick="FilterElan()" style={{ cursor: 'pointer' }} className="bttnn "> Elanları göstər</div>
              </div>
            </div>
          </div>
        </section>
        <section>
                <div style={{ minHeight: '500px', paddingTop: '50px' }} className="container">
                    <div id="products">
                      {
                        props.data.map(item=><Card item={item}/>)
                      }
                  
                    </div>

                </div>
            </section>
      </main>

    </>
  )
}

export default Main