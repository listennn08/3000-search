import React, { useState, useEffect } from 'react';
import $ from 'jquery';
import { FormControl, Row, Col } from 'react-bootstrap';

const TownshipSelect = (props) => {
    const [ options, setOptions ] = useState([]);
    useEffect(() => {
        getOptionsItem();
    }, [props.county.selected, props.county.selectedName]);
    const getOptionsItem = () => {
        if (props.county.selected) {
            $.get(`https://api.nlsc.gov.tw/other/ListTown1/${props.county.selected}`,
            (resp) => {
                if ($(resp).find('townItem').length > 0) {
                    const data = [...$(resp).find('townItem')]
                        .filter((el) => $(el).find('towncode01').html())
                        .map((el) => {
                            if ($(el).find('townname').html().indexOf('臺灣省') > -1) {
                                $(el).find('townname').html(
                                    $(el).find('townname').html().replace('臺灣省', '')
                                )
                            } else if ($(el).find('townname').html().indexOf('福建省') > -1) {
                                $(el).find('townname').html(
                                $(el).find('townname').html().replace('福建省', '')
                                )
                            }
                            return {
                                text: $(el).find('townname').html().replace(props.county.selectedName, ''),
                                val: $(el).find('townname').html().replace(props.county.selectedName, ''),
                            }
                        });
                    setOptions(data);
                }

            })
        }
    }
    const getTownship = (e) => {
        const township = {
            selected: e.target.value,
            selectedName: e.target.value,
        };
        props.callback({ township })
    }
    const optionsItem = options.map(el => <option value={ el.val }>{ el.text }</option>);
    
    return ( props.county.selected &&
        <Row className="justify-content-md-center">
            <Col md="5">
                <FormControl as="select" custom
                    onChange={ getTownship.bind(this) }
                    value={props.township.selected}>
                    <option value="" disabled>---請選擇鄉鎮市區---</option>
                    { optionsItem }
                </FormControl>
            </Col>
        </Row>

)
}

export default TownshipSelect;