import React from 'react';
import { toast } from 'react-toastify';
import { addUser, deleteUser, getUsers, updateUser } from '../../../../api/api';
import {
  InputType,
  useCreateContext,
  UsersType,
} from '../../../../context/UsersContext';
import { Toggle } from '../../../SideMenu/styles';
import { Button } from './Button';
import {
  ContainerForm,
  InputStyled,
  SelectStyled,
  BlocoId,
  BlocoNome,
  BlocoEmail,
  BlocoTelefone,
  ContainerSelectLanguage,
  ContainerSelectFrameWork,
} from './styles';

const Form = () => {
  const { input, setInput, mostra, mudanca, setMudanca, toggle } =
    useCreateContext();

  function handleId(id: string): void {
    setInput({ ...input, id });
  }
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
  function handleCancel() {
    setInput({
      id: '',
      nome: '',
      email: '',
      telefone: '',
      language1: '',
      framework1: '',
      language2: '',
      framework2: '',
    });
  }
  function validacaoFormulario(input: InputType): boolean {
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+.[a-z]+.([a-z]+)?$/i;
    const regexTelefone = /^([0-9]{2})([0-9]{4,5})([0-9]{4})$/;

    if (input.nome === '') {
      toast.error('O nome está vazio');
      return false;
    }

    if (input.email === '') {
      toast.error('O e-mail está vazio.');
      return false;
    }

    if (input.telefone === '') {
      toast.error('O telefone está vazio.');
      return false;
    }

    if (input.language1 === '') {
      toast.error('A linguagem 1 está vazia.');
      return false;
    }

    if (input.language2 === '') {
      toast.error('A linguagem 2 está vazia.');
      return false;
    }

    if (input.framework1 === '') {
      toast.error('O framework 1 está vazio.');
      return false;
    }

    if (input.framework2 === '') {
      toast.error('O framework 2 está vazio.');
      return false;
    }

    if (!regexEmail.test(input.email)) {
      toast.error('Digite um E-mail válido.');
      return false;
    }

    if (!regexTelefone.test(input.telefone)) {
      toast.error('Digite um Telefone válido.');
      return false;
    }

    return true;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    let valida = validacaoFormulario(input);

    if (valida) {
      if (input.id) {
        const user: UsersType = {
          id: +input.id,
          nome: input.nome,
          email: input.email,
          telefone: +input.telefone,
          stacks: [
            {
              language: input.language1,
              framework: input.framework1,
            },
            {
              language: input.language2,
              framework: input.framework2,
            },
          ],
        };
        updateUser(input.id, user);
        toast.success('Usuário atualizado com sucesso.');
        toggle();
        handleCancel();
      } else {
        const user: UsersType = {
          id: null,
          nome: input.nome,
          email: input.email,
          telefone: +input.telefone,
          stacks: [
            {
              language: input.language1,
              framework: input.framework1,
            },
            {
              language: input.language2,
              framework: input.framework2,
            },
          ],
        };
        addUser(user);
        toast.success('Usuário adicionado com sucesso.');
        handleCancel();
      }
    }
    setMudanca(true);
  }
  return (
    <ContainerForm onSubmit={handleSubmit}>
      {mostra && (
        <BlocoId>
          <label htmlFor="id">ID</label>
          <InputStyled
            type="text"
            name="id"
            value={input.id}
            onChange={(e) => handleId(e.target.value)}
          />
        </BlocoId>
      )}

      <BlocoNome>
        <label htmlFor="nome">Nome</label>
        <InputStyled
          placeholder="Ex: José"
          value={input.nome}
          onChange={(e) => handleNome(e.target.value)}
          type="text"
          name="nome"
        />
      </BlocoNome>

      <BlocoEmail>
        <label htmlFor="email">E-mail</label>
        <InputStyled
          placeholder="Ex: joao@gmail.com"
          value={input.email}
          onChange={(e) => handleEmail(e.target.value)}
          type="text"
          name="email"
        />
      </BlocoEmail>

      <BlocoTelefone>
        <label htmlFor="telefone">Telefone</label>
        <InputStyled
          placeholder="Ex: 64984591069"
          value={input.telefone}
          onChange={(e) => handleTelefone(e.target.value)}
          type="text"
          name="telefone"
        />
      </BlocoTelefone>
      <ContainerSelectLanguage>
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
      </ContainerSelectLanguage>

      <ContainerSelectLanguage>
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
      </ContainerSelectLanguage>
      <ContainerSelectFrameWork>
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
      </ContainerSelectFrameWork>

      <ContainerSelectFrameWork>
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
      </ContainerSelectFrameWork>
      <Button handleCancel={handleCancel} />
    </ContainerForm>
  );
};
export default Form;
