import { faker } from '@faker-js/faker'
export const cadastroFaker = {

  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.number('###########'),
  password: faker.internet.password()

}
export const sobrenomeVazio = {
  firstName: 'Amanda',
  lastName: '',
  email: 'teste@teste.com',
  phone: faker.phone.number('###########'),
  password: faker.internet.password()

}
export const emailInvalido = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: 'teste.com',
  phone: faker.phone.number('###########'),
  password: faker.internet.password()
}
export const dadosVazios = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
}
export const senhaInvalida = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: 'teste.com',
  phone: faker.phone.number('###########'),
  password: '123',
}

