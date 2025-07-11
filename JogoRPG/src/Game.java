
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Game {
    private Scanner scanner = new Scanner(System.in);
    private List<Player> timeJogador = new ArrayList<>();

    public void start() {
        escreverComDelay("=== Bem-vindo ao RPG ===", 30);

        while (true) {
            System.out.print("1 - Novo Jogo\n");
            System.out.println("2 - Sair\n");
            System.out.println("Escolha: ");

            int escolha = scanner.nextInt();
            scanner.nextLine();

            if (escolha == 1) {
                novoJogo();
            } else if (escolha == 2) {
                escreverComDelay("Saindo...", 30);
                break;
            } else {
                escreverComDelay("Opção inválida.", 30);
            }
        }
    }

    public void novoJogo() {
        escreverComDelay("=== Criação de Personagem ===", 30);
        escreverComDelay("Você vai criar 2 personagens para começar...", 30);

        timeJogador.clear();

        for (int i = 0; i < 2; i++) {
            escreverComDelay("Escolha o nome do personagem " + (i + 1) + ": ", 30);
            String nome = scanner.nextLine();

            int classeEscolhida = 0;

            escreverComDelay("Escolha uma classe: ", 30);
            System.out.println("1 - Guerreiro");
            System.out.println("2 - Mago");
            System.out.println("3 - Arqueiro");
            System.out.println("4 - Ladrão");

            while (true) {
                System.out.println("Escolha o número da classe: ");

                if (scanner.hasNextInt()) {
                    classeEscolhida = scanner.nextInt();
                    scanner.nextLine();

                    if (classeEscolhida >= 1 && classeEscolhida <= 4) {
                        break;
                    } else {
                        escreverComDelay("Classe inválida.", 30);
                    }

                } else {
                    escreverComDelay("Digite um número válido.", 30);
                    scanner.nextLine();
                }
            }

            Player novoPersonagem = new Player(nome, classeEscolhida);
            timeJogador.add(novoPersonagem);
            escreverComDelay("\nPersonagem criado com sucesso!", 30);
            novoPersonagem.mostrarStatus();
        }

        iniciarBatalha();
    }


    private void escreverComDelay(String texto, long delayPorLetra) {
        for (char letra : texto.toCharArray()) {
            System.out.print(letra); // escreve uma letra sem pular linha
            try {
                Thread.sleep(delayPorLetra); // pausa entre as letras
            } catch (InterruptedException e) {
                e.printStackTrace(); // caso aconteça algum erro com a Thread
            }
        }
        System.out.println(); // pula linha depois que terminar o texto
    }


    private Player proximoPersonagemVivo(List<Player> time) {
        for (Player p : time) {
            if (p.estaVivo()) {
                return p;
            }
        }
        return null; // ninguém vivo
    }

    public Enemy gerarInimigoAleatorio() {

        int escolha = (int) (Math.random() * 3); // gera 0, 1 ou 2

        switch (escolha) {
            case 0:
                return new Enemy("Goblin", 100, 10);
            case 1:
                return new Enemy("Slime", 90, 8);
            case 2:
                return new Enemy("Lobo", 120, 15);
            default:
                return new Enemy("Rato", 30, 4);
        }

    }

    private Player trocarPersongem(List<Player> time) {
        System.out.println("=== Trocar Personagem ===");
        for (int i = 0; i < time.size(); i++) {
            Player p = time.get(i);
            System.out.println((i + 1) + " - " + p.getNome() + " (Vida: " + p.getVida() + ")");
        }

        int escolha = 0;

        while (true) {
            System.out.print("Escolha o número do personagem: ");
            if (scanner.hasNextInt()) {
                escolha = scanner.nextInt();
                scanner.nextLine();
                if (escolha >= 1 && escolha <= time.size()) {
                    return time.get(escolha - 1);
                }
            }
            System.out.println("Escolha invalida!");
            scanner.nextLine();
        }


    }


    public void iniciarBatalha() {
        System.out.println("\n");
        escreverComDelay("=== Iniciando Batalhas ===", 30);

        int totalBatalhas = 5;

        for (int i = 0; i < totalBatalhas; i++) {
            Player jogadorAtivo = proximoPersonagemVivo(timeJogador);
            if (jogadorAtivo == null) {
                escreverComDelay("Todos os personagens foram derrotados...", 30);
                break;
            }

            escreverComDelay("\n-- Batalha " + (i + 1) + " de " + totalBatalhas + " --", 30);

            Enemy enemy = gerarInimigoAleatorio();
            escreverComDelay("Um inimigo apareceu!", 30);
            escreverComDelay(">> " + enemy.getNome() + " <<", 40);
            System.out.println("------------------------------");

            while (jogadorAtivo.estaVivo() && enemy.estaVivo()) {
                System.out.println("\n-- Turno do JOGADOR! --\n");

                System.out.println(jogadorAtivo.getNome() + " (Vida: " + jogadorAtivo.getVida() + ") VS " + enemy.getNome() + " (Vida: " + enemy.getVida() + ")");
                System.out.println("\nEscolha uma ação:");
                System.out.println("1- Atacar");
                System.out.println("2- Usar Habilidade");
                System.out.println("3- Trocar de personagem");
                System.out.println("4- Fugir");

                int escolha = scanner.nextInt();
                scanner.nextLine();

                if (escolha == 1) {
                    int dano = jogadorAtivo.atacar();
                    enemy.receberDano(dano);
                    escreverComDelay("Jogador " + jogadorAtivo.getNome() + " atacou com sucesso!", 25);
                    escreverComDelay("Jogador causou " + dano + " de dano!", 25);

                } else if (escolha == 2) {
                    System.out.println("Mana: " + jogadorAtivo.getMana());
                    int dano = jogadorAtivo.usarHabilidade();
                    if (dano > 0) {
                        enemy.receberDano(dano);
                    }

                } else if (escolha == 3) {
                    jogadorAtivo = trocarPersongem(timeJogador);

                } else if (escolha == 4) {
                    escreverComDelay(jogadorAtivo.getNome() + " fugiu da batalha!", 30);
                    return; // Sai da função e encerra todas as batalhas
                } else {
                    escreverComDelay("Opção inválida!", 30);
                    continue;
                }

                if (!enemy.estaVivo()) {
                    escreverComDelay(jogadorAtivo.getNome() + " derrotou " + enemy.getNome() + "!", 30);

                    int xpGanha = enemy.getVida() + enemy.getForca();
                    jogadorAtivo.ganharXP(xpGanha);

                    break;
                }

                System.out.println("\n-- Turno do INIMIGO! --\n");

                int danoInimigo = enemy.getForca();
                jogadorAtivo.receberDano(danoInimigo);
                escreverComDelay("Inimigo " + enemy.getNome() + " atacou com sucesso!", 25);
                escreverComDelay("Inimigo causou " + danoInimigo + " de dano!", 25);

                if (!jogadorAtivo.estaVivo()) {
                    escreverComDelay(enemy.getNome() + " derrotou " + jogadorAtivo.getNome() + "!", 30);

                    Player proximo = proximoPersonagemVivo(timeJogador);
                    if (proximo != null) {
                        escreverComDelay("Um novo herói entra na batalha...", 30);
                        escreverComDelay(proximo.getNome() + " entra na batalha!", 40);
                        jogadorAtivo = proximo;
                        System.out.println("-----------------------------------");
                        System.out.println(jogadorAtivo.getNome() + " (Vida: " + jogadorAtivo.getVida() + ")");
                        System.out.println("Contra: " + enemy.getNome() + " (Vida: " + enemy.getVida() + ")");
                        System.out.println("-----------------------------------");
                    } else {
                        escreverComDelay("Todos os personagens foram derrotados...", 30);
                        break;
                    }
                }
            }

            escreverComDelay("== Fim da Batalha " + (i + 1) + " ==\n", 50);
        }

        escreverComDelay("== FIM DAS BATALHAS! ==", 50);
    }

}
