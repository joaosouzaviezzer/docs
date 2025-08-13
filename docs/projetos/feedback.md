# Feedback

## Visão geral

O **Feedback** é um módulo do sistema utilizado para reportar rapidamente melhorias, bugs ou solicitações relacionadas aos projetos internos do Viezzer Supermercados.

Permite que usuários classifiquem o tipo de ocorrência, selecionem o projeto afetado e descrevam o problema, garantindo rastreabilidade e priorização dos chamados.

---

## Campos do formulário

### 🐞 Tipo
- **Campo:** Dropdown
- **Opções:** 
  - 🐛 Bug
  - ✨ Melhoria
  - 📝 Outro
- **Descrição:** Classifica o tipo de feedback.

---

### 📊 Projeto
- **Campo:** Dropdown
- **Opções:** 
  - Projetos 1
  - Projetos 2
  - Projetos 3
  - ...
- **Descrição:** Identifica o projeto do feedback.

---

### 📝 Descrição
- **Campo:** Texto
- **Descrição:** Campo para detalhar o problema encontrado ou sugestão de melhoria.

---

## Botão

✅ **Enviar**
- Realiza o submit do formulário enviando os dados para a API/backend;
- Após o envio, limpa o formulário e exibir confirmação no Snackbar.

---

## Funcionalidades adicionais

✅ Tickets:
- Envia o feedback por e-mail gerando um ticket para a equipe de TI.

✅ UX otimizada:
- Ícone no select de tipo indica o contexto visual (ex.: bug 🪲).

---

## Tecnologias utilizadas

- **Frontend:** React, notistack para feedback visual;
- **Backend:** Integrações via API para envio de feedback;
- **API:** endpoints para receber e enviar e-mail.

---

## Observações importantes

- O formulário é projetado para ser simples e rápido, incentivando os usuários a registrar problemas assim que detectados.

---

## Exemplo de payload enviado

```json
{
  "type": "Bug",
  "project": "Painel",
  "description": "Ao clicar no botão X, o sistema retorna erro 500."
}
```
---

## Links Úteis
[Como enviar um Feedback](../guias/como-enviar-feedback)

---