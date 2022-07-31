
/**
 * ___Función que convierte cadenas ADN en cadenas ARN___
 * @param adn Array que contiene cadenas ADN
 * @returns Array que contiene cadenas ARN
 */
export function adnToArn(adn: string[]): string[] | undefined {
  if (adn.length === 0) {
    return undefined;
  }

  const arn: string[] = [];
  let aux: string = "";
  for (let a = 0; a < adn.length; a++) {
    if (adn[a].length === 0) {
      return undefined;
    }
    aux = "";
    for (let c = 0; c < adn[a].length; c++) {
      switch (adn[a][c]) {
        case "A":
          aux += "U";
          break;
        case "C":
          aux += "G";
          break;
        case "G":
          aux += "C";
          break;
        case "T":
          aux += "A";
          break;
        default:
          return undefined;
      }
    }
    arn.push(aux);
  }

  return arn;
}

/**
 * ___Función que convierte cadenas ARN en cadenas ADN___
 * @param arn Array que contiene cadenas ARN
 * @returns Array que contiene cadenas ADN
 */
export function arnToAdn(arn: string[]): string[] | undefined {
  if (arn.length === 0) {
    return undefined;
  }
    
  const adn: string[] = [];
  let aux: string = "";
  for (let a = 0; a < arn.length; a++) {
    if (arn[a].length === 0) {
      return undefined;
    }
    aux = "";
    for (let c = 0; c < arn[a].length; c++) {
      switch (arn[a][c]) {
        case "U":
          aux += "A";
          break;
        case "G":
          aux += "C";
          break;
        case "C":
          aux += "G";
          break;
        case "A":
          aux += "T";
          break;
        default:
          return undefined;
      }
    }
    adn.push(aux);
  }
    
  return adn;
}
