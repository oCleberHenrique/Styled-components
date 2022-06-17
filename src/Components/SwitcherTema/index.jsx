import React from "react";
import styled from "styled-components";
import themeOn from "../../assets/images/themeOn.svg";
import themeOff from "../../assets/images/themeOff.svg";
import { Icone } from "../Ui";


const claro = <Icone src="{themeOn}" alt="Tema Claro"/>;

const escuro = <Icone src="{themeOff}" alt="Tema Escuro"/>;

export default ({tema}) => (tema ? escuro : claro);