import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Pagination, Spinner } from 'react-bootstrap';

const CusTable = (props) => {
    const [data, setData] = useState([]);
    const [updateTime, setUpdateTime] = useState('');
    const [page, setPage] = useState(0);
    const [totalPage, setTotalPage] = useState(0);
    const [active, setActive] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch();
    }, []);

    function fetch() {
        setLoading(true);
        axios
            .get('https://3000.gov.tw/hpgapi-openmap/api/getPostData')
            .then((resp) => {
                const respData = resp.data
                    .filter((el) => {
                        return props.county.selected ? el.hsnCd === props.county.selected : el
                    })
                    .filter((el) => {
                        return props.township.selected ? el.townNm === props.township.selected : el
                    });
                setUpdateTime(respData[0].updateTime)
                setData(respData);
                setTotalPage(respData.length / 50);
                setLoading(false);
                setActive(0);
            });
    }
    useEffect(() => {
        fetch();
    }, [props.county.selected]);
    useEffect(() => {
        fetch();
    }, [props.township.selected]);
    const urlBase = 'https://www.google.com.tw/maps/place/'
    let listItem = data.slice(page*50, (page+1)*50).map((el, index) => (
        <tr key={ index }>
            <td>{ index + 1 }</td>
            <td>{ el.hsnNm }</td>
            <td>{ el.storeNm }</td>
            <td><a href={`${urlBase}${el.zipCd}${el.addr.replace(/\(.*\)/, '')}/@${el.latitude},${el.longitude}`} title="打開 google 地圖" target="_bland">{ el.addr }</a></td>
            <td>{ el.tel }</td>
            <td>{ el.busiTime.split('<br>').map((el, index) => <div key={`busiT${index}`}>{el}</div>) }</td>
            <td>{ el.busiMemo.split('<br>').map((el, index) => <div key={`busiM${index}`}>{el}</div>) }</td>
            <td>{ el.total }</td>
        </tr>
    ));

    const changePage = (i) => {
        if (i >= 0 && i <= totalPage) {
            setPage(i);
            setActive(i);
        }
    }

    let items = [];
    for (let number = 1; number < totalPage; number++) {
        if (active < 3) {
            if (number < active +4 || number > totalPage - 3) {
                items.push(
                    <Pagination.Item key={ number } active={ number === active } onClick={ () => changePage(number) }>
                        {number+1}
                    </Pagination.Item>,
                );
            } else if (number === active+5) {
                items.push(<Pagination.Ellipsis key="ellipsis-1" />)
            }
        } else {
            if (number < 2 || number > active - 2 && number < active + 2 || number > totalPage - 2) {
                items.push(
                    <Pagination.Item key={ number } active={ number === active } onClick={ () => changePage(number) }>
                        {number+1}
                    </Pagination.Item>,
                );
            } else if (number === active - 2 ) {
                items.push(<Pagination.Ellipsis key="ellipsis-1" />)
            } else if (number === active + 2) {
                items.push(<Pagination.Ellipsis key="ellipsis-2" />)
            } 
        }

    }

    const paginationBasic = (
        <div className="d-flex justify-content-center">
            <Pagination>
                <Pagination.First onClick={ () => changePage(1) }></Pagination.First>
                <Pagination.Prev onClick={ () => changePage(page-1) } />
                <Pagination.Item key="0" active={ active === 0} onClick={ () => changePage(0) }>1</Pagination.Item>
                { items }
                <Pagination.Next onClick={ () => changePage(page+1) } />
                <Pagination.Last onClick={ () => changePage(totalPage) }></Pagination.Last>
            </Pagination>
        </div>
    );
    return(
        <div className="overflow-hidden">
            <Table striped bordered hover className="w-100">
                <caption className="text-right">更新時間：{ updateTime }</caption>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>縣市名稱</th>
                        <th>分局名稱</th>
                        <th>地址</th>
                        <th>電話</th>
                        <th>營業時間</th>
                        <th>營業備註</th>
                        <th>存量</th>
                    </tr>
                </thead>
                <tbody>
                    { listItem }
                </tbody>
            </Table>
            { paginationBasic }
            <Spinner animation="border" role="status" className={'position-absolute absolute-bottom ' + (loading ? 'visible' : 'invisible')}>
                <span className="sr-only">Loading...</span>
            </Spinner>
        </div>
    )
}
export default CusTable;