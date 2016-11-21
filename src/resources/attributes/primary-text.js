export class PrimaryTextCustomAttribute {
  static inject = [Element];

  constructor(element) {
    this.element = element;
    this.element.style.color = 'red';
    this.element.style.fontFamily = 'Verdana, sans-serif';
    this.element.style.fontSize = '26px';
    this.element.style.fontWeight = 'bolder';
  }
}
