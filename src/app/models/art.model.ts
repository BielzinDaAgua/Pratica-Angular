export class Art {
    id: number;
    title: string;
    artist: string;
    year: number;
    imageUrl: string;
  
    constructor(id: number, title: string, artist: string, year: number, imageUrl: string) {
      this.id = id;
      this.title = title;
      this.artist = artist;
      this.year = year;
      this.imageUrl = imageUrl;
    }
  }
  