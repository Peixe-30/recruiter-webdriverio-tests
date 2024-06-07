import Page from '../page/page.js'

class LoginPage extends Page {

    get emailInput() { return $('input[name="email"]') }
    get passwordInput() { return $('input[name="password"]') }
    get submitButton() { return $('button[type="submit"]') }

    open() {
        return super.open('auth/login')
    }

    async login(email, password) {
        await this.emailInput.setValue(email)
        await this.passwordInput.setValue(password)
        await this.submitButton.click()
    }
    async logout() {

        const logout = $('.mui-style-1jkjxoc')
        await logout.click()
        const logoutButton = $('//*[@id="account-menu"]/div[3]/ul/div/div/nav/div[6]/div[2]/span').click()
        await logoutButton.click()
    }

    async esqueciMinhaSenha(email) {
        const linkEsqueciMinhaSenha = $('a[href="/v2/auth/esqueci-minha-senha"]')
        await linkEsqueciMinhaSenha.click()
        const emailRecuperacaoSenha = $('input[name="email"]')
        await emailRecuperacaoSenha.setValue(email)
        const submitButton = $('button[type="submit"]')
        await submitButton.click()
    }

    async validaLoginSucesso() {
        const loginSucesso = await $('.go3958317564').getText()
        expect(loginSucesso).toBe('Sucesso ao logar')
    }
    async validaEmailInvalido() {
        const emailInvalido = await $('.MuiFormHelperText-root').getText()
        expect(emailInvalido).toBe('Digite um email válido')
    }
    async validaSenhaInvalida() {
        const senhaInvalida = await $('.go3958317564').getText()
        expect(senhaInvalida).toBe('Usuário ou senha inválido.')
    }
    async validaEmailNaoCadastrado() {
        const emailNaoCadastrado = await $('.go3958317564').getText()
            .waitForDisplayed({ timeout: 5000 })
        expect(emailNaoCadastrado).toBe('Usuário não encontrado.')
    }
    async validaTitulodaPagina() {
        const pageTitle = await browser.getTitle()
        expect(pageTitle).toBe('Dashboard')
    }
    async validaTamanhodaSenha() {
        const tamanhoDaSenha = await $('.MuiFormHelperText-contained').getText()
        expect(tamanhoDaSenha).toBe('Mínimo 6 caracteres')

    }

}
export default new LoginPage();
