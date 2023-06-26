export type CreateInvestmentDtoInput = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
};

export type CreateInvestmentDtoOutput = {
  FII: string;
  initialValue: number;
  numberOfShares: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
