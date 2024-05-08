import { faker } from '@faker-js/faker'

export const register = {
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.number('###########'),
  password: faker.internet.password()
}

