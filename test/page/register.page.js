import Page from '../page/page.js'

class RegisterPage extends Page {

    get firstNameField() { return $('input[name="firstname"]') }
    get lastNameField() { return $('input[name="lastname"]') }
    get emailField() { return $('input[name="email"]') }
    get phoneNumberField() { return $('input[name="phone"]') }
    get buttonContinuar1() { return $('.mui-style-1undr70') }
    get buttonContinuar2() { return $('.MuiTypography-button') }
    get actuationArea() { return $('#autocomplete_actuation') }
    get findOutField() { return $('#autocomplete_sourceOfOrigin') }
    get findOutSelection() { return $('.MuiChip-label') }
    get password() { return $('input[name="password"]') }
    get termCheckbox() { return $('.PrivateSwitchBase-input') }

    open() {
        return super.open('registrar')
    }

    async register(cadastro) {
        await this.firstNameField.setValue(cadastro.firstName)
        await this.lastNameField.setValue(cadastro.lastName)
        await this.emailField.setValue(cadastro.email)
        await this.phoneNumberField.setValue(cadastro.phone)
        await this.buttonContinuar1.click()

        const acoes = [
            { valor: 'Profissional' },
            { valor: 'Head' },
        ];

        await this.actuationArea.click();
        for (const acao of acoes) {
            await this.actuationArea.setValue(acao.valor)
            await this.actuationArea.waitForDisplayed()
            await browser.keys(['ArrowDown'])
            await browser.keys(['Enter'])
            await this.actuationArea.clearValue()
        }

        await this.actuationArea.waitForDisplayed()
        await this.actuationArea.setValue('Job')
        await browser.keys(['ArrowDown'])
        await browser.keys(['Enter'])


        await this.findOutField.waitForDisplayed()
        await this.findOutField.click()
        await this.findOutField.setValue('Google')
        await browser.keys(['ArrowDown'])
        await browser.keys(['Enter'])

        await this.password.waitForDisplayed()
        await this.password.setValue(cadastro.password)
        await this.termCheckbox.click()
        await this.buttonContinuar2.click()
    }


    async validPage() {
        const registerSuccess = await $('.mui-style-1n67vjy').getText()
        expect(registerSuccess).toBe('Sua conta no Peixe 30 está quase pronta.')
    }
    async validCampoObrigatorio() {
        const campoObrigatorio = await $$('.mui-style-1guod47').getText()
        expect(campoObrigatorio).toBe('Campo obrigatório')

    }
    // async validEmailEmUso() {
    //     const emailEmUso = (await $('go3958317564')).getText()
    //     expect(emailEmUso).toBe('Esse e-mail já está em uso')
    // }
}

export default new RegisterPage()

// , '.mui-style-1guod47'
// , 'Digite um email válido'