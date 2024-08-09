import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { UpesiWallet } from '../target/types/upesi_wallet';

describe('upesi_wallet', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.UpesiWallet as Program<UpesiWallet>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
