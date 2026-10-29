# Política de Segurança — Evren Visual Studio 🔒

A segurança e a integridade dos dados e das comunicações da **Evren Visual Studio** são tratadas com a máxima seriedade.

---

## 🛡️ Versões Suportadas

Apenas a versão mais recente em execução no branch `main` recebe correções de segurança ativas:

| Versão | Suporte Ativo |
|---|---|
| `2.0.x` (Atual) | :white_check_mark: Sim |
| `< 2.0.0` | :x: Não |

---

## 🚨 Como Reportar uma Vulnerabilidade

Caso identifique qualquer vulnerabilidade de segurança (ex: exposição inadvertida de dados, problemas de cabeçalhos de segurança, vulnerabilidade em dependências npm):

1. **NÃO crie uma Issue pública no GitHub.**
2. Envie um e-mail com os detalhes técnicos diretamente para:
   📧 **evrenvisualestudio@gmail.com** com o assunto `[Vulnerabilidade de Segurança] Evren Landing Page`.
3. Por favor, inclua:
   - Descrição detalhada do problema.
   - Passos reproduzíveis ou Prova de Conceito (PoC).
   - Impacto estimado na aplicação ou nos dados dos clientes.
4. A nossa equipa responderá em até 48 horas úteis e providenciará uma correção célere.

---

## 🔐 Boas Práticas do Repositório

- **Chaves de API e Segredos**: Nunca comite arquivos `.env`, tokens ou credenciais em repositórios públicos. Utilize variáveis de ambiente no painel do seu provedor de hospedagem.
- **Auditoria de Dependências**: O projeto é verificado regularmente através de `npm audit`.
