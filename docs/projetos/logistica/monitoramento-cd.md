# Monitoramento CD

## Descrição
Mapa interativo do centro de distribuição, renderizando blocos no grid por rua.

---

## Funcionalidades
- Pintura dinâmica dos blocos por filtros (carga, endereço, produto, estoque, pickings livres e pulmões livres);
- Destaque do bloco "limbo" para endereços não mapeados;
- Mapa de calor para lotação do CD;
- Exibição da capacidade atual dos pickings e pulmões do estoque.

---

## Estrutura do Código
- `blocks.ts` importa blocos divididos por rua (`rua1.ts`, `rua2.ts` etc);
- Os blocos possuem a seguinte estrutura:
  ```javascript
  export interface Block {
    id: string;
    label: string;
    x: number;
    y: number;
    width: number;
    height: number;
    color: string;
    tooltip?: string;
    originalColor: string;
    tipo?: string;
  }
  ```
- Filtros organizados em componentes e funções separadas.
  
---

## Manutenção e Expansão

### Como adicionar nova rua
- Crie o arquivo `ruaX.ts`;
- Siga o padrão de blocos;
- Importe o arquivo `ruaX.ts` no arquivo `blocks.ts`.

### Como adiccionar novo filtro
- Crie a lógica em `utils/filtros/`;
- Crie um componente par ao filtro em `components/`;
- Teste o comportamento no `GridMap.tsx`.

---

## Testes
Execute `npx cypress run` para rodar os testes automatizados da aplicação.

---

## Observações
- Evite re-render desnecessário em grandes datasets para prevenir `Maximum call stack size exceeded`;
- Evite loops aninhados, prefira uso de `map`;
- Evite `structuredClone` desnecessário;
- Padronie nomes de blocos, filtros e arquivos.
  
---

## Links Úteis
[Como interpretar o Monitoramento do CD](../../guias/logistica/como-interpretar-monitoramento-cd)

---