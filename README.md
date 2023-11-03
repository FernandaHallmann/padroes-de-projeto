# Padrões de Projeto
 
- São soluções para problemas recorrentes.
- Popularizados pelo livro "Padrões de projeto - Soluções reutilizáveis de software orientado a objetos" (padrões de GoF - Gangue dos quatro, pois foram 4 pessoas que escreveram o livro).
- São divididos em três categorias:
    1. **Creational:** abstrair o processo de como objetos são criados.
        1. *Abstract factory*
        2. *Factory Method*
        3. *Builder*
        4. *Prototype*
        5. *Singleton*
    2. **Structural:** composição de classes e objetos.
        1. *Adapter*
        2. *Bridge*
        3. *Composite*
        4. *Decorator*
        5. *Façade*
        6. *Flyweight*
        7. *Proxy*
    3. **Behavioural:** caracterizam como as classes e objetos interagem e distribuem responsabilidades na aplicação.
        1. *Interpreter*
        2. *Template method*
        3. *Chain of responsibility*
        4. *Iterator*
        5. *Command*
        6. *Mediator*
        7. *Memento*
        8. *Observer*
        9. *State*
        10. *Strategy*
        11. *Visitor*

### Creational

#### Builder

- Separa a construção de um objeto complexo da sua representação de modo que o mesmo processo de construção possa criar diferentes representações.
- O padrão sugere a separação da criação e utilização do objeto.
- Trata da criação de objetos complexos.

#### Prototype

- Especifica os tipos de objetos a serem criados usando uma instância-protótipo e cria novos objetos pela cópia desse protótipo.
- O tipo de objeto a ser criado é determinado pelo objeto protótipo.

#### Singleton

- Garante que uma classe tenha só uma instância no programa e fornece um ponto de acesso global para a mesma.
- Usado quando uma classe precisa ter somente uma instância disponível em todo o programa.