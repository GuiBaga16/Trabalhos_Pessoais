public class Player {
    private String nome;
    private String classe;
    private int vida;
    private int mana;
    private int forca;

    private int nivel;
    private int xp;
    private int xpParaProximoNivel;

    public Player(String nome, int classeEscolhida) {
        this.nome = nome;
        this.nivel = 1;
        this.xp = 0;
        this.xpParaProximoNivel = 50;

        switch (classeEscolhida) {
            case 1:
                this.classe = "Guerreiro";
                this.vida = 130;
                this.mana = 30;
                this.forca = 20;
                break;

            case 2:
                this.classe = "Mago";
                this.vida = 100;
                this.mana = 80;
                this.forca = 10;
                break;

            case 3:
                this.classe = "Arqueiro";
                this.vida = 110;
                this.mana = 50;
                this.forca = 10;
                break;

            case 4:
                this.classe = "Ladrão";
                this.vida = 100;
                this.mana = 40;
                this.forca = 15;
                break;

            default:
                this.classe = "Aventureiro";
                this.vida = 115;
                this.mana = 50;
                this.forca = 15;
                break;
        }
    }

    public int atacar() {
        return forca;
    }

    public void receberDano(int dano) {
        vida -= dano;
        if (vida < 0) vida = 0;
    }

    public boolean estaVivo() {
        return vida > 0;
    }

    public String getNome() {
        return nome;
    }

    public int getVida() {
        return vida;
    }

    public int getMana() {
        return mana;
    }

    public int getNivel() {
        return nivel;
    }

    public int getXp() {
        return xp;
    }

    public int getXpParaProximoNivel() {
        return xpParaProximoNivel;
    }

    public int usarHabilidade() {
        switch (classe) {
            case "Guerreiro":
                if (mana >= 10) {
                    mana -= 10;
                    System.out.println(getNome() + " usou EXECUTAR!");
                    return forca * 2;
                } else {
                    System.out.println("Mana insuficiente!");
                    return 0;
                }

            case "Mago":
                if (mana >= 15) {
                    mana -= 15;
                    System.out.println(getNome() + " lançou ESFERAS DE GELO!");
                    return forca * 3;
                } else {
                    System.out.println("Mana insuficiente!");
                    return 0;
                }

            case "Arqueiro":
                if (mana >= 10) {
                    mana -= 10;
                    System.out.println(getNome() + " disparou RAJADA DE FLECHAS!");
                    // Dano de dois ataques consecutivos
                    int danoTotal = forca * 2;
                    System.out.println("Flecha 1: " + forca + " de dano");
                    System.out.println("Flecha 2: " + forca + " de dano");
                    return danoTotal;
                } else {
                    System.out.println("Mana insuficiente!");
                    return 0;
                }

            case "Ladrão":
                if (mana >= 15) {
                    mana -= 15;
                    System.out.println(getNome() + " usou ATAQUE FURTIVO!");
                    return forca * 2;
                } else {
                    System.out.println("Mana insuficiente!");
                    return 0;
                }

            default:
                System.out.println("Classe sem habilidade especial.");
                return 0;
        }
    }

    public void ganharXP(int quantidade) {
        System.out.println(nome + " ganhou " + quantidade + " de XP!");
        xp += quantidade;

        while (xp >= xpParaProximoNivel) {
            subirNivel();
        }
    }

    private void subirNivel() {
        xp -= xpParaProximoNivel;
        nivel++;
        xpParaProximoNivel += 50;

        vida += 20;
        mana += 10;
        forca += 5;

        System.out.println("⚡ " + nome + " SUBIU PARA O NÍVEL " + nivel + "!");
        System.out.println("→ Vida, mana e força foram aumentadas!");
    }

    public void mostrarStatus() {
        System.out.println(" === Mostrando Status ===");
        System.out.println("Nome: " + nome);
        System.out.println("Classe: " + classe);
        System.out.println("Nível: " + nivel);
        System.out.println("XP: " + xp + " / " + xpParaProximoNivel);
        System.out.println("Vida: " + vida);
        System.out.println("Mana: " + mana);
        System.out.println("Força: " + forca);
        System.out.println("=========================");
    }

}
