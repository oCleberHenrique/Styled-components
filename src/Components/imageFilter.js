import React from "react"
import styled from "styled-components"
import alimentacao from "../../src/assets/images/alimentacao.svg"
import outros from "../../src/assets/images/outros.svg"
import saude from "../../src/assets/images/saude.svg"
import transporte from "../../src/assets/images/transporte.svg"
import utilidades from "../../src/assets/images/utilidades.svg"
import {IconeTema } from "../Components/Ui"


export default (type) => {
    const Images = {
        Restaurante: <IconeTema src="{alimentacao}" alt="Restaurante"/>,
        Utilidades: <IconeTema src="{utilidades}" alt="utilidades"/>,
        Saude: <IconeTema src="{saude}" alt="Saude"/>,
        Transporte: <IconeTema src="{transporte}" alt="Transporte"/>,
        Default: <IconeTema src="{outros}" alt="Outros"/>,
    };
    return Images[type] || Images.Default;
}