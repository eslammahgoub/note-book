import { Utils } from '@models/utils';
import { Entry } from '@models/entry.model';

export class EntryItem implements Entry {
  id: string;
  note: string;
  date: string;

  constructor(note: string, date: Date) {
    this.date = Utils.getFormattedDate(date);
    this.id = Utils.generateUUID();
    this.note = note;
  }

}
