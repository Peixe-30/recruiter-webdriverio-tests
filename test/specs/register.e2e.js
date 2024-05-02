import { cadastroFaker, sobrenomeVazio, emailInvalido, dadosVazios, senhaInvalida } from '../utils.js'
import rp from '../page/register.page.js'


describe('Cadastro no Recruiter', () => {
    beforeEach(async () => { await rp.open() })
    it('Registro com sucesso', async () => {
        await rp.register(cadastroFaker)
        await rp.validPage()
    })
    it('Registro com sobrenome vazio', async () => {
        await rp.register(sobrenomeVazio)
        await rp.validCampoObrigatorio()
    })
    // it('Registro com email invalido', async () => {
    //     await rp.register(emailInvalido)
    //     await rp.validemailEmUso()
    // })
    // it('Registro dados vazios', async () => {
    //     await rp.register(dadosVazios)
    //     await rp.validCampoObrigatorio()
    // })
    // it('Registro com senha menor que 6 caracteres', async () => {
    //     await rp.register(senhaInvalida)
    //     await lp.validaTamanhodaSenha()
    // })
})
