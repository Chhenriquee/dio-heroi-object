// Definição da classe Heroi
class Heroi {
    // Construtor da classe Heroi com nome, idade e tipo
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para o herói atacar
    atacar() {
        let ataque;
        // Determinar o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        // Exibir a mensagem de ataque
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando um objeto herói
const heroi = new Heroi("Hero", 25, "mago");

// Chamando o método atacar do herói
heroi.atacar();
