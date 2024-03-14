export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  else if (query.toLowerCase().includes("andrew id")) {
    return (
      "Your Andrew ID is andrewc."
    )
  }
  else if (query.toLowerCase().includes("your name")) {
    return (
      "rayhello0"
    )
  }
  else if (query.toLowerCase().includes("plus")) {
    const words = query.toLowerCase().split(" ");
    const int1 = parseInt(words[2]);
    const secondintwithbang = words[4].split("?");
    const int2 = parseInt(secondintwithbang[0]);
    return (
      (int1 + int2).toString()
    )
  }
  else if (query.toLowerCase().includes("largest")) {
    const sections = query.toLowerCase().split(",");
    const words = sections[0].split(" ");
    const int1 = parseInt(words[8]);
    const int2 = parseInt(sections[1]);
    const thirdintwithbang = sections[2].split("?");
    const int3 = parseInt(thirdintwithbang[0]);
    if (int1 > int2 && int1 > int3) {
      return (
        int1.toString()
      )
    }
    else if (int2 > int1 && int2 > int3) {
      return (
        int2.toString()
      )
    }
    else {
      return (
        int3.toString()
      )
    }
  }
  else if (query.toLowerCase().includes("multiplied")) {
    const words = query.toLowerCase().split(" ");
    const int1 = parseInt(words[2]);
    const secondintwithbang = words[5].split("?");
    const int2 = parseInt(secondintwithbang[0]);
    return (
      (int1 * int2).toString()
    )
  }
  else if (query.toLowerCase().includes("a square and a cube")) {
    // https://stackoverflow.com/questions/30919111/whats-the-best-way-in-javascript-to-test-if-a-given-parameter-is-a-square-numbe
    let isSquare = function (n: number) {
      return n > 0 && Math.sqrt(n) % 1 === 0;
    };
    let isCube = function (n: number) {
      return n > 0 && Math.cbrt(n) % 1 === 0;
    };
    const setions = query.toLowerCase().split(",");
    const words = setions[0].split(" ");
    const int1 = parseInt(words[12]); 
    const int2 = parseInt(setions[1]);
    const int3 = parseInt(setions[2]);
    const int4 = parseInt(setions[3]);
    const int5 = parseInt(setions[4]);
    const int6 = parseInt(setions[5]);
    const seventhintwithbang = setions[6].split("?");
    const int7 = parseInt(seventhintwithbang[0]);

    if (isSquare(int1) && isCube(int1)) {
      return (
        int1.toString()
      )
    } else if (isSquare(int2) && isCube(int2)) {
      return (
        int2.toString()
      )
    } else if (isSquare(int3) && isCube(int3)) {
      return (
        int3.toString()
      )
    } else if (isSquare(int4) && isCube(int4)) {
      return (
        int4.toString()
      )
    } else if (isSquare(int5) && isCube(int5)) {
      return (
        int5.toString()
      )
    } else if (isSquare(int6) && isCube(int6)) {
      return (
        int6.toString()
      )
    } else {
      return (
        int7.toString()
      )
    }

  }
  else {
    return "";
  }
}
