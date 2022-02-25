import React from 'react';
import { useCreateContext } from '../../../../context/UsersContext';
import { Button } from './Button';
import { ContainerForm, InputStyled, BlocoInput, SelectStyled } from './styles';

const Form = () => {
  const { input, setInput } = useCreateContext();
  console.log(input);
  return (
    <ContainerForm>
      <BlocoInput>
        <label htmlFor="id">ID</label>
        <InputStyled type="text" name="id" />
      </BlocoInput>

      <BlocoInput>
        <label htmlFor="nome">Nome</label>
        <InputStyled type="text" name="nome" />
      </BlocoInput>

      <BlocoInput>
        <label htmlFor="email">E-mail</label>
        <InputStyled type="text" name="email" />
      </BlocoInput>

      <BlocoInput>
        <label htmlFor="telefone">Telefone</label>
        <InputStyled type="text" name="telefone" />
      </BlocoInput>
      <div>
        <label htmlFor="linguagens">Linguagens 1</label>
        <SelectStyled name="linguagens">
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="typescript">Typescript</option>
          <option value="javascript">Javascript</option>
        </SelectStyled>
      </div>
      <div>
        <label htmlFor="linguagens">Linguagens 2</label>
        <SelectStyled name="linguagens">
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="typescript">Typescript</option>
          <option value="javascript">Javascript</option>
        </SelectStyled>
      </div>
      <div>
        <label htmlFor="frameworks">Frameworks 1</label>
        <SelectStyled name="frameworks">
          <option value="django">Django</option>
          <option value="springboot">Spring Boot</option>
          <option value="react">React</option>
          <option value="bootstrap">Bootstrap</option>
        </SelectStyled>
      </div>
      <div>
        <label htmlFor="frameworks">Frameworks 2</label>
        <SelectStyled name="frameworks">
          <option value="django">Django</option>
          <option value="springboot">Spring Boot</option>
          <option value="react">React</option>
          <option value="bootstrap">Bootstrap</option>
        </SelectStyled>
      </div>
      <Button />
    </ContainerForm>
  );
};

export default Form;
