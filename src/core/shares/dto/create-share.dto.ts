export type createShareDtoInput = {
  symbol: string;
  openingPrice: number;
  totalQuotas: number;
};

export type createShareDtoOutput = {
  symbol: string;
  openingPrice: number;
  totalQuotas: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
