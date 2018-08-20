import {Label}  from './Label';
import {CheckList} from './CheckList';

export class Note{
  Id : number;
  Title : string;
  Message : string;
  CheckList : CheckList[];
  Label : Label[];
  Pinned : boolean;


}

