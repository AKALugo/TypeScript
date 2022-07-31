/**
 * Función que devuelve el valor de la letra que le pasemos por parámetro.
 * @param letra cadena que contiene una letra romana.
 * @returns número decimal equivalente al valor de la letra.
 */
function relacionLetraValor(letra: string): number {
  switch (letra) {
    case "M":
      return 1000;
    case "D":
      return 500;
    case "C":
      return 100;
    case "L":
      return 50;
    case "X":
      return 10;
    case "V":
      return 5;
    case "I":
      return 1;
    default:
      return -1;
  }
}

/**
 * Función que convierte un numero romano en decimal.
 * @param roman cadena que contiene un número romano.
 * @returns número decimal.
 */
export function romanToDecimal(roman: string): number {
  let valor: number = 0;
  let ultimoValor: number = 0;
  let resultado: number = 0;
  
  for (let size: number = 0; size < roman.length; size++) {  
    valor = relacionLetraValor(roman.charAt(size));
    resultado += valor;

    if (valor > ultimoValor) {
      resultado -= 2 * ultimoValor;
    }

    ultimoValor = valor;
  }
  return resultado;
}

/**
 * Función que convierte un numero decimal en romano.
 * @param roman numero decimal.
 * @returns numero romano.
 */
export function decimalToRoman(roman: number): string {
  const cadena: string = roman.toString();

  const vectorM: string[] = ["M", "MM", "MMM"];
  const vectorC: string[] = ["C", "CC", "CCC", "CD", "D", 
    "DC", "DCC", "DCCC", "CM"];
  const vectorD: string[] = ["X", "XX", "XXX", "XL", "L", 
    "LX", "LXX", "LXXX", "XC"];
  const vectorU: string[] = ["I", "II", "III", "IV", "V",
    "VI", "VII", "VIII", "IX"];

  switch (cadena.length) {
    case 1:
      return vectorU[parseInt(cadena.charAt(0)) -1];
    case 2:
      return vectorD[parseInt(cadena.charAt(0)) -1] + 
             vectorU[parseInt(cadena.charAt(1)) -1];
    case 3:
      return vectorC[parseInt(cadena.charAt(0)) -1] + 
             vectorD[parseInt(cadena.charAt(1)) -1] + 
             vectorU[parseInt(cadena.charAt(2)) -1];
    default:
      return vectorM[parseInt(cadena.charAt(0)) -1] + 
             vectorC[parseInt(cadena.charAt(1)) -1] + 
             vectorD[parseInt(cadena.charAt(2)) -1] + 
             vectorU[parseInt(cadena.charAt(3)) -1];
  }
}
