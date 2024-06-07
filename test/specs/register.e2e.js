import { faker } from '@faker-js/faker'
import registerPage from '../page/register.page.js'

describe('Cadastro com sucesso no Recruiter', () => {
    beforeEach(async () => { await registerPage.open() })
    it('Registro com sucesso', async () => {
        await registerPage.sucesso(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.phone.number('###########'), faker.internet.password())
        await registerPage.validaPage()
    })
    it('Registro com sobrenome vazio', async () => {
        await registerPage.sobreNomeVazio(faker.name.firstName(), null, faker.internet.email(), faker.phone.number('###########'))
        await registerPage.validaCampoObrigatorio()

    })
    it('Registro com email ja cadastrado', async () => {
        await registerPage.EmailEmUso(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.phone.number('###########'))
        await registerPage.validaEmailEmUso()
    })
    // it('Registro com email invalido', async () => {
    //     await registerPage.emailInvalido(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.phone.number('###########'))
    //     await registerPage.validaEmailInvalido()
    // })

    it('Registro com senha menor que 6 caracteres', async () => {
        await registerPage.senhaInvalida(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.phone.number('###########'))
        await registerPage.validaSenhaInvalida()
    })
})
