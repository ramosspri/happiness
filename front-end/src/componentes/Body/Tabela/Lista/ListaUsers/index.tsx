import React from "react";
import { Button } from "../../Form/Button";
import { BlocoUserInfo , ButtonEditar , ButtonLixeira } from "./styles";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { themeLight } from "../../../../../styles/themeLight";

export const ListaContent = () => {
  return(
    <BlocoUserInfo>
      <p>1</p>
      <p>Priscila</p>
      <p>priscila@gmail.com</p>
      <ButtonEditar>
        <FaPencilAlt size={15} color={themeLight.colors.assets_green}/>
      </ButtonEditar>
      <ButtonLixeira>
        <FaTrashAlt size={15} color={themeLight.colors.assets_red}/>
      </ButtonLixeira>
    </BlocoUserInfo>
  )
}