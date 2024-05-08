# Testes E2E com WebdriverIO

Para adicionar uma configuração completa do WebdriverIO a um projeto novo ou existente usando o WebdriverIO Starter Toolkit , execute:

Se você estiver no diretório raiz de um projeto existente, execute:

> npm init wdio@latest .

ou se você deseja criar um novo projeto:

> npm init wdio@latest ./path/to/new/project

Este comando único faz download da ferramenta WebdriverIO CLI e executa um assistente de configuração que ajuda você a configurar seu conjunto de testes.

Para criar uma demonstração do WebdriverIO O assistente solicitará um conjunto de perguntas que o orientará durante a configuração. Você pode passar um --yes parâmetro para escolher uma configuração padrão que usará Mocha com Chrome usando o padrão Page Object .

> npm init wdio@latest . -- --yes

Se desejar responder cada pergunta, escohendo a opção desejada, execute o comando a seguir:

> npm init wdio@latest .

# run configuration wizard

> npx wdio config

# Executar 

Você pode iniciar seu conjunto de testes usando o `run`comando e apontando para a configuração do WebdriverIO que acabou de criar:

> npx wdio run ./wdio.conf.js

Se você gosta de executar arquivos de teste específicos, você pode adicionar um `--specparâmetro`:

> npx wdio run ./wdio.conf.js --spec example.e2e.js

ou defina suítes em seu arquivo de configuração e execute apenas os arquivos de teste definidos em uma suíte:

> npx wdio run ./wdio.conf.js --suite exampleSuiteName

Documentação: https://webdriver.io/docs/gettingstarted/