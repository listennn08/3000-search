import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination, Spinner, Card, Row, Col, Button } from 'react-bootstrap';
import { getColor } from '../utils';
import './CusTable.scss';

const CusTable = (props) => {
  const [data, setData] = useState([]);
  const [updateTime, setUpdateTime] = useState('');
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [active, setActive] = useState(0);
  const [loading, setLoading] = useState(true);
  const perPage = 48;

  useEffect(() => {
    const fetch = () => {
      setLoading(true);
      axios
        .get('https://3000.gov.tw/hpgapi-openmap/api/getPostData')
        .then((resp) => {
          const respData = resp.data
            .filter((el) => props.county.selected 
              ? el.hsnCd === props.county.selected 
              : el
            )
            .filter((el) => props.township.selected 
              ? el.townNm === props.township.selected 
              : el
            );
          const d = [];
          let n = 0;
          const p = Math.floor(respData.length / perPage);
          for (n; n < p; n++) {
            d.push(respData.slice(n * perPage, (n + 1) * perPage));
          }
          if (respData.length % perPage) {
            d.push(respData.slice(n * perPage, respData.length))
          }
          setUpdateTime(respData[0].updateTime)
          setData(d);
          setTotalPage(p);
          setLoading(false);
          setActive(0);
        });
    }
    fetch();
  }, [props.county.selected, props.township.selected]);
  const urlBase = 'https://www.google.com.tw/maps/place/';
  let listItem;
  if (data.length) {
    listItem = data[page].map((el, index) => (
      // <tr key={ index }>
      //   <td className="desktop">{ index + 1 }</td>
      //   <td className="desktop">{ el.hsnNm }</td>
      //   <td>{ el.storeNm }</td>
      //   <td><a href={`${urlBase}${el.zipCd}${el.addr.replace(/\(.*\)/, '')}/@${el.latitude},${el.longitude}`} title='打開 google 地圖' target='_bland'>{ el.addr }</a></td>
      //   <td className="desktop">{ el.tel }</td>
      //   <td>{ el.busiTime.split('<br>').map((el, index) => <div key={`busiT${index}`}>{el}</div>) }</td>
      //   <td>{ el.busiMemo.split('<br>').map((el, index) => <div key={`busiM${index}`}>{el}</div>) }</td>
      //   <td>{ el.total }</td>
      // </tr>
      <Col lg="3" className="mb-2" key={Math.random().toString(36).substring(2, 9)}>
        <Card style={{'background': getColor(el.busiMemo, el.total)}}>
          <Card.Body>
            <Card.Title>{el.storeNm}</Card.Title>
            <Card.Text>
              聯絡電話：{el.tel}<br />
              <span dangerouslySetInnerHTML={{__html: el.busiTime}} />
              <span dangerouslySetInnerHTML={{__html: el.busiMemo}} />
              存量：{el.total}
            </Card.Text>
            <Button
              onClick={() => { window.open(`${urlBase}${el.zipCd}${el.addr.replace(/\(.*\)/, '')}/@${el.latitude},${el.longitude}`, '_blank').focus() }}
              title='打開 google 地圖'
              variant="dark"
            >
              {el.addr}
            </Button>
          </Card.Body>
        </Card>
      </Col>
    ));
  }
  const changePage = (i) => {
    if (i > -1 && i <= totalPage) {
      setPage(i);
      setActive(i);
    }
  }

  let items = [];
  for (let number = 0; number < totalPage; number++) {
    const pageNumber = number + 1
    if (active < 3) {
      if (pageNumber < active + 4 || pageNumber > totalPage - 4) {
        items.push(
          <Pagination.Item
            key={ pageNumber }
            active={ pageNumber === active }
            onClick={ () => changePage(pageNumber) }
          >
            { pageNumber + 1 }
          </Pagination.Item>,
        );
      } else if (pageNumber === active + 5) {
        items.push(<Pagination.Ellipsis key='ellipsis-1' />)
      }
    } else {
      if (
        (pageNumber < 2 || pageNumber > active - 2) 
          && (pageNumber < active + 2 || pageNumber > totalPage - 2)
      ) {
        items.push(
          <Pagination.Item
            key={ pageNumber }
            active={ pageNumber === active }
            onClick={ () => changePage(pageNumber) }
          >
            { pageNumber + 1 }
          </Pagination.Item>,
        );
      } else if (pageNumber === active - 2 ) {
        items.push(<Pagination.Ellipsis key='ellipsis-1' />)
      } else if (pageNumber === active + 2) {
        items.push(<Pagination.Ellipsis key='ellipsis-2' />)
      }
    }
  }

  const paginationBasic = (
      <div className='d-flex justify-content-center'>
        <Pagination>
          <Pagination.First onClick={() => changePage(1)} disabled={active === 0}></Pagination.First>
          <Pagination.Prev onClick={() => changePage(page - 1)} disabled={active === 0}/>
          <Pagination.Item key="0" active={ active === 0 } onClick={() => changePage(0)}>1</Pagination.Item>
          { items }
          <Pagination.Next onClick={() => changePage(page + 1)} disabled={active === totalPage}/>
          <Pagination.Last onClick={() => changePage(totalPage)} disabled={active === totalPage}></Pagination.Last>
        </Pagination>
      </div>
  );
  return (
    <div className='overflow-hidden py-2'>
      {loading
        ? <div
            className={'vh-100 d-flex align-items-center justify-content-center'}
          >
            <Spinner
              animation='border'
              role='status'
            >
              <span className='sr-only'>Loading...</span>
            </Spinner>
          </div>
        :
          <>      
            <Row className="justify-content-end mb-1"><Col className="text-right">{updateTime}</Col></Row>
            {/* <Table striped bordered hover className='w-100'>
              <caption className='text-right'>更新時間：{ updateTime }</caption>
              <thead>
                <tr>
                  <th className="desktop">#</th>
                  <th className="desktop">縣市名稱</th>
                  <th>分局名稱</th>
                  <th>地址</th>
                  <th className="desktop">電話</th>
                  <th>營業時間</th>
                  <th>營業備註</th>
                  <th>存量</th>
                </tr>
              </thead>
              <tbody> */}
              <Row>
                {listItem}
              </Row>
              {/* </tbody>
            </Table> */}
            { paginationBasic }

          </>
      }
    </div>
  );
};

export default CusTable;
