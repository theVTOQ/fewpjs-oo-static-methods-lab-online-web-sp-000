class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^a-zA-Z-' ]/g, "");
  }

  static titleize(string){
    const words = string.split(' '); // .map(word => word.toLowerCase());
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const titleizedWords = [this.capitalize(words[0])];

    words.slice(1).forEach(word => {
      let matchFound = false;
      exceptions.forEach(exception => {
        if(word === exception){
            titleizedWords.push(word);
            matchFound = true;
        }
      });
      if(!matchFound){
        titleizedWords.push(this.capitalize(word));
      }
    });
    return titleizedWords.join(' ');
  }
}
