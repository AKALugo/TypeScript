/**
 * ___Función que suvisa los píxeles de una imagen___
 * @param img Array bidimensional de numbers que contiene los
 * píxeles de una imagen.
 * @returns Arra bidimensional de numbers que coniene los
 * píxeles de una imagen suavisada.
 */
export function mediaFilter(img: number[][]): number[][] | undefined {
  if (img.length < 3 || img[0].length < 3) {
    return undefined;
  }

  for (let mov = 1; mov < img.length; mov++) {
    if (img[mov].length !== img[0].length) {
      return undefined;
    }
  }

  let newImg: number[][] = [];
  let sum: number = 0;
  let mov: number[] = [];
  let aux: number[] = [];

  for (let movArray = 0; movArray < img.length; movArray++) {
    for (let movPixel = 0; movPixel < img[movArray].length; movPixel++) {
      if (movPixel - 1 < 0) {
        mov.push(img[movArray].length - 1);
      } else {
        mov.push(movPixel - 1);
      }

      if (movPixel + 1 === img[movArray].length) {
        mov.push(0);
      } else {
        mov.push(movPixel + 1);
      }

      if (movArray - 1 < 0) {
        mov.push(img.length - 1);
      } else {
        mov.push(movArray - 1);
      }

      if (movArray + 1 === img.length) {
        mov.push(0);
      } else {
        mov.push(movArray + 1);
      }

      if (img[movArray][mov[0]] < 0 || img[movArray][mov[0]] > 255) {
        return undefined;
      }
      if (img[movArray][mov[1]] < 0 || img[movArray][mov[1]] > 255) {
        return undefined;
      }
      if (img[mov[2]][movPixel] < 0 || img[mov[2]][movPixel] > 255) {
        return undefined;
      }
      if (img[mov[3]][movPixel] < 0 || img[mov[3]][movPixel] > 255) {
        return undefined;
      }
      
      if (img[mov[2]][mov[0]] < 0 || img[mov[2]][mov[0]] > 255) {
        return undefined;
      }
      if (img[mov[2]][mov[1]] < 0 || img[mov[2]][mov[1]] > 255) {
        return undefined;
      }
      if (img[mov[3]][mov[0]] < 0 || img[mov[3]][mov[0]] > 255) {
        return undefined;
      }
      if (img[mov[3]][mov[1]] < 0 || img[mov[3]][mov[1]] > 255) {
        return undefined;
      }

      sum = img[movArray][mov[0]] + img[movArray][mov[1]] + 
            img[mov[2]][movPixel] + img[mov[3]][movPixel];
      sum += img[mov[2]][mov[0]] + img[mov[2]][mov[1]] + 
             img[mov[3]][mov[0]] + img[mov[3]][mov[1]];
      aux.push(sum / 8 | 0);
    }
    newImg.push(aux);
    aux = [];
  }

  return newImg;
}
