/**
 * Función que pasa una cadena en formato SnakeCase a formato CamelCase.
 * @param snake cadena en formato SnakeCase
 * @returns cadena en formato CamelCase.
 */
export function fromSnakeToCamelCase(snake: string): string {
  let camel: string = "";

  for (let size: number = 0; size < snake.length; size++) {
    if (snake.charAt(size) === "_") {
      size++;
      camel += snake.charAt(size).toUpperCase();
    } else {
      camel += snake.charAt(size);
    }
  }

  return camel;
}

/**
 * Función que pasa una cadena en formato CamelCase a formato SnakeCase.
 * @param camel cadena en formato CamelCase
 * @returns cadena en formato SnakeCase.
 */
export function fromCamelToSnakeCase(camel: string): string {
  let snake: string = "";
  
  for (let size: number = 0; size < camel.length; size++) {
    if (camel.charAt(size) === camel.charAt(size).toUpperCase()) {
      snake += "_" + camel.charAt(size).toLowerCase();
    } else {
      snake += camel.charAt(size);
    }
  }

  return snake;
}
