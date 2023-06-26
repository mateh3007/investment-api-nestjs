export type getOneInvestmentDtoInput = {
  FII: string;
};

export type getOneInvestmentDtoOutput = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
  totalExpenses: number;
  totalEarnings: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
