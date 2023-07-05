export type shareProps = {
  symbol: Required<string>;
  openingPrice: Required<number>;
  totalQuotas: Required<number>;
};

export class ShareEntity {
  public symbol: Required<string>;
  public openingPrice: Required<number>;
  public totalQuotas: Required<number>;
  public totalOpeningPosition: number;

  constructor(data: shareProps) {
    this.symbol = data.symbol;
    this.openingPrice = data.openingPrice;
    this.totalQuotas = data.totalQuotas;
    this.totalOpeningPosition = this.totalQuotas * this.openingPrice;
  }

  updateSymbol(data: string) {
    this.symbol = data;
  }

  updateOpeningPrice(data: number) {
    this.openingPrice = data;
    this.totalOpeningPosition = this.openingPrice * this.totalQuotas;
  }

  updateTotalQuotas(data: number) {
    this.totalQuotas = data;
    this.totalOpeningPosition = this.openingPrice * this.totalQuotas;
  }

  toJSON() {
    return {
      symbol: this.symbol,
      openingPrice: this._openingPrice,
      totalQuotas: this.totalQuotas,
      totalOpeningPosition: this.totalOpeningPosition,
    };
  }

  get _symbol(): string {
    return this.symbol;
  }

  private set _symbol(data: string) {
    this.symbol = data;
  }

  get _openingPrice(): number {
    return this.openingPrice;
  }

  private set _openingPrice(data: number) {
    this.openingPrice = data;
  }

  get _totalQuotas(): number {
    return this.totalQuotas;
  }

  private set _totalQuotas(data: number) {
    this.totalQuotas = data;
  }

  get _totalOpeningPosition(): number {
    return this.totalOpeningPosition;
  }
}
