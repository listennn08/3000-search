import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CountySelect from  './component/CountySelect';
import TownshipSelect from './component/TownshipSelect';
import CusTable from './component/CusTable';

class App extends Component {
    constructor() {
		super();
		this.state = {
			cnOptions: [
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
			],
			county: {
				selected: "",
				selectedName: "",
			},
			township: {
				selected: "",
				selectedName: "",
			},
		};
    }
    callback = (val)  => {
		this.setState(val);
	}
    render() {
        return (
            <div className="App">
                <Container>
                    {/* <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    </header> */}
                    <CountySelect
                        options={ this.state.cnOptions }
                        county={ this.state.county }
                        callback={ this.callback }
                    />
                    <TownshipSelect
                        county={ this.state.county }
                        township={ this.state.township }
                        callback={ this.callback }
                    />
                    <CusTable 
                        county={ this.state.county } 
                        township={ this.state.township }
                    />
                </Container>
            </div>
        );
    }
}

export default App;