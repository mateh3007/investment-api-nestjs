export type updateInvestmentDtoInput = {
  FII?: string;
  initialValue?: number;
  numberOfShares?: number;
};

export type updateInvestmentDtoOutput = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
  totalExpenses: number;
  totalEarnings: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
