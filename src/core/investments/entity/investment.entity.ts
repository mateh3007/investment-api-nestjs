export type investmentProps = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
};

export class InvestmentEntity {
  public FII: string;
  public initialValue: number;
  public numberOfShares: number;
  public totalExpenses: number;
  public totalEarnings?: number;

  constructor(data: investmentProps) {
    this.FII = data.FII;
    this.initialValue = data.initialValue;
    this.numberOfShares = data.numberOfShares;
    this.totalExpenses = this.initialValue * this.numberOfShares;
    this.totalEarnings = 0;
  }

  updateFII(data: string) {
    this.FII = data;
  }

  updateInitialValue(data: number) {
    this.initialValue = data;
    this.totalExpenses = data * this.numberOfShares;
  }

  updateNumberOfShares(data: number) {
    this.numberOfShares = data;
    this.totalExpenses = data * this.initialValue;
  }

  toJSON(data: InvestmentEntity) {
    const { FII, initialValue, numberOfShares, totalExpenses } = data;
    return {
      FII,
      initialValue,
      numberOfShares,
      totalExpenses,
    };
  }

  get _FII(): string {
    return this.FII;
  }

  private set _FII(data: string) {
    this.FII = data;
  }

  get _initialValue(): number {
    return this.initialValue;
  }

  private set _initialValue(data: number) {
    this.initialValue = data;
  }

  get _numberOfShares(): number {
    return this.numberOfShares;
  }

  private set _numberOfShares(data: number) {
    this.numberOfShares = data;
  }

  get _finalValue(): number {
    return this.totalExpenses;
  }

  private set _finalValue(data: number) {
    this.totalExpenses = data;
  }

  get _totalEarnings(): number | undefined {
    return this.totalEarnings;
  }

  private set _totalEarnings(data: number) {
    this.totalEarnings = data;
  }
}
