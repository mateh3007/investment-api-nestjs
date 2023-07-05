// import { ShareEntity, shareProps } from '../../entity/share.entity';
// import { CreateShareUseCase } from './create-share.use-case';
// import { ShareRepositoryInMemory } from '../../../../infra/db/shares/test/share.repository-in-memory';
// describe('Share use-case', () => {
//   it('Should able create a share by use-case', async () => {
//     const shareProps: shareProps = {
//       symbol: 'TEST',
//       openingPrice: 30,
//       totalQuotas: 10,
//     };

//     const repository = new ShareRepositoryInMemory();
//     const share = new ShareEntity(shareProps);
//     const useCase = new CreateShareUseCase(repository);
//     const output = useCase.handle(share);
//     console.log(output);
//   });
// });
