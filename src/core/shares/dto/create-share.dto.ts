export type createShareDtoInput = {
  symbol: string;
  openingPrice: number;
  totalQuotas: number;
};

export type createShareDtoOutput = {
  symbol: string;
  openingPrice: number;
  totalQuotas: number;
  totalOpeningPosition: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

export type createShareDtoOutputUseCase = {
  symbol: string;
  openingPrice: number;
  totalQuotas: number;
  currentPrice: number;
  capitalGain: number;
  totalCapitalGain: number;
  totalOpeningPosition: number;
  totalCurrentPosition: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};
