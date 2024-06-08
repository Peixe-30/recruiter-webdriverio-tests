import Page from '../page/page.js'
class RegisterPage extends Page {

    get firstName() { return $('input[data-test="text_field_firstname"]') }
    get lastName() { return $('input[data-test="text_field_lastname"]') }
    get email() { return $('input[data-test="text_field_email"]') }
    get phoneNumber() { return $('input[data-test="text_field_phone"]') }
    get buttonNextFirstStep() { return $('input[data-test="button-loading-next-step"]') }
    get buttonNextSecondStep() { return $('input[data-test="button-loading-next-step"]') }
    get actuationArea() { return $('#autocomplete_actuation') }
    get findOut() { return $('#autocomplete_sourceOfOrigin') }
    get findOutSelection() { return $('.MuiChip-label') }
    get password() { return $('input[name="password"]') }
    get termCheckbox() { return $('.mui-style-k8jwqh') }

    open() {
        return super.open('registrar')
    }

    async sucesso(nome, sobrenome, email, telefone, password) {
        if (nome !== null) {
            await this.firstName.setValue(nome)
        }
        if (sobrenome !== null) {
            await this.lastName.setValue(sobrenome)
        }
        if (email !== null) {
            await this.email.setValue(email)
        }
        if (telefone !== null) {
            await this.phoneNumber.setValue(telefone)
        }
        await this.buttonContinuar1.click()

        await this.actuationArea.setValue('Job')
        await browser.keys(['ArrowDown'])
        await browser.keys(['Enter'])
        await this.findOut.setValue('Google')
        await browser.keys(['ArrowDown'])
        await browser.keys(['Enter'])
        await this.password.setValue(password)
        await this.termCheckbox.click()
        await this.buttonContinuar2.click()
<<<<<<< HEAD
=======

>>>>>>> 513b37ad16394348d3b61cbd6b1ee42d3bbd8641
    }
    async sobreNomeVazio(nome, sobrenome, email, telefone) {
        if (nome !== null) {
            await this.firstName.setValue(nome)
        }
        if (sobrenome !== null) {
            await this.lastName.setValue(sobrenome)
        }
        if (email !== null) {
            await this.email.setValue(email)
        }
        if (telefone !== null) {
            await this.phoneNumber.setValue(telefone)
        }
        await this.buttonContinuar1.click()

    }
    async EmailEmUso(nome, sobrenome, email, telefone) {
        if (nome !== null) {
            await this.firstName.setValue(nome)
        }
        if (sobrenome !== null) {
            await this.lastName.setValue(sobrenome)
        }
        if (email !== null) {
            await this.email.setValue('maria.santos@peixe30.com')
        }
        if (telefone !== null) {
            await this.phoneNumber.setValue(telefone)
        }
        await this.buttonContinuar1.click()

    }
    async emailInvalido(nome, sobrenome, email, telefone) {
        if (nome !== null) {
            await this.firstName.setValue(nome)
        }
        if (sobrenome !== null) {
            await this.lastName.setValue(sobrenome)
        }
        if (email !== null) {
            await this.email.setValue('email.com')
        }
        if (telefone !== null) {
            await this.phoneNumber.setValue(telefone)
        }
        await this.buttonContinuar1.click()

    }
    async senhaInvalida(nome, sobrenome, email, telefone) {
        if (nome !== null) {
            await this.firstName.setValue(nome)
        }
        if (sobrenome !== null) {
            await this.lastName.setValue(sobrenome)
        }
        if (email !== null) {
            await this.email.setValue(email)
        }
        if (telefone !== null) {
            await this.phoneNumber.setValue(telefone)
        }
        await this.buttonContinuar1.click()
        await this.actuationArea.setValue('Job')
        await browser.keys(['ArrowDown']);
        await browser.keys(['Enter'])
        browser.pause(30000)

        await this.findOut.setValue('Google')
        await browser.keys(['ArrowDown'])
        await browser.keys(['Enter'])
        browser.pause(30000)

        await this.password.waitForDisplayed()
        await this.password.setValue('@123')
        browser.pause(30000)
        await this.termCheckbox.waitForClickable()
        await this.termCheckbox.click()
        browser.pause(30000)
        await this.buttonContinuar2.click()
        browser.pause(20000)

    }
    async validaPage() {
        const registroSucesso = await $('.mui-style-1n67vjy').getText()
        browser.pause(30000)
        expect(registroSucesso).toBe('Sua conta no Peixe 30 está quase pronta.')
    }
    async validaCampoObrigatorio() {
        const campoObrigatorio = await $('.mui-style-1guod47').getText()
        expect(campoObrigatorio).toBe('Campo obrigatório')
    }
    async validaEmailEmUso() {
        const emailEmUso = await $('.go3958317564').getText()
        expect(emailEmUso).toBe('Esse e-mail já está em uso')
    }
    // async validaEmailInvalido() {
    //     const emailInvalido = await $('.mui-style-1guod47').getText()
    //     expect(emailInvalido).toBe('Digite um email válido')
    // }
    async validaSenhaInvalida() {

        const senhaInvalida = await $('.mui-style-1guod47').getText()
        expect(senhaInvalida).toBe('Mínimo 6 caracteres')
    }
}
export default new RegisterPage()