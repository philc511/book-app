import { NotExpr } from '../../node_modules/@angular/compiler';

export interface Contact {
  firstName: string;
  surname: string;
  relationship: string;
  phoneMain: string;
  phoneOther: string;
  email: string;
  preferences: string;
  postcode: string;
}

export interface Note {
    dateReceived: string;
    title: string;
    evidence: string;
    comment: string;
}

export class ClaimData {
    policyNumber: string;
    deathCertficateReference: string;
    deathCertficateType: string;
    dateOfDeath: string;
    countryOfDeath: string;
    placeOfDeath: string;
    cause1a: string;
    cause1b: string;
    cause1c: string;
    cause2: string;
    causeOther: string;
    notes: Note[] = [{} as Note];
    contacts: Contact[] = [{} as Contact];

    getCurrentNote(): Note {
      return this.notes[this.notes.length - 1];
    }

    getCurrentContact(): Contact {
      return this.contacts[this.contacts.length - 1];
    }
}
