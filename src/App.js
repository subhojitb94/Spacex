import React from 'react';
import './App.css';
import { Row } from 'react-bootstrap';
import Filters from './Filter';
import Launches from './Launches';


class Spacex extends React.Component {
  constructor(props){
    super(props);
    this.state={
      launchesList:[],
      launchFilter:null,
      landFilter:null,
      launchYearFilter:null
    }
  }

  componentDidMount(){
    fetch("https://api.spacexdata.com/v3/launches?limit=100")
    .then((res) => {
      if(res){
      res.json().then((res)=>{
        let data = res.splice(0,8)
        this.setState({launchesList:data})
      })
      }
    })
  }

  handleLaunchFilter(value){
    if(value == this.state.launchFilter){
      this.setState({launchFilter:null})
    }else{
      this.setState({launchFilter:value});
    }
    setTimeout(()=>{
      this.filterData();
    },100)
  }

  handleLandFilter(value){
    if(value == this.state.landFilter){
      this.setState({landFilter:null});
    }else{
      this.setState({landFilter:value});
    }
    
    setTimeout(()=>{
      this.filterData();
    },100)
  }

  handleLaunchYearFilter(value){
    if(value == this.state.launchYearFilter){
      this.setState({launchYearFilter:null}); 
    }else{
      this.setState({launchYearFilter:value});
    }
    setTimeout(()=>{
      this.filterData();
    },100)
  }

  filterData(){
    let apiLink = `https://api.spacexdata.com/v3/launches?limit=100`;
    if(this.state.launchFilter){
      apiLink = apiLink + `&launch_success=${this.state.launchFilter}`
    }

    if(this.state.landFilter) {
      apiLink = apiLink + `&land_success=${this.state.landFilter}`
    }

    if(this.state.launchYearFilter) {
      apiLink = apiLink + `&launch_year=${this.state.launchYearFilter}`
    }
    fetch(apiLink)
    .then((res) => {
      if(res){
      res.json().then((res)=>{
        let data = res.splice(0,8)
        this.setState({launchesList:data})
      })
      }
    })
  }
  
  render(){
    let {launchesList} = this.state
    return (
      <div className="main-container">
        <div className="title">
          <h2 style={{fontWeight:'bold'}}>SpaceX Launch Programs</h2>
        </div>
        <Row className="content-container">
          <Filters onLandFilterSelect={this.handleLandFilter.bind(this)} onLaunchFilterSelect={this.handleLaunchFilter.bind(this)} onLaunchYearSelect={this.handleLaunchYearFilter.bind(this)}/>
          <Launches data={launchesList} launchValue={this.state.launchFilter} landValue={this.state.landFilter} launchYearValue={this.state.launchYearFilter}/>
        </Row>
        <div style={{textAlign:'center'}}>
            <label>Developed By :&nbsp;Subhojit Bhattacharjee</label>
        </div>
      </div>
    );
  }
}

export default Spacex;
