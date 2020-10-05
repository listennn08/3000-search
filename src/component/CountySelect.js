import React from 'react';
import { FormControl, Row, Col } from 'react-bootstrap';

const CountySelect = (props) => {
  const optionsItem = props.options.map((el, index) => <option value={ el.val } key={ index }>{ el.text }</option>);
  const getCounty = (e) => {
    const name = props.options.filter((el) => el.val === e.target.value)[0].text;
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
    <Row className='justify-content-md-center mt-2 mb-2'>
      <Col md='5'>
        <FormControl as='select' custom
            onChange={ getCounty.bind(this) }
            value={ props.county.selected }
        >
          <option value='' disabled>---請選擇縣市---</option>
          { optionsItem }
        </FormControl>
      </Col>
    </Row>
  );
};

export default CountySelect;
