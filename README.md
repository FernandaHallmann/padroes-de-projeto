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

#### Abstract Factory

- Fornece uma interface para criação de famílias de objetos relacionados ou dependentes sem especificar suas classes concretas.
- Geralmente é composto por múltiplos Factory Methods.
- Separa o código que cria do código que usa.
- Fácil implementação de novas famílias de objetos.
- Programação focada em interfaces e não em implementações.

#### Factory Method

- Define uma interface para criar um objeto, mas deixa as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instanciação para as subclasses.
- Lida com a criação de objetos.
- Oculta a lógica de instanciação do código cliente. O método fábrica será responsável por instanciar as classes desejadas.

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

### Structural

#### Adapter

- Converte a interface de uma classe em outra interface esperada pelos clientes. O adapter permite que certas classes trabalhem em conjunto.
- Faz exatamente o que um adaptador da vida real faz.
- É muito usado para definir limites dentro de camadas de aplicação.

#### Bridge

- Desacopla uma abstração da sua implementação, de modo que as duas possam variar e evoluir independentemente.
- A diferença entre Adapter e Bridge está nas suas intenções, o Adapter faz as coisas funcionarem APÓS elas terem sido projetadas, o Bridge faz funcionar ANTES que existam.

#### Composite

- Se preocupa com a forma como os objetos são compostos para formar estruturas maiores.
- Compõe objetos em estruturas de árvore para representar hierarquias partes/todo.
- Permite aos clientes tratarem de maneira uniforme objetos individuais e composições de objetos.
- Solução para estruturas complexas que podem ser tratadas de maneira uniforme.

#### Decorator

- Agrega responsabilidades adicionais a um objeto dinamicamente. Fornece uma alternativa flexível ao uso de subclasses para extensão de funcionalidades.
- Usa composição ao invés de herança.
- Usado para adicionar funcionalidades a objetos em tempo de execução.

#### Façade

- Fornece uma interface unificada para um conjunto de interfaces em um subsistema. Define uma interface de nível mais alto que torna o subsistema mais fácil de ser usado.
- Facilita a vida do código ao criar um objeto de fachada para um sistema mais complexo.

#### Flyweight

- Usa compartilhamento para suportar eficientemente grandes quantidades de objetos de forma granular.
- Padrão de otimização. Tende a deixar a aplicação mais complexa.
- Resolve o problema de desempenho dividindo o estado de um objeto em *intrínseco* e *extrínseco*:
    - **Intrínseco:** estado que geralmente não muda ou que muda muito pouco.
    - **Extrínseco:** estado que pode ser movido para fora do objeto por mudar frequentemente.

#### Proxy

- Fornece um substituto ou marcador de localização para outro objeto para controlar o acesso a esse objeto.
- Usa um objeto "proxy" que finge ser o objeto real.
- Pode escolher como e quando repassar chamadas de métodos para o objeto real.
  - **Proxy Virtual:** controla acesso a recursos que podem ser caros para criação ou utilização.
  - **Proxy Remoto:** controla acesso a recursos que estão em servidores remotos.
  - **Proxy de Proteção:** controla acesso a recursos que possam necessitar autenticação ou permissão.
  - **Proxy Inteligente:** além de controlar acesso ao objeto real, também executa tarefas adicionais para saber quando e como executar determinadas ações.

### Behavioural

#### Template Method

- Define o esqueleto de um algoritmo em uma operação, postergando a definição de alguns passos para subclasses. Permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura.
- Mantém a ordem de chamada de métodos no algoritmo.
- Permite que as subclasses alterem apenas os passos necessários para concluir o algoritmo.

#### Chain of responsibility

- Evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar a solicitação. Encadeia os objetos receptores e passa a solicitação ao longo da cadeia até que um objeto a trate.
- Usado quando uma requisição precisa passar por uma sequência de operações até ser totalmente tratada.
- Permite que um objeto **trate** a requisição e chame o **próximo** objeto da cadeia.
- Permite que um objeto **não trate** a requisição e chame o **próximo** objeto da cadeia.
- Permite que um objeto **trate** a requisição e **finalize** a cadeia.
- Permite que um objeto **não trate** a requisição e **finalize** a cadeia.

#### Command

- Encapsula uma solicitação como um objeto, desta forma permite que você parametrize clientes com diferentes solicitações, enfileire ou registre (log) solicitações e suporte operações que podem ser desfeitas.
- Transforma uma solicitação (um comando) em um objeto com toda a informação necessária para sua execução.

#### Mediator

- Define um objeto que encapsula como um conjunto de objetos interage. Promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros.
- Desacopla objetos que estariam intimamente ligados.
- Centraliza toda a comunicação em apenas um objeto.

#### Memento

- Captura e externaliza um estado interno de um objeto, de modo que o mesmo possa ser restaurado para este estado.
- Garante o encapsulamento e consistência nos backups.

#### State

- Permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecerá ter mudado sua classe.
- Evita condicionais quando um objeto contexto muda de comportamento dependendo do seu estado.

#### Strategy

- Define uma família de algoritmos, encapsula cada um deles e os faz intercambiáveis. Permite que o algoritmo varie independentemente dos clientes que o utilizam.
- Separa a regra de negócio de variações de algoritmos que possam existir.
- Define uma família de algoritmos cada uma com uma variação diferente.
- Permite a criação de vários algoritmos sem a necessidade de condicionais.