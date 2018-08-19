import {Note} from './Note';

export let Notes : Note[] = [
    {
      Id:1,
      Title:"title-1",
      Message:"Message-1",
      Label:[{Label : "Label-1.1"},{Label :"Label-1.2"},{Label : "Label-1.3"}],
      CheckList : [{CheckList : "CheckList-1.1",IsChecked : false},{CheckList : "CheckList-1.2",IsChecked : false},{CheckList : "CheckList-1.3",IsChecked : false}],
      IsPinned : true
    },
    {
      Id:2,
      Title:"title-2",
      Message:"Message-2",
      Label:[{Label : "Label-2.1"},{Label :"Label-2.2"},{Label : "Label-2.3"}],
      CheckList : [{CheckList : "CheckList-2.1",IsChecked : false},{CheckList : "CheckList-2.2",IsChecked : false},{CheckList : "CheckList-2.3",IsChecked : false}],
      IsPinned : true
    },
    {
      Id:3,
      Title:"title-3",
      Message:"Message-3",
      Label:[{Label : "Label-3.1"},{Label :"Label-3.2"},{Label : "Label-3.3"}],
      CheckList : [{CheckList : "CheckList-3.1",IsChecked : false},{CheckList : "CheckList-3.2",IsChecked : false},{CheckList : "CheckList-3.3",IsChecked : false}],
      IsPinned : false
    }
  ];

