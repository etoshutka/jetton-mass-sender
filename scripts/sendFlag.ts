import { Address, toNano } from 'ton-core';
import { JettonDistributor } from '../wrappers/JettonDistr';
import { NetworkProvider } from '@ton-community/blueprint';

// Адрес развернутого контракта 
const MASS_SENDER_ADDRESS = 'EQAULvVBdseFWTtx6_eyIsY_kof6-62KQRJAONHyL6Pwg7PT';

export async function run(provider: NetworkProvider) {
    const massSenderAddress = Address.parse(MASS_SENDER_ADDRESS);
    const massSender = provider.open(JettonDistributor.createFromAddress(massSenderAddress));

    console.log(`Initiating sending process for MassSender at ${MASS_SENDER_ADDRESS}`);

    // Отправляем флаг ready_to_send
    await massSender.sendStartSending(provider.sender(), 
    { value : toNano("0.1") })
    console.log('Start sending initiated.');
}