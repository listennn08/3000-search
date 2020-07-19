import React from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';

const CountySelect = (props) => {
    const optionsItem = props.options.map((el) => <option value={ el.val }>{ el.text }</option>);
    const getCounty = (e) => {
        const name = props.options.filter((el) => {
                if (el.val === e.target.value) {
                    return el.text;
                }
            })[0].text;
        const county = {
            selected: e.target.value,
            selectedName: name
        };
        props.callback({ county });
        props.callback({
            township: {
                selected: '',
                selectedName: '',
            }
        })
    }
    return (
            <Row className="justify-content-md-center">
                <Col md="5">
                    <FormControl as="select" custom
                        class="offset-md-5 form-control col-md-3 mb-2 mt-2"
                        onChange={ getCounty.bind(this) }
                        value={ props.county.selected }
                    >
                    <option value="" disabled>---請選擇縣市---</option>
                    { optionsItem }
                    </FormControl>
                </Col>
            </Row>
    );
}

export default CountySelect;