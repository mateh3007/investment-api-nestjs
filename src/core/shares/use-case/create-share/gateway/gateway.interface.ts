export abstract class IGateway {
  abstract braipRequest(data: string): Promise<any>;
}
