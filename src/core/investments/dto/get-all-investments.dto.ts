export type getAllInvestmentsDtoOutput = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
  totalExpenses: number;
  totalEarnings: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
