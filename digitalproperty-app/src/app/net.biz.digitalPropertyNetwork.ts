import {Asset} from './org.hyperledger.composer.system';
import {Participant} from './org.hyperledger.composer.system';
import {Transaction} from './org.hyperledger.composer.system';
import {Event} from './org.hyperledger.composer.system';
// export namespace net.biz.digitalPropertyNetwork{
   export class LandTitle extends Asset {
      titleId: string;
      owner: Person;
      information: string;
      forSale: boolean;
   }
   export class SalesAgreement extends Asset {
      salesId: string;
      buyer: Person;
      seller: Person;
      title: LandTitle;
   }
   export class Person extends Participant {
      personId: string;
      firstName: string;
      lastName: string;
   }
   export class RegisterPropertyForSale extends Transaction {
      seller: Person;
      title: LandTitle;
   }
// }
