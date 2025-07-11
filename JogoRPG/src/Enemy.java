public class Enemy {
    private String nome;
    private int vida;
    private int forca;
    private int mana;

    public Enemy(String nome, int vida, int forca) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
    }

//    public int usarHabilidade() {
//        switch () {
//            case "Guerreiro":
//                if (mana >= 10) {
//                    mana -= 10;
//                    System.out.println(getNome() + " usou EXECUTAR!");
//                    return forca * 2;
//                } else {
//                    System.out.println("Mana insuficiente!");
//                    return 0;
//                }
//
//            case "Mago":
//                if (mana >= 15) {
//                    mana -= 15;
//                    System.out.println(getNome() + " lançou ESFERAS DE GELO!");
//                    return forca * 3;
//                } else {
//                    System.out.println("Mana insuficiente!");
//                    return 0;
//                }
//
//            case "Arqueiro":
//                if (mana >= 10) {
//                    mana -= 10;
//                    System.out.println(getNome() + " disparou RAJADA DE FLECHAS!");
//                    // Dano de dois ataques consecutivos
//                    int danoTotal = forca * 2;
//                    System.out.println("Flecha 1: " + forca + " de dano");
//                    System.out.println("Flecha 2: " + forca + " de dano");
//                    return danoTotal;
//                } else {
//                    System.out.println("Mana insuficiente!");
//                    return 0;
//                }
//
//            case "Ladrão":
//                if (mana >= 15) {
//                    mana -= 15;
//                    System.out.println(getNome() + " usou ATAQUE FURTIVO!");
//                    return forca * 2;
//                } else {
//                    System.out.println("Mana insuficiente!");
//                    return 0;
//                }
//
//            default:
//                System.out.println("Classe sem habilidade especial.");
//                return 0;
//        }
//    }

    public void receberDano(int dano) {
        vida -= dano;
        if (vida < 0) vida = 0;
    }

    public boolean estaVivo() {
        return vida > 0;
    }

    public int getForca() {
        return forca;
    }

    public String getNome() {
        return nome;
    }

    public int getVida() {
        return vida;
    }
}
