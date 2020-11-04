import React from 'react';
import './App.css';
import { Row,Col,Card } from 'react-bootstrap';

function Launches(props) {
    let { data } = props;
    console.log('Data-->', data)
    return (
        <Col md={10} sm={8} xs={12}>
            <Row>
                {data.length > 0 && data.map((data, index) => (
                    <Col md={3} key={index} style={{ marginBottom: 20 }}>
                        <Card style={{ width: '18rem', borderRadius: 10, padding: 15 }}>
                            <Card.Img style={{ backgroundColor: 'silver' }} variant="top" src={data.links.mission_patch_small} />
                            <Card.Body>
                                <Card.Title style={{ color: 'darkslateblue', fontWeight: 900 }}>{data.mission_name}</Card.Title>
                                <Card.Text>
                                    <label className="desc-titles">Mission Ids.</label>
                                    <ul>
                                        {data.mission_id.length > 0 ? data.mission_id.map((id, index) => (
                                            <li key={index}>{id}</li>
                                        )) : <li key={index}>{'Not present'}</li>}
                                    </ul>
                                    <label className="desc-titles">Launch Year:&nbsp;{data.launch_year}</label>
                                    <label className="desc-titles">Successful Launch:&nbsp;{data.launch_success}</label>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Col>
    )
}

export default Launches;