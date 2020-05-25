import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Engagement } from '../../interfaces/engagement';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit 
{
  @Output() searchResponse= new EventEmitter<Engagement>();

  private projectName: string= undefined;
  /* Temprary logic */
  private approvedIds: Engagement[]= 
  [
    { emgagementId: 2000, projectName: 'Pegasus', projectCode: 'MCU-1980P2012', managerName: 'Wendy Lawson'},
    { emgagementId: 2004, projectName: 'Goliath', projectCode: 'MCU-G', managerName: 'Hank Pym'},
    { emgagementId: 2006, projectName: 'Red Room', projectCode: 'MCU-1930P2016', managerName: 'Taskmaster'},
    { emgagementId: 2010, projectName: 'Tahiti', projectCode: 'MCU-2009T2014', managerName: 'Phil Coulson'},
    { emgagementId: 2016, projectName: 'Insight', projectCode: 'MCU-2014I', managerName: 'Alexander Pierce'},
    { emgagementId: 2017, projectName: 'Winter Soldier', projectCode: 'MCU-1940WS2016', managerName: 'Arnim Zola'},
    { emgagementId: 2020, projectName: 'Avengers Initiative', projectCode: 'MCU-1995AI2012', managerName: 'Nick Fury'},
    { emgagementId: 2024, projectName: 'Rebirth', projectCode: 'MCU-1943R', managerName: 'Abraham Erskine'},
    { emgagementId: 2030, projectName: 'Ultron', projectCode: 'MCU-2013U2015', managerName: 'Anthony Howard Stark'},
    { emgagementId: 2050, projectName: 'Manhattan', projectCode: 'MCU-1940M', managerName: 'Howard Stark'},
  ];
  private searchResults: {index: number, projectName: string}[]= [];

  constructor() { }

  ngOnInit() 
  {
  }



  //Search 
  search(projectName: String)
  {
    const inputSearch= projectName.toLowerCase();
    console.log('inputSearch: '+inputSearch);

    if(inputSearch.length> 0)
    {
      this.searchResults= [];

      for(let index= 0; index< this.approvedIds.length; index++)
      {
        const projectName= this.approvedIds[index].projectName.toLowerCase();

        if(projectName.includes(inputSearch))
        {
          const searchOutput= { index: index, projectName: this.approvedIds[index].projectName}
          this.searchResults.push(searchOutput);
        }
      }

      console.log('searchResults: '+this.searchResults.length);
    }
    else
    {
      this.searchResults= [];
      console.log('else: '+this.searchResults.length);
    }
    
  }

  onSelectSearchResult(result:  {index: number, projectName: string})
  {
    this.projectName= result.projectName;
    console.log('selected project: index: '+result.index+' projectName: '+result.projectName)
    this.searchResults= [];

      setTimeout(() => 
      {
        this.searchResponse.emit(this.approvedIds[result.index]);
      }, 10); 
  }
}
