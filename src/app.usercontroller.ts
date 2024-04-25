import { Controller, Get, Query } from '@nestjs/common';
import { UserDTO } from './DTO/UserDTO';

@Controller('/user')
export class AppUserController {
  public constructor() {}
  
  // Criando uma rota para avaliar como se faz para realizar
  // inserts invocando uma outra api utilizando uma função
  // nativa do node js chamada de fetch
  @Get('/create-elements-api')
  public async createElementsWithFetch() {
    // criando um array para armazenar todas as respostas
    const allResponses = [];

    // Utilizando fetch, realizamos uma requisição HTTP de uma api para a outra
    // Observe que no segundo argumento se faz necessário passar um objeto com 
    // as configurações da requisição
    // O header da request precisa ser informade e observe que precisamos
    // especificar no header que o tipo da request é JSON
    // Isso porque o body da request é um json
    // Para além disso, observe também que o body precisa ser convertido 
    // para query string - tornando todo o processo bastante
    // trabalhoso e passível de erros
    const responseOne = await fetch('http://localhost:3004/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Usuario1',
        email: 'usuario1@email.com.',
        password: 'senha1',
        document: '000.000.000-00',
        phone: '41911111111',
        address: 'R. Rua 1, numero1',
      }),
    });

    // Neste momento estamos adicionando a resposta da requesto no array que contem 
    // a resposta de todas as chamadas
    allResponses.push(await responseOne.json());

    // Estamos repetindo o processo anterior, porem para um novo usuário
    const responseTwo = await fetch('http://localhost:3004/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Usuario2',
        email: 'usuario2@email.com.',
        password: 'senha2',
        document: '000.000.000-02',
        phone: '41911111112',
        address: 'R. Rua 2, numero2',
      }),
    });

    allResponses.push(await responseTwo.json());

    // Estamos repetindo o processo anterior, porem para um novo usuário
    const responseThree = await fetch('http://localhost:3004/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Usuario3',
        email: 'usuario3@email.com.',
        password: 'senha3',
        document: '000.000.000-03',
        phone: '41911111113',
        address: 'R. Rua 3, numero3',
      }),
    });

    allResponses.push(await responseThree.json());

    // Temos o retorno das respostas
    return allResponses;
  }

  @Get('/')
  public async getUsersWithFetch(): Promise<UserDTO[]> {
    // Realizamos uma chamada get usando api fetch
    // Observe que no caso do get não precisamos especificar o tipo de request
    const returnOfApi = await fetch('http://localhost:3004/users');
    const users = await returnOfApi.json();

    // Aplicando map, operamos sobre cada elemento do array
    // onde removemos algumas informações sensíveis do usuário
    // Onde não queremos que o usuário tenha acesso 
    return users.map((user) => {
      return new UserDTO(user);
    });
  }

}