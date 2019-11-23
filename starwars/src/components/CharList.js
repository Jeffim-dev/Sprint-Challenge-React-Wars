import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharCard from './CharCard';
import { Container, Row } from 'reactstrap';


const CharList = () => {
    const [state, setState] = useState([]);
   
    useEffect(() => {
        axios
            .get('https://swapi.co/api/people')
            .then(response => {
                console.log(response.data);
                setState(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <Container>
            <Row>
                {/* {state.map((char, index) => {
                    return (
                        <CharCard
                            key={index}
                            name={char.name}
                            height={char.height}
                            mass={char.mass}
                            hair_color={char.hair_color}
                            skin_color={char.skin_color}
                        />
                    );
                })} */}
                 {state.map((char, index) => {
                    return (
                        <CharCard
                            key={index}
                            props={char}
                        />
                    );
                })}
            </Row>
        </Container>
    );
}

export default CharList;