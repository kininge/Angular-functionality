import { Component, OnInit } from '@angular/core';
import { Table } from '../../interfaces/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit 
{
  private table: Table= 
  {
    serialNumber: false,
    removeButton: false,
    searchBox: true,
    pagination: true,
    tableLabels: ['Year',	'Physics', 'Chemistry', 'Physiology or Medicine',	'Literature',	'Peace',	'Economics'],
    tableData: 
    [
      { year: 1901,	physics: "Wilhelm Röntgen",	chemistry: "Jacobus Henricus van 't Hoff",	physiologyOrMedicine: "Emil Adolf von Behring",	literature: "Sully Prudhomme",	peace: "Henry Dunant, Frédéric Passy", economics: "—"},
      { year: 1902,	physics: "Hendrik Lorentz, Pieter Zeeman",	chemistry: "Hermann Emil Fischer",	physiologyOrMedicine: "Ronald Ross",	literature: "Theodor Mommsen",	peace: "Élie Ducommun, Charles Albert Gobat", economics: "—"},
      { year: 1903,	physics: "Henri Becquerel, Pierre Curie, Marie Curie",	chemistry: "Svante Arrhenius",	physiologyOrMedicine: "Niels Ryberg Finsen",	literature: "Bjørnstjerne Bjørnson",	peace: "Randal Cremer", economics: "—"},
      { year: 1904,	physics: "Lord Rayleigh",	chemistry: "William Ramsay",	physiologyOrMedicine: "Ivan Pavlov",	literature: "Frédéric Mistral, José Echegaray",	peace: "Institut de Droit International", economics: "—"},
      { year: 1905,	physics: "Philipp Lenard",	chemistry: "Adolf von Baeyer",	physiologyOrMedicine: "Robert Koch",	literature: "Henryk Sienkiewicz",	peace: "Bertha von Suttner", economics: "—"},
      { year: 1906,	physics: "J. J. Thomson",	chemistry: "Henri Moissan",	physiologyOrMedicine: "Camillo Golgi, Santiago Ramón y Cajal",	literature: "Giosuè Carducci",	peace: "Theodore Roosevelt", economics: "—"},
      { year: 1907,	physics: "Albert Abraham Michelson",	chemistry: "Eduard Buchner",	physiologyOrMedicine: "Charles Louis Alphonse Laveran",	literature: "Rudyard Kipling",	peace: "Ernesto Teodoro Moneta, Louis Renault", economics: "—"},
      { year: 1908,	physics: "Gabriel Lippmann",	chemistry: "Ernest Rutherford",	physiologyOrMedicine: "Élie Metchnikoff, Paul Ehrlich",	literature: "Rudolf Christoph Eucken",	peace: "	Klas Pontus Arnoldson, Fredrik Bajer", economics: "—"},
      { year: 1909,	physics: "	Karl Ferdinand Braun, Guglielmo Marconi",	chemistry: "Wilhelm Ostwald",	physiologyOrMedicine: "Emil Theodor Kocher",	literature: "Selma Lagerlöf",	peace: "Auguste Marie François Beernaert, Paul-Henri-Benjamin d'Estournelles de Constant", economics: "—"},
      { year: 1910,	physics: "Johannes Diderik van der Waals",	chemistry: "Otto Wallach",	physiologyOrMedicine: "Albrecht Kossel",	literature: "Paul Heyse",	peace: "International Peace Bureau", economics: "—"},
      { year: 1911,	physics: "Wilhelm Wien",	chemistry: "Marie Skłodowska-Curie",	physiologyOrMedicine: "Allvar Gullstrand",	literature: "Maurice Maeterlinck",	peace: "Tobias Asser, Alfred Hermann Fried", economics: "—"},
      { year: 1912,	physics: "Gustaf Dalén",	chemistry: "Victor Grignard, Paul Sabatier",	physiologyOrMedicine: "Alexis Carrel",	literature: "Gerhart Hauptmann",	peace: "Elihu Root", economics: "—"},
      { year: 1913,	physics: "Heike Kamerlingh Onnes",	chemistry: "Alfred Werner",	physiologyOrMedicine: "Charles Richet",	literature: "Rabindranath Tagore",	peace: "	Henri La Fontaine", economics: "—"},
      { year: 1914,	physics: "Max von Laue",	chemistry: "Theodore William Richards",	physiologyOrMedicine: "Robert Bárány",	literature: undefined,	peace: undefined, economics: "—"},
      { year: 1915,	physics: "William Henry Bragg, William Lawrence Bragg",	chemistry: "Richard Willstätter",	physiologyOrMedicine: undefined,	literature: "Romain Rolland",	peace: undefined, economics: "—"},
      { year: 1916,	physics: undefined,	chemistry: undefined,	physiologyOrMedicine: undefined,	literature: "Sully Prudhomme",	peace: undefined, economics: "—"},
      { year: 1917,	physics: "Charles Glover Barkla",	chemistry: undefined,	physiologyOrMedicine: undefined,	literature: "Karl Adolph Gjellerup, Henrik Pontoppidan",	peace: "International Committee of the Red Cross", economics: "—"},
      { year: 1918,	physics: "Max Planck",	chemistry: "Fritz Haber",	physiologyOrMedicine: undefined,	literature: undefined,	peace: undefined, economics: "—"},
      { year: 1919,	physics: "Johannes Stark",	chemistry: undefined,	physiologyOrMedicine: "Jules Bordet",	literature: "Carl Spitteler",	peace: "Woodrow Wilson", economics: "—"},
      { year: 1920,	physics: "Charles Édouard Guillaume",	chemistry: "Walther Nernst",	physiologyOrMedicine: "August Krogh",	literature: "Knut Hamsun",	peace: "Léon Bourgeois", economics: "—"},
      { year: 1921,	physics: "Albert Einstein",	chemistry: "Frederick Soddy",	physiologyOrMedicine: undefined,	literature: "Anatole France",	peace: "Hjalmar Branting, Christian Lous Lange", economics: "—"},
      { year: 1922,	physics: "Niels Bohr",	chemistry: "Francis William Aston",	physiologyOrMedicine: "Archibald Hill, Otto Fritz Meyerhof",	literature: "Jacinto Benavente",	peace: "Fridtjof Nansen", economics: "—"},
      { year: 1923,	physics: "Robert Andrews Millikan",	chemistry: "Fritz Pregl",	physiologyOrMedicine: "Frederick Banting, John James Rickard Macleod",	literature: "W. B. Yeats",	peace: undefined, economics: "—"},
      { year: 1924,	physics: "Manne Siegbahn",	chemistry: undefined,	physiologyOrMedicine: "Willem Einthoven",	literature: "Władysław Reymont",	peace: undefined, economics: "—"},
      { year: 1925,	physics: "James Franck, Gustav Ludwig Hertz",	chemistry: "Richard Adolf Zsigmondy",	physiologyOrMedicine: undefined,	literature: "George Bernard Shaw",	peace: "Austen Chamberlain, Charles G. Dawes", economics: "—"},
      { year: 1926,	physics: "Jean Baptiste Perrin",	chemistry: "Theodor Svedberg",	physiologyOrMedicine: "Johannes Fibiger",	literature: "Grazia Deledda",	peace: "Aristide Briand, Gustav Stresemann", economics: "—"},
      { year: 1927,	physics: "Arthur Compton, Charles Thomson Rees Wilson",	chemistry: "Heinrich Otto Wieland",	physiologyOrMedicine: "Julius Wagner-Jauregg",	literature: "Henri Bergson",	peace: "Ferdinand Buisson, Ludwig Quidde", economics: "—"},
      { year: 1928,	physics: "Owen Willans Richardson",	chemistry: "Adolf Otto Reinhold Windaus",	physiologyOrMedicine: "Charles Nicolle",	literature: "Sigrid Undset",	peace: undefined, economics: "—"},
      { year: 1929,	physics: "Louis de Broglie",	chemistry: "Arthur Harden, Hans von Euler-Chelpin",	physiologyOrMedicine: "Christiaan Eijkman, Frederick Gowland Hopkins",	literature: "Thomas Mann",	peace: "Frank B. Kellogg", economics: "—"},
      { year: 1930,	physics: "C. V. Raman",	chemistry: "Hans Fischer",	physiologyOrMedicine: "Karl Landsteiner",	literature: "Sinclair Lewis",	peace: "Nathan Söderblom", economics: "—"},
      { year: 1931,	physics: undefined,	chemistry: "Carl Bosch, Friedrich Bergius",	physiologyOrMedicine: "Otto Heinrich Warburg",	literature: "	Erik Axel Karlfeldt",	peace: "Jane Addams, Nicholas Murray Butler", economics: "—"},
      { year: 1932,	physics: "Werner Heisenberg",	chemistry: "Irving Langmuir",	physiologyOrMedicine: "Charles Scott Sherrington, Edgar Adrian",	literature: "John Galsworthy",	peace: undefined, economics: "—"},
      { year: 1933,	physics: "Erwin Schrödinger, Paul Dirac",	chemistry: undefined,	physiologyOrMedicine: "Thomas Hunt Morgan",	literature: "Ivan Bunin",	peace: "Norman Angell", economics: "—"},
    ]
  };

  private filtring: boolean= false;
  private elementsOnPage: number= 5;
  private presentedData= [];
  private filteredData= [];
  private recordFrom: number= 1;
  private recordTill: number= this.recordFrom+ this.elementsOnPage- 1

  constructor() { }

  ngOnInit() 
  {
    if(this.table.pagination)
    {
      for(let index= 0; index< this.elementsOnPage; index++)
      {
        this.presentedData.push(this.table.tableData[index]);
      }
    }
    else
    {
      this.presentedData= this.table.tableData;
    }
    
  }

  applyFilter(event: Event) 
  {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase( );
    const filterlength= filterValue.length;

    if(filterlength> 0)
    {

      this.presentedData= [];
      this.filteredData= [];
      this.filtring= true;
      this.recordFrom= 1;

      for(let data of this.table.tableData)
      {
        const year= data.year.toString();
        const physics= data.physics? data.physics.toLowerCase( ): '';
        const chemistry= data.chemistry? data.chemistry.toLowerCase( ): '';
        const pom= data.physiologyOrMedicine? data.physiologyOrMedicine.toLowerCase( ): '';
        const literature= data.literature? data.literature.toLowerCase( ): '';
        const peace= data.peace? data.peace.toLowerCase( ): '';
        const economics= data.economics? data.economics: '';

        if((year.includes(filterValue)) || (physics.includes(filterValue)) || (chemistry.includes(filterValue)) || (pom.includes(filterValue)) 
        || (literature.includes(filterValue)) || (peace.includes(filterValue)) || (economics.includes(filterValue)))
        {
          this.filteredData.push(data);

          if(this.filteredData.length<= this.elementsOnPage)
          {
            this.presentedData.push(data);
          }
        }
      }
    }
    else
    {
      this.presentedData= [];
      this.filtring= false;
      this.recordFrom= 1;
      
      for(let index= 0; index< this.elementsOnPage; index++)
      {
        this.presentedData.push(this.table.tableData[index]);
      }
    }

    if(this.presentedData.length== 0)
    {
      this.recordFrom= 0;
      this.recordTill= 0;
    }
    else
    {
      this.recordTill= Number(this.recordFrom)+ Number(this.presentedData.length)- 1;
    }
  }

  alterPageSize(event: Event)
  {
    this.presentedData= [];
    this.recordFrom= 1;

    if(this.filtring)
    {
      for(let index= 0; index< this.elementsOnPage; index++)
      {
        if(index< this.filteredData.length)
        {
          this.presentedData.push(this.filteredData[index]);
        }
      }

    }
    else
    {
      for(let index= 0; index< this.elementsOnPage; index++)
      {
        if(index< this.table.tableData.length)
        {
          this.presentedData.push(this.table.tableData[index]);
        }
      }
    }

    this.recordTill= Number(this.recordFrom)+ Number(this.presentedData.length)- 1;
    
  }

  previousRecordsStatus(forWhat: string)
  {
    if(forWhat== 'color')
    {
      if(this.recordFrom== 1)
      {
        return 'gray';
      }
      else
      {
        return 'white';
      }
    }
    else
    {
      if(this.recordFrom== 1)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
  }

  previousRecords()
  {
    
    const startIndex= Number(this.recordFrom) - Number(this.elementsOnPage) -1
    this.recordFrom= startIndex+ 1;
    this.presentedData= []

    for(let index= 0; index< this.elementsOnPage; index++)
    {
      let index_= index+ startIndex
      
      if(this.filtring && (index_< this.filteredData.length))
      {
        this.presentedData.push(this.filteredData[index_])
      }
      else if( !this.filtring && (index_< this.table.tableData.length))
      {
        this.presentedData.push(this.table.tableData[index_])
      }
    }

    this.recordTill= startIndex+ Number(this.presentedData.length);
  }

  nextRecordsStatus(forWhat: string)
  {
    if(forWhat== 'color')
    {
      if(this.filtring)
      {
        if((this.recordTill)== this.filteredData.length)
        {
          return 'gray';
        }
        else
        {
          return 'white';
        }
      }
      else
      {
        if((this.recordTill)== this.table.tableData.length)
        {
          return 'gray';
        }
        else
        {
          return 'white';
        }
      }
    }
    else
    {
      if(this.filtring)
      {
        if((this.recordTill)== this.filteredData.length)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
      else
      {
        if((this.recordTill)== this.table.tableData.length)
        {
          return true;
        }
        else
        {
          return false;
        }
      }
    }
  }

  nextRecords()
  {
    const startIndex= this.recordTill 
    this.recordFrom= startIndex+ 1;
    this.presentedData= []

    for(let index= 0; index< this.elementsOnPage; index++)
    {
      let index_= index+ startIndex
      
      if(this.filtring && (index_< this.filteredData.length))
      {
        this.presentedData.push(this.filteredData[index_])
      }
      else if( !this.filtring && (index_< this.table.tableData.length))
      {
        this.presentedData.push(this.table.tableData[index_])
      }
    }

    this.recordTill= startIndex+ Number(this.presentedData.length);
  }
}
