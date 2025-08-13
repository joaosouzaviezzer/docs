# Como configurar o CRUD Genérico

1. No seu `page.tsx`, defina os valores de `setCrudPerms` dentro de `useEffect`.
2. Exemplo:
    ```javascript
    setCrudPerms({
      canCreate: true,
      canDuplicate: true,
      canUpdate: true,
      canDelete: true,
    });
3. Em seguida, defina os campos com propriedades `showInForm`, `showInModal` e `sendToBackend`.
4. Exemplo:
    ```javascript
    const campos = [
      { name: 'produto', label: 'Produto', showInForm: true, showInModal: true, sendToBackend: true },
      { name: 'estoque', label: 'Estoque', showInForm: false, showInModal: true, sendToBackend: true },
    ];
5. Passe esses campos para o componente Crud.
6. O Crud mostrará os campos marcados com `showInForm: true`.
7. Cada modal (Add/Edit) respeitará o `showInModal` e só enviará o que está em `sendToBackend`.