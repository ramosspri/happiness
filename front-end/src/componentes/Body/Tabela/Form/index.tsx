import React from 'react';
import { addUser, deleteUser, getUsers } from '../../../../api/api';
import {
  InputType,
  useCreateContext,
  UsersType,
} from '../../../../context/UsersContext';
import { Button } from './Button';
import { ContainerForm, InputStyled, BlocoInput, SelectStyled } from './styles';

const Form = () => {
  const { input, setInput } = useCreateContext();
  const { mostra, setUsers } = useCreateContext();

  function handleNome(nome: string): void {
    setInput({ ...input, nome });
  }

  function handleEmail(email: string): void {
    setInput({ ...input, email });
  }

  function handleTelefone(telefone: string): void {
    setInput({ ...input, telefone });
  }

  function handleLinguagens1(language1: string): void {
    setInput({ ...input, language1 });
  }

  function handleLinguagens2(language2: string): void {
    setInput({ ...input, language2 });
  }
  function handleFrameworks1(framework1: string): void {
    setInput({ ...input, framework1 });
  }
  function handleFrameworks2(framework2: string): void {
    setInput({ ...input, framework2 });
  }

  function validacaoFormulario(input: InputType): boolean {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
    const regexTelefone = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;

    if (input.nome === '') {
      console.log('O nome está vazio.');
      return false;
    }

    if (input.email === '') {
      console.log('O e-mail está vazio.');
      return false;
    }

    if (input.telefone === '') {
      console.log('O telefone está vazio.');
      return false;
    }

    if (input.language1 === '') {
      console.log('A linguagem 1 está vazia.');
      return false;
    }

    if (input.language2 === '') {
      console.log('A linguagem 2 está vazia.');
      return false;
    }

    if (input.framework1 === '') {
      console.log('O framework 1 está vazio.');
      return false;
    }

    if (input.framework2 === '') {
      console.log('O framework 2 está vazio.');
      return false;
    }

    if (!regexEmail.test(input.email)) {
      console.log('Digite um E-mail válido.');
      return false;
    }

    if (!regexTelefone.test(input.telefone)) {
      console.log('Digite um Telefone válido.');
      return false;
    }

    return true;
  }
  function handleCancel() {
    setInput({
      nome: '',
      email: '',
      telefone: '',
      language1: '',
      framework1: '',
      language2: '',
      framework2: '',
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let valida = validacaoFormulario(input);
    if (valida) {
      console.log(input);
      const user: UsersType = {
        nome: input.nome,
        email: input.email,
        telefone: +input.telefone,
        stacks: [
          {
            language1: input.language1,
            framework1: input.framework1,
          },
          {
            language2: input.language2,
            framework2: input.framework2,
          },
        ],
      };
      addUser(user);
      console.log('Usuário adicionado com sucesso.');
    }
  }
  return (
    <ContainerForm onSubmit={handleSubmit}>
      {mostra && (
        <BlocoInput>
          <label htmlFor="id">ID</label>
          <InputStyled type="text" name="id" />
        </BlocoInput>
      )}

      <BlocoInput>
        <label htmlFor="nome">Nome</label>
        <InputStyled
          value={input.nome}
          onChange={(e) => handleNome(e.target.value)}
          type="text"
          name="nome"
        />
      </BlocoInput>

      <BlocoInput>
        <label htmlFor="email">E-mail</label>
        <InputStyled
          value={input.email}
          onChange={(e) => handleEmail(e.target.value)}
          type="text"
          name="email"
        />
      </BlocoInput>

      <BlocoInput>
        <label htmlFor="telefone">Telefone</label>
        <InputStyled
          value={input.telefone}
          onChange={(e) => handleTelefone(e.target.value)}
          type="text"
          name="telefone"
        />
      </BlocoInput>
      <div>
        <label htmlFor="linguagens">Linguagens 1</label>
        <SelectStyled
          value={input.language1}
          onChange={(e) => handleLinguagens1(e.target.value)}
          name="linguagens"
        >
          <option value="none"></option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="typescript">Typescript</option>
          <option value="javascript">Javascript</option>
        </SelectStyled>
      </div>

      <div>
        <label htmlFor="linguagens">Linguagens 2</label>
        <SelectStyled
          value={input.language2}
          onChange={(e) => handleLinguagens2(e.target.value)}
          name="linguagens"
        >
          <option value="none"></option>
          <option value="python">Python</option>
          <option value="java">Java</option>
          <option value="typescript">Typescript</option>
          <option value="javascript">Javascript</option>
        </SelectStyled>
      </div>

      <div>
        <label htmlFor="frameworks">Frameworks 1</label>
        <SelectStyled
          value={input.framework1}
          onChange={(e) => handleFrameworks1(e.target.value)}
          name="frameworks"
        >
          <option value="none"></option>
          <option value="django">Django</option>
          <option value="springboot">Spring Boot</option>
          <option value="react">React</option>
          <option value="bootstrap">Bootstrap</option>
        </SelectStyled>
      </div>

      <div>
        <label htmlFor="frameworks">Frameworks 2</label>
        <SelectStyled
          value={input.framework2}
          onChange={(e) => handleFrameworks2(e.target.value)}
          name="frameworks"
        >
          <option value="none"></option>
          <option value="django">Django</option>
          <option value="springboot">Spring Boot</option>
          <option value="react">React</option>
          <option value="bootstrap">Bootstrap</option>
        </SelectStyled>
      </div>

      <Button handleCancel={handleCancel} />
    </ContainerForm>
  );
};
export default Form;
