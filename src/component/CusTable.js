import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const CusTable = (props) => {
    const [data, setData] = useState([]);
    const [updateTime, setUpdateTime] = useState('');
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch();
    }, []);
    function fetch() {
        setLoading(true);
        axios
            .get('https://3000.gov.tw/hpgapi-openmap/api/getPostData')
            .then((resp) => {
                setUpdateTime(resp.data[0].updateTime)
                setData(resp
                            .data
                            .filter((el) => {
                                return props.county.selected ? el.hsnCd === props.county.selected : el
                            })
                            .filter((el) => {
                                return props.township.selected ? el.townNm === props.township.selected : el
                            })
                            .slice(page, page+100));
                setLoading(false);
            })
    }
    useEffect(() => {
        fetch();
    }, [props.county.selected]);
    useEffect(() => {
        fetch();
    }, [props.township.selected]);
	const urlBase = 'https://www.google.com.tw/maps/place/'
    const listItem = data.map((el, index) => (
        <tr>
            <td>{ index + 1 }</td>
            <td>{ el.hsnNm }</td>
            <td>{ el.storeNm }</td>
            <td><a href={`${urlBase}${el.zipCd}${el.addr.replace(/\(.*\)/, '')}/@${el.latitude},${el.longitude}`} title="打開 google 地圖" target="_bland">{ el.addr }</a></td>
            <td>{ el.tel }</td>
            <td>{ el.busiTime.split('<br>').map((el) => <div>{el}</div>) }</td>
            <td>{ el.busiMemo.split('<br>').map((el) => <div>{el}</div>) }</td>
            <td>{ el.total }</td>
        </tr>
	))
    return(
        <Table striped bordered hover>
            <caption class="text-right">更新時間：{ updateTime }</caption>
            <thead>
                <th>#</th>
                <th>縣市名稱</th>
                <th>分局名稱</th>
                <th>地址</th>
                <th>電話</th>
                <th>營業時間</th>
                <th>營業備註</th>
                <th>存量</th>
            </thead>
            <tbody>
                { listItem }
            </tbody>
        </Table>
    )
}
export default CusTable;