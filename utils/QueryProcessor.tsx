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
    console.log(words);
    const secondintwithbang = words[4].split("?");
    const int2 = parseInt(secondintwithbang[0]);
    return (
      (int1 + int2).toString()
    )
  }
  else {
    return "";
  }
}
