import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function Dishwasher(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <ListGroup variant="flush">
                    <ListGroup.Item>Dishwasher</ListGroup.Item>
                    <ListGroup.Item>Laundry Occupied</ListGroup.Item>
                    <ListGroup.Item>Having Guests Over</ListGroup.Item>
                    <ListGroup.Item>Name of Guest:</ListGroup.Item>
                    <ListGroup.Item>Checked Mail</ListGroup.Item>
                    <ListGroup.Item>Fed The Dog</ListGroup.Item>
                    <ListGroup.Item>Walked The Dog</ListGroup.Item>
                    <ListGroup.Item>Trash Taken Out</ListGroup.Item>
                    <ListGroup.Item>Join in for Activities</ListGroup.Item>
                    <ListGroup.Item>Busy Working please be quiet</ListGroup.Item>
                    <ListGroup.Item>Can I borrow?</ListGroup.Item>
                    <ListGroup.Item>Out of town for dates: </ListGroup.Item>
                    <ListGroup.Item>Household Satisfaction</ListGroup.Item>
                    <ListGroup.Item>Swept floor</ListGroup.Item>
                    <ListGroup.Item>Mopped Floor</ListGroup.Item>
                    <ListGroup.Item>Cleaning person came</ListGroup.Item>
                    <ListGroup.Item>Running Errands/Time/Invite</ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    );
}

export default Dishwasher;