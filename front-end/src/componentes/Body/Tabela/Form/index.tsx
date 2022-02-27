import React from 'react';
import { JsxElement } from 'typescript';
import { deleteUser, getUsers } from '../../../../api/api';
import { useCreateContext, UsersType } from '../../../../context/UsersContext';
import { Button } from './Button';
import { ContainerForm, InputStyled, BlocoInput, SelectStyled } from './styles';
interface StackType1 {
  language1: string;
  framework1: string;
}

interface StackType2 {
  language2: string;
  framework2: string;
}

const Form = () => {
  const { input, setInput } = useCreateContext();

  function handleId(id: number): void {
    setInput({ ...input, id });
  }

  function handleNome(nome: string): void {
    setInput({ ...input, nome });
  }

  function handleEmail(email: string): void {
    setInput({ ...input, email });
  }

  function handleTelefone(telefone: number): void {
    setInput({ ...input, telefone });
  }

  function handleLinguagens1(language: string): void {
    let newInput = input.stacks.map((stack: any) => {
      // console.log({ language1 });
    });
  }

  handleLinguagens1('oi');

  // function handleLinguagens2(language2: string): void {
  //   setInput({ ...input, language2 });
  // }
  // function handleFrameworks1(framework1: string): void {
  //   setInput({ ...input, framework1 });
  // }
  // function handleFrameworks2(frameworks2: string): void {
  //   setInput({ ...input, frameworks2 });
  // }

  function validacaoFormulario(input: UsersType): boolean {
    const regexNumero = /^[0-9\b]+$/;
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
    const regexTelefone = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;

    // if (input.id === '') {
    //   console.log('O ID está vazio.');
    //   return false;
    // }

    // if (input.name === '') {
    //   console.log('O nome está vazio.');
    //   return false;
    // }

    // if (input.email === '') {
    //   console.log('O e-mail está vazio.');
    //   return false;
    // }

    // if (input.telefone === '') {
    //   console.log('O telefone está vazio.');
    //   return false;
    // }

    // if (input.linguagem1 === '') {
    //   console.log('A linguagem 1 está vazia.');
    //   return false;
    // }

    // if (input.linguagem2 === '') {
    //   console.log('A linguagem 2 está vazia.');
    //   return false;
    // }

    // if (input.frameworks1 === '') {
    //   console.log('O framework 1 está vazio.');
    //   return false;
    // }

    // if (input.frameworks2 === '') {
    //   console.log('O framework 2 está vazio.');
    //   return false;
    // }

    // if (!regexNumero.test(input.id)) {
    //   console.log('Digite um ID válido.');
    //   return false;
    // }

    // if (!regexEmail.test(input.email)) {
    //   console.log('Digite um E-mail válido.');
    //   return false;
    // }

    // if (!regexTelefone.test(input.telefone)) {
    //   console.log('Digite um Telefone válido.');
    //   return false;
    // }

    return true;
  }
  function handleCancel() {
    setInput({
      id: null,
      nome: '',
      email: '',
      telefone: null,
      stacks: [
        {
          language1: '',
          framework1: '',
        },
        {
          language2: '',
          framework2: '',
        },
      ],
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let valida = validacaoFormulario(input);
    console.log(input);
  }

  getUsers();

  return (
    <ContainerForm onSubmit={handleSubmit}>
      <BlocoInput>
        <label htmlFor="id">ID</label>
        <InputStyled
          // value={input.id}
          // onChange={(e) => handleId(e.target.value)}
          type="text"
          name="id"
        />
      </BlocoInput>

      <BlocoInput>
        <label htmlFor="nome">Nome</label>
        <InputStyled
          // value={input.name}
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
          // value={input.telefone}
          // onChange={(e) => handleTelefone(e.target.value)}
          type="text"
          name="telefone"
        />
      </BlocoInput>
      <div>
        <label htmlFor="linguagens">Linguagens 1</label>
        <SelectStyled
          // value={input.linguagem1}
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
          // value={input.linguagem2}
          // onChange={(e) => handleLinguagens2(e.target.value)}
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
          // value={input.frameworks1}
          // onChange={(e) => handleFrameworks1(e.target.value)}
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
          // value={input.frameworks2}
          // onChange={(e) => handleFrameworks2(e.target.value)}
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
