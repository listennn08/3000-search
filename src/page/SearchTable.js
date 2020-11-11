import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import CountySelect from  '../components/CountySelect';
import TownshipSelect from '../components/TownshipSelect';
import CusTable from '../components/CusTable';

const SearchTable = () => {
  const cnOptions = [
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
  ];
  const [county, setCounty] = useState({
    selected: '',
    selectedName: '',
  })
  const [township, setTownship] = useState({
    selected: '',
    selectedName: '',
  })

return (
  <>
    <Container>
      <CountySelect
        options={ cnOptions }
        county={ county }
        setCounty={ setCounty }
        setTownship= { setTownship }
      />
      <TownshipSelect
        county={ county }
        township={ township }
        setTownship={ setTownship }
      />
      <CusTable 
        county={ county } 
        township={ township }
      />
    </Container>
  </>
  );
}

export default SearchTable;