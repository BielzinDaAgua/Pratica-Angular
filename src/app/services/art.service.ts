import { Injectable } from '@angular/core';
import { Art } from '../models/art.model';

@Injectable({
  providedIn: 'root'
})
export class ArtService {
  private arts: Art[] = [];
  private idCounter: number = 1;

  constructor() { }

  getAll(): Art[] {
    return this.arts;
  }

  getById(id: number): Art | undefined {
    return this.arts.find(art => art.id === id);
  }

  add(art: Art): void {
    art.id = this.idCounter++;
    this.arts.push(art);
  }

  update(art: Art): void {
    const index = this.arts.findIndex(a => a.id === art.id);
    if (index !== -1) {
      this.arts[index] = art;
    }
  }

  delete(id: number): void {
    this.arts = this.arts.filter(art => art.id !== id);
  }
}
