import React from 'react';
import './App.css';
import { Row,Col } from 'react-bootstrap';

class Filters extends React.Component {
    constructor(props){
        super(props);
        this.state={
            years:[2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],
            selectedYear:null,
            selctedLaunchSuccessValue:null,
            selectedLandSuccessValue:null
        }
    }

    handleYearSelect(year){
        this.props.onLaunchYearSelect(year);
        if(this.state.selectedYear == year){
            this.setState({selectedYear:null});
        }else{
            this.setState({selectedYear:year});
        }
    }

    handleLaunchSuccess(value){
        this.props.onLaunchFilterSelect(value);
        if(this.state.selctedLaunchSuccessValue == value){
            this.setState({selctedLaunchSuccessValue:null});
        }else{
            this.setState({selctedLaunchSuccessValue:value});
        }
    }

    handleLandSuccess(value){
        this.props.onLandFilterSelect(value);
        if(this.state.selectedLandSuccessValue == value){
            this.setState({selectedLandSuccessValue:null});
        }else{
            this.setState({selectedLandSuccessValue:value});
        }
    }

    render(){
        let {years,selectedYear,selctedLaunchSuccessValue,selectedLandSuccessValue} = this.state;
        return (
            <Col md={2} sm={4} xs={12} className="filter-container">
                <h5>Filters</h5>
                <div className="launch-filter-sec">
                    <h6 className="launch-filter-title">Launch Year</h6>
                    <Row style={{ textAlign: 'center' }}>
                        {years.map((year, index) => (
                            <Col md={6} key={index} style={{ paddingTop: 12 }}>
                                <div className="tags" style={selectedYear == year ? { backgroundColor:'#045c43'} : {}}>
                                    <label style={{ marginBottom: 0,cursor:'pointer' }} onClick={()=>this.handleYearSelect(year)}>{year}</label>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div className="successful-launch-filter-sec">
                    <h6 className="launch-filter-title">Successful Launch</h6>
                    <Row style={{ textAlign: 'center' }}>
                        <Col md={6} style={{ paddingTop: 12 }}>
                            <div className="tags" style={selctedLaunchSuccessValue == true?{ backgroundColor:'#045c43' }:{}}>
                                <label style={{marginBottom: 0,cursor:'pointer'}} onClick={()=>this.handleLaunchSuccess(true)}>True</label>
                            </div>
                        </Col>
                        <Col md={6} style={{ paddingTop: 12 }}>
                            <div className="tags" style={selctedLaunchSuccessValue == false?{ backgroundColor:'#045c43' }:{}}>
                                <label style={{marginBottom: 0,cursor:'pointer'}} onClick={()=>this.handleLaunchSuccess(false)}>False</label>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="successful-launch-filter-sec">
                    <h6 className="launch-filter-title">Successful Landing</h6>
                    <Row style={{ textAlign: 'center' }}>
                        <Col md={6} style={{ paddingTop: 12 }}>
                            <div className="tags" style={selectedLandSuccessValue == true?{ backgroundColor:'#045c43' }:{}}>
                                <label style={{marginBottom: 0,cursor:'pointer'}} onClick={()=>this.handleLandSuccess(true)}>True</label>
                            </div>
                        </Col>
                        <Col md={6} style={{ paddingTop: 12 }}>
                            <div className="tags" style={selectedLandSuccessValue == false?{ backgroundColor:'#045c43' }:{}}>
                                <label style={{marginBottom: 0,cursor:'pointer'}} onClick={()=>this.handleLandSuccess(false)}>False</label>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
        )
    }
}

export default Filters;