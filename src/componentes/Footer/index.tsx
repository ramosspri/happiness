import React from 'react';
import { ContainerFooter, DivIcon, DivTextIcon, SeparateContainers } from './styles';
import { FaRegCopyright, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <ContainerFooter>
      <SeparateContainers>
      <DivTextIcon>
        <DivIcon>
          <FaRegCopyright />
        </DivIcon>
        <p>Alguns direitos reservados</p>
      </DivTextIcon>
      </SeparateContainers>

      <SeparateContainers>
        <DivTextIcon>
        <p style={{fontWeight:'bold'}}>Desenvolvido por: </p>
        </DivTextIcon>
        <DivTextIcon>
          <DivIcon>
            <a href="https://github.com/CarlosERM" style={{color:'#6B62CE'}}><FaGithub/></a>
          </DivIcon>
          <p>Carlos Eduardo</p>
        </DivTextIcon>

        <DivTextIcon>
          <DivIcon>
          <a href="https://github.com/GustavoSpm" style={{color:'#6B62CE'}}><FaGithub/></a>
          </DivIcon>
          <p>Gustavo Spindola</p>
        </DivTextIcon>

        <DivTextIcon>
          <DivIcon>
          <a href="https://github.com/ramosspri" style={{color:'#6B62CE'}}><FaGithub/></a>
          </DivIcon>
          <p>Priscila Ramos</p>
        </DivTextIcon>
      </SeparateContainers>
    </ContainerFooter>
  );
};

export default Footer;
