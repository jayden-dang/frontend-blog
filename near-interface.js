export class Contract {
  constructor({ contractId, walletToUse }) {
    this.contractId = contractId;
    this.wallet = walletToUse;
  }

  async get_all_tokens() {
    return await this.wallet.viewMethod({
      contractId: this.contractId,
      method: "get_all_tokens",
    });
  }

  async mint_nft() {
    return await this.wallet.callMethod({
      contractId: this.contractId,
      method: "mint_nft",
      args: {
        token_owner_id,
        name: token_name,
        description,
        media_uri,
        level,
      },
    });
  }
}
