export class CapitalizeWordsValueConverter  {
  toView(value) {
    return value.replace(/\b\w/g, l => l.toUpperCase());
  }
}
