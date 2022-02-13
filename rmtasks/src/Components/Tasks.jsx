import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ToggleSwitch from "./ToggleSwitch";


function Tasks(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                <React.Fragment>
                    <ToggleSwitch label="Dishwasher Dirty" />
                </React.Fragment>
                    </ListGroup.Item>
                    <ListGroup.Item>

                    <React.Fragment>
                    <ToggleSwitch label="Laundry Occupied" />
                </React.Fragment>  
                    </ListGroup.Item>
                    <ListGroup.Item>

                    <React.Fragment>
                    <ToggleSwitch label="Having Guests Over" />
                </React.Fragment>

                    </ListGroup.Item>
                    <ListGroup.Item>Name of Guest:</ListGroup.Item>

                    <ListGroup.Item>
                    <React.Fragment>
                    <ToggleSwitch label="Checked Mail" />
                </React.Fragment>    

                    </ListGroup.Item>
                    <ListGroup.Item>

                    <React.Fragment>
                    <ToggleSwitch label="Fed The Dog" />
                </React.Fragment>
                    
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <ToggleSwitch label="Walked the dog" />
                    </ListGroup.Item>

                    <ListGroup.Item>
                    <ToggleSwitch label="Taken out the trash" />
                    </ListGroup.Item>

                    <ListGroup.Item>
                    <ToggleSwitch label="Open for Activities" />
                    </ListGroup.Item>

                    <ListGroup.Item>
                    <ToggleSwitch label="Busy Working, Quiet please!" />
                    </ListGroup.Item>

                    <ListGroup.Item><ToggleSwitch label="Out of Town" />
                     </ListGroup.Item>

                    <ListGroup.Item><ToggleSwitch label="Swept Floor" />
                    </ListGroup.Item>

                    <ListGroup.Item> <ToggleSwitch label="Mopped Floor"/></ListGroup.Item>

                    <ListGroup.Item> <ToggleSwitch label="Cleaner came" /></ListGroup.Item>
                    
                    <ListGroup.Item> <ToggleSwitch label="Running Errands Today" /></ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default Tasks;