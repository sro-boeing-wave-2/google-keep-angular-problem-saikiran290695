import {Label}  from './Label';
import {CheckList} from './CheckList';

export class Note{
  Id : number;
  Title : string;
  Message : string;
  IsPinned : boolean;
  Label : Label[];
  CheckList : CheckList[];
}

