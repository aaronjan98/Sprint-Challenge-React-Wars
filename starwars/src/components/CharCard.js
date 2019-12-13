import React from "react";
import { Card, CardHeader, CardBody,
    CardTitle, CardText } from 'reactstrap';

const CharCard = props => {
    console.log(props.button);
    return (
        <div>
            <Card>
                <CardHeader tag="h3">{props.button.name}</CardHeader>
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