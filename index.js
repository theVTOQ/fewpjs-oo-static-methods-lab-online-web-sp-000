class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-']+, '');
  }

  static titleize(string){
    const words = string.split(' ');
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const titleizedWords = words.map(word => {
      exceptions.forEach(exception => {
        if(word === exception){
            return word[0].toLowerCase() + word.slice(1);
        }
      });
      return this.capitalize(word);
    });
    return titleizedWords.join(' ');
  }
}
