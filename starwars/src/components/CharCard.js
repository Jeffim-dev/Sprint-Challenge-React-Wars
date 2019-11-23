import React from 'react';
import {
    Card,
    CardText,
    CardBody,
    CardTitle,
    CardImg,
    Col
} from "reactstrap";
import styled from "styled-components";

const Title = styled(CardTitle)`
    font-size: 25px;    
`;

const Text = styled(CardText)`
font-size: 18px;    
`;

const CharCard = props => {
    return (
        <Col xs="6" lg="4" >
            <Card className="Card-border">
                <Title>Name: {props.name}</Title>
                <CardBody className="Card-body">    
                    <Text>Mass: {props.mass}</Text>
                    <Text>Hair Color: {props.hair_color}</Text>
                    <Text>SKin Color: {props.skin_color}</Text>
                </CardBody>
            </Card>
        </Col>
    );
};

export default CharCard;