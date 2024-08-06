import { Component, OnInit } from '@angular/core';
import { ArtService } from '../../services/art.service';
import { Art } from '../../models/art.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-art-list',
  templateUrl: './art-list.component.html',
  styleUrls: ['./art-list.component.scss']
})
export class ArtListComponent implements OnInit {
  arts: Art[] = [];

  constructor(private artService: ArtService, private router: Router) { }

  ngOnInit(): void {
    this.arts = this.artService.getAll();
  }

  editArt(id: number): void {
    this.router.navigate(['/arts/edit', id]);
  }

  deleteArt(id: number): void {
    this.artService.delete(id);
    this.arts = this.artService.getAll();
  }
}
