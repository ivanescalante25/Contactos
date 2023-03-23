import React from 'react';
import PropTypes from 'prop-types';
import { Contacto } from '../../models/contacto.class';

const ComponenteAContacto = ({ contacto }) => {
    return (
        <div>
            <h2>
                Nombre: { contacto.nombre }
            </h2>
            <h3>
                Apellido: { contacto.apellido }
            </h3>
            <h4>
                Email: { contacto.email }
            </h4>
            <h5>
                 { contacto.conectado ? 'Contacto en línea':' Contacto no disponible'}
            </h5>
        </div>
    );
};


ComponenteAContacto.propTypes = {
    contacto: PropTypes.instanceOf(Contacto)

};


export default ComponenteAContacto;
