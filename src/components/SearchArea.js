import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import './SearchArea.scss';

const SearchArea = (props) => {
  const [county, ] = useState([
    { text: '臺北市', val: 'A' },
    { text: '臺中市', val: 'B' },
    { text: '基隆市', val: 'C' },
    { text: '臺南市', val: 'D' },
    { text: '高雄市', val: 'E' },
    { text: '新北市', val: 'F' },
    { text: '宜蘭縣', val: 'G' },
    { text: '桃園市', val: 'H' },
    { text: '新竹市', val: 'O' },
    { text: '新竹縣', val: 'J' },
    { text: '苗栗縣', val: 'K' },
    { text: '南投縣', val: 'M' },
    { text: '彰化縣', val: 'N' },
    { text: '雲林縣', val: 'P' },
    { text: '嘉義市', val: 'I' },
    { text: '嘉義縣', val: 'Q' },
    { text: '屏東縣', val: 'T' },
    { text: '花蓮縣', val: 'U' },
    { text: '臺東縣', val: 'V' },
    { text: '澎湖縣', val: 'X' },
    { text: '金門縣', val: 'W' },
    { text: '連江縣', val: 'Z' },
  ]);
  const [township, setTownship] = useState([])
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedTownship, setSelectedTownship] = useState('');
  // const [listItems, setListItems] = useState([]);
  const [listItemsDisplay, setListItemsDisplay] = useState([]);
  const [searchKeywords, setSearchKeywords] = useState('');
  const [show, setShow] = useState(true);
  
  const getTownship = (countyID, countyName) => {
    $.get(`https://api.nlsc.gov.tw/other/ListTown1/${countyID}`, (resp) => {
      if ($(resp).find('townItem').length > 0) {
        const data = [...$(resp).find('townItem')]
          .filter((el) => $(el).find('towncode01').html())
          .map((el) => {
            $(el).find('townname').html().replace(new RegExp(`(臺灣省|福建省)(${countyName})`), '')
            return {
              text: $(el).find('townname').html(),
              val: $(el).find('townname').html(),
            }
          });
        setTownship(data);
      }
    })
  };
  
  const selectCounty = (e) => {
    const countyName = county[county.findIndex((el) => el.val === e.target.value)].text;
    setSelectedCounty(e.target.value);
    getTownship(e.target.value, countyName);

    /* Will clear selectedTownship when change selectedCounty */
    setSelectedTownship('');
  };
  
  const selectTownship = (e) => setSelectedTownship(e.target.value);
  
  const passData = (data) => {
    props.setPosition([data.latitude, data.longitude]);
    setShow(false);
    props.setShow(false);
  };
  
  const search = (e) => setSearchKeywords(e.target.value);

  const toggleShow = () => {
    setShow(!show);
    props.setShow(!props.show);
  }
  const color = (admissible, remaining) => {
    if (admissible.includes('本日未營業')) return 'red';
    admissible = admissible.replace(/本日可受理量：(\w+)/, '$1');
    const percent = (remaining/admissible) * 100;
    switch (true) {
      case percent > 80:
        return 'green';
      case percent > 50:
        return 'yellow';
      case percent > 0:
        return 'orange';
      default:
        return 'red';
    }
  }

  useEffect(() => {
    setListItemsDisplay(props.listItems);
  }, [props.listItems]);
  
  useEffect(() => {
    let listData;
    const includeKeywords = (source, searchItem = 'storeNm') => {
      return source.length > 0
        ? searchKeywords ? source.filter((el) => el[searchItem].includes(searchKeywords)) : source
        : source;
    }
    if (selectedCounty && selectedCounty !== '') {
      if (selectedTownship  && selectedTownship !== '') {
          listData = props.listItems.filter((el) => el.hsnCd === selectedCounty
              && el.townNm === selectedTownship);
      } else {
        listData = props.listItems.filter((el) => el.hsnCd === selectedCounty);
      }
    } else {
      listData = props.listItems;
    }
    setListItemsDisplay(includeKeywords(listData));
  }, [selectedCounty, selectedTownship, searchKeywords, props.listItems]);
  
  
  return (
    <>
      <button className={`searchBtn ${show ? 'show' : ''}`} onClick={ () => toggleShow() }><span role="img" aria-label="string">🔍</span></button>
      <section className={`sidebar ${show ? '' : 'hide'}`}>
        <div className="sidebar__container">
          <div className="select__container">
            <select className="select__item" value={ selectedCounty } onChange={ (e) => selectCounty(e) }>
              <option value=''>請選擇縣市</option>
              { county.map((el) => <option value={ el.val } key={ el.val }>{ el.text }</option>) }
            </select>
            <select className="select__item" value={ selectedTownship } onChange={ (e) => selectTownship(e) }>
              <option value=''>請選擇鄉鎮市區</option>
              { township.map((el) => <option value={ el.val } key={ el.val }>{ el.text }</option>) }
            </select>
            <input className="select__item" onKeyUp={search} placeholder="請輸入欲搜尋郵局名稱" />
          </div>
          <ul className="list">{
            listItemsDisplay.map((el) => (
              <li className="list__card" key={ el.storeNm }>
                <div className="list__card__body">
                  { el.hsnNm }<br />
                  <h1 className="list__card__body__title">{ el.storeNm }</h1>
                  { el.addr }<br />
                  { el.busiMemo.replace(/.*(?:<br>|^)+\*(.*)<br>/, '$1') }<br />
                  剩餘數量：<span className={color(el.busiMemo.replace(/.*(?:<br>|^)+\*(.*)<br>/, '$1'), el.total)}>{ el.total }</span><br />
                  </div>
                <button onClick={ () => passData(el) }>
                  前往 {String.fromCharCode(0x00BB)}
                  <span className="addr"> { el.storeNm } </span>
                </button>
              </li>
            ))
          }
          </ul>
        </div>
      </section>
    </>
  )
}

export default SearchArea;