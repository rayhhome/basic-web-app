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
  else {
    return "";
  }
}
