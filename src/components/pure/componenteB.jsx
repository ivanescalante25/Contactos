import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';
import ComponenteAContacto from '../container/componenteA';



const ComponenteB = () => {

   const defaultContacto = new Contacto('Iván', 'Escalante', 'iaem@gmail.com', true)
    return (
        <div>
            <h1>Informacion de un contacto</h1>
            <ComponenteAContacto contacto={defaultContacto}></ComponenteAContacto>
            
        </div>
    );
};


ComponenteB.propTypes = {

};


export default ComponenteB;
