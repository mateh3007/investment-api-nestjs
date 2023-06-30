export type shareProps = {
  symbol: string;
  openingPrice: number;
  totalQuotas: number;
};

export class ShareEntity {
  public symbol: string;
  public openingPrice: number;
  public totalQuotas: number;
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

  toJSON(): ShareEntity {
    return { ...this };
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
