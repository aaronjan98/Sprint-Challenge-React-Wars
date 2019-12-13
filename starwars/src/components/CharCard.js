import React from 'react';
import { Card, CardTitle, CardBody, CardText } from 'reactstrap';
import { CardHeaderDiv } from './Styles';


const CharCard = props => {
    console.log(props.button);
    return (
        <div>
            <Card>
                <CardHeaderDiv tag="h3">{props.button.name}</CardHeaderDiv>
                <CardBody>
                    <CardTitle>Birth Year: {props.button.birth_year}</CardTitle>
                    <CardText>Gender: {props.button.gender}</CardText>
                    <CardText>Height: {props.button.height}</CardText>
                    <CardText>Mass: {props.button.mass}</CardText>
                    <CardText>Hair Color: {props.button.hair_color}</CardText>
                    <CardText>Skin Color: {props.button.skin_color}</CardText>
                    <CardText>Eye Color: {props.button.eye_color}</CardText>
                </CardBody>
            </Card>
        </div>
    );
}

export default CharCard;