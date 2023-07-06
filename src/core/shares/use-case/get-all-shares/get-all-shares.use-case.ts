import { Injectable } from '@nestjs/common';
import { getShareDtoOutput } from '../../dto/get-share.dto';
import { IShareRepository } from '../../entity/share.irepository';

@Injectable()
export class GetAllSharesUseCase {
  constructor(private readonly repository: IShareRepository) {}

  async handle(): Promise<getShareDtoOutput[]> {
    const output = await this.repository.getAll();
    return output.map((item) => {
      return item;
    });
  }
}
