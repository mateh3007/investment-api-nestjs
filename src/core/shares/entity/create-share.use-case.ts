import {  createShareDtoOutput } from '../dto/create-share.dto';
import { ShareEntity } from './share.entity';
import { IUserRepository } from './share.irepository';

export class CreateShareUseCase {
  constructor(private readonly repository: IUserRepository) {}
  async handle(data: ShareEntity): Promise<createShareDtoOutput> {
    return await this.repository.create(data);
  }
}
