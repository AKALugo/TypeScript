/**
 * ___Interfaz de un tablero básico___
 */
interface TableroBasico {
  tablero: number[][];
}

/**
 * @class TableroConecta4 clase que simula el tablero de Conecta 4 con
 * todo lo que ello implica, meter fichas, comprobar quién ha ganado ....
 * 
 */
export class TableroConecta4 implements TableroBasico {
  /**
   * @param tablero Matriz de numeros que simula el tablero
   * @param fichasFila Array de tuplas de [number, number] que
   * cuenta cuantas fichas de cada tipo hay en una fila.
   * @param fichasColumnas Array de tuplas de [number, number] que
   * cuenta cuantas fichas de cada tipo hay en una columna.
   * @param columnaLlena Array de tuplas de number 0 si no se ha llenado
   * 1 si se ha llenado y -1 si está llena y ya se ha revisado.
   * @param filaLlena Array de tuplas de number 0 si no se ha llenado
   * 1 si se ha llenado y -1 si está llena y ya se ha revisado.
   * @param fila Número filas.
   * @param columnas Números de columnas.
   */
  tablero: number[][] = [];

  private fichasFila: [number, number][] = [];
  private fichasColumnas: [number, number][] = [];

  private columnaLlena: number[] = [];
  private filaLlena: number[] = [];

  private fila: number = 6;
  private columnas: number = 7;
  
  /**
   * ___Constructor de la clase que inicializa todos los atributos___
   */
  constructor() {
    let auxTablero: number[] = [];
    for (let f = 0; f < this.fila; f++) {
      for (let c = 0; c < this.columnas; c++) {
        auxTablero.push(0);
      }
      this.tablero.push(auxTablero);
      auxTablero = [];
    }
    
    this.fichasColumnas = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], 
      [0, 0], [0, 0]];
    this.fichasFila = [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], 
      [0, 0]];
    
    this.columnaLlena = [0, 0, 0, 0, 0, 0, 0];
    this.filaLlena = [0, 0, 0, 0, 0, 0];
  }

  /**
   * ___Metodo que imprime las columnas disponibles para insertar fichas___
   */
  columnasDisponibles(): string {
    let aux: string = "";
    console.log("Las columnas libres son:");
    for (let c = 0; c < this.columnas; c++) {
      if (!this.columnaLlena[c]) {
        aux += `${c + 1}` + ", ";
      }
    }
    console.log(aux.substring(0, aux.length - 2));
    return aux.substring(0, aux.length - 2);
  }

  /**
   * ___Método que inserta una ficha en una columna___
   * @param col columna donde se va a insertar la ficha
   * @param valor ficha a insertar.
   * @returns true si la ficha se puede insertar, false si no.
   */
  colocarFicha(col: number, valor: number): boolean {
    if (col > 6 || col < 0) {
      console.log("EL VALOR DE LA COLUMNA ES INCORRECTO");
      return false;
    }
    // Si la columna no está llena.
    if (this.columnaLlena[col] === 0) {
      for (let f = this.fila - 1; f >= 0; f--) {
        // Cuando encontremos un hueco
        if (this.tablero[f][col] === 0) {
          this.tablero[f][col] = valor;
          // Aumentamos el conteo de fichas en la fila y la columna que se insertó.
          if (valor === 1) {
            this.fichasFila[f][0]++;
            this.fichasColumnas[col][0]++;
          } else {
            this.fichasFila[f][1]++;
            this.fichasColumnas[col][1]++;
          }
          
          // Si la columna se llena al insertar la ficha.
          if ((this.fichasColumnas[col][0] + this.fichasColumnas[col][1]) === 6) {
            this.columnaLlena[col] = 1;
          }
          
          // Si la fila se llena al insertar la ficha.
          if ((this.fichasFila[f][0] + this.fichasFila[f][1]) === 7) {
            this.filaLlena[f] = 1;
          }
          break;
        }
      }
      return true;
      // Si en esa columna no se puede insertar la ficha.
    } else {
      console.log("LA COLUMNA ESTÁ LLENA, PRUEBE CON:");
      let aux: string = "";

      // Mostramos las columnas disponibles.
      for (let c = 0; c < this.columnas; c++) {
        if (!this.columnaLlena[c]) {
          aux += `${c + 1}` + ", ";
        }
      }
      console.log(aux.substring(0, aux.length - 2));
      return false;
    }
  }

  /**
   * ___Método que comprueba quién ha ganado___
   * @returns 0 si no se ha encontrado ganador, de lo contario retornla ficha
   * del ganador
   */
  comprobarGanador(): number {
    // Miramos las filas
    for (let f = 0; f < this.fila; f++) {
      // Si hay 4 o más fichas de algún tipo.
      if (this.filaLlena[f] !== -1 && (this.fichasFila[f][0] >= 4 || this.fichasFila[f][1]) >= 4) {
        for (let c = 0; c <= 3; c++) {
          if (this.tablero[f][c] === this.tablero[f][c + 1] && this.tablero[f][c] === 
              this.tablero[f][c + 2] && this.tablero[f][c] === this.tablero[f][c + 3]) {
            return this.tablero[f][c];
          }
        }
      }
      // Si está llena y ya la hemos revisado.
      if (this.filaLlena[f] === 1) {
        // Así no la volvemos a revisar nunca más
        this.filaLlena[f] = -1;
      }
    }

    // Miramos las columnas.
    for (let c = 0; c < this.columnas; c++) {
      // Si hay 4 o más fichas del mismo tipo
      if (this.columnaLlena[c] !== -1 && (this.fichasColumnas[c][0] >= 4 || this.fichasColumnas[c][1]) >= 4) {
        for (let f = 0; f <= 2; f++) {
          if (this.tablero[f][c] === this.tablero[f + 1][c] && this.tablero[f][c] === 
              this.tablero[f + 2][c] && this.tablero[f][c] === this.tablero[f + 3][c]) {
            return this.tablero[f][c];
          }
        }
      }
      // Si está llena y ya la hemos revisado.
      if (this.columnaLlena[c] === 1) {
        // Así no la volvemos a revisar nunca más
        this.columnaLlena[c] = -1;
      }
    }
    let f1 = 2;
    let f2 = 3;
    let c = 0;
    let auxF1 = 0;
    let auxF2 = 0;
    let auxC = 0;

    // Empezamos de izquierda a derecha del tablero a revisar las diagonales.
    while (c !== 4) {
      auxF1 = f1;
      auxF2 = f2;
      auxC = c;

      while (auxF1 <= 2 && auxC <= 3) {
        if (this.tablero[auxF1][auxC] !== 0 && this.tablero[auxF1][auxC] === 
            this.tablero[auxF1 + 1][auxC + 1] && this.tablero[auxF1][auxC] === 
            this.tablero[auxF1 + 2][auxC + 2] && this.tablero[auxF1][auxC] ===
            this.tablero[auxF1 + 3][auxC + 3]) {
          return this.tablero[auxF1][auxC];
        }
        if (this.tablero[auxF2][auxC] !== 0 && this.tablero[auxF2][auxC] === 
            this.tablero[auxF2 - 1][auxC + 1] && this.tablero[auxF2][auxC] === 
            this.tablero[auxF2 - 2][auxC + 2] && this.tablero[auxF2][auxC] ===
            this.tablero[auxF2 - 3][auxC + 3]) {
          return this.tablero[auxF2][auxC];
        }
        auxF2--;
        auxF1++;
        auxC++;
      }
      if (f1 === 0) {
        c++;
      }
      if (f1 > 0) {
        f1--;
      }
      if (f2 < 5) {
        f2++;
      }
    }
    
    return 0;
  }

  /**
   * ___Imprimimos el tablero___
   */
  print() {
    console.log(`
    |${this.tablero[0][0]} ${this.tablero[0][1]} ${this.tablero[0][2]} ${this.tablero[0][3]} ${this.tablero[0][4]} ${this.tablero[0][5]} ${this.tablero[0][6]}|
    |${this.tablero[1][0]} ${this.tablero[1][1]} ${this.tablero[1][2]} ${this.tablero[1][3]} ${this.tablero[1][4]} ${this.tablero[1][5]} ${this.tablero[1][6]}|
    |${this.tablero[2][0]} ${this.tablero[2][1]} ${this.tablero[2][2]} ${this.tablero[2][3]} ${this.tablero[2][4]} ${this.tablero[2][5]} ${this.tablero[2][6]}|
    |${this.tablero[3][0]} ${this.tablero[3][1]} ${this.tablero[3][2]} ${this.tablero[3][3]} ${this.tablero[3][4]} ${this.tablero[3][5]} ${this.tablero[3][6]}|
    |${this.tablero[4][0]} ${this.tablero[4][1]} ${this.tablero[4][2]} ${this.tablero[4][3]} ${this.tablero[4][4]} ${this.tablero[4][5]} ${this.tablero[4][6]}|
    |${this.tablero[5][0]} ${this.tablero[5][1]} ${this.tablero[5][2]} ${this.tablero[5][3]} ${this.tablero[5][4]} ${this.tablero[5][5]} ${this.tablero[5][6]}|
    ---------------\n\n`);
  }
}

const tablero = new TableroConecta4();

tablero.print();
