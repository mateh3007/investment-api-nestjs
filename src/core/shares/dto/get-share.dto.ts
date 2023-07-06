export type getShareDtoInput = {
  symbol: string;
};

export type getShareDtoOutput = {
  symbol: string;
  openingPrice: number;
  totalQuotas: number;
  totalOpeningPosition: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

export type getShareDtoOutputUseCase = {
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
