import lp from '../page/login.page.js'

describe('Login no Recruiter', () => {
    beforeEach(async () => { await lp.open() })
    it('Login com sucesso', async () => {
        await lp.login('maria.santos@peixe30.com', '123456')
        await lp.validaLoginSucesso()
        await browser.saveScreenshot('login_sucesso.png')
        lp.validaTitulodaPagina()
    })
    it('Login com e-mail invalido e senha valida', async () => {
        await lp.login('maria.peixe30.com', '123456')
        await lp.validaEmailInvalido()
    })
    it('Login com e-mail valido e senha invalida', async () => {
        await lp.login('maria.santos@peixe30.com', 'abcdef')
        await lp.validaSenhaInvalida()
    })
    it('Login com senha menor que 6 caracteres', async () => {
        await lp.login('maria.santos@peixe30.com', '123')
        lp.validaTamanhodaSenha()
    })
    it('Login com e-mail não cadastrado', async () => {
        await lp.login('maria@peixe30.com', '123456')
        lp.validaEmailNaoCadastrado()

    })
})