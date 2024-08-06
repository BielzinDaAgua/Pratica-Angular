import { Component, OnInit } from '@angular/core';
import { Art } from '../../models/art.model';
import { ArtService } from '../../services/art.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-art-form',
  templateUrl: './art-form.component.html',
  styleUrls: ['./art-form.component.scss']
})
export class ArtFormComponent implements OnInit {
  art: Art = new Art(0, '', '', 0, '');
  isEdit: boolean = false;

  constructor(
    private artService: ArtService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const art = this.artService.getById(+id);
      if (art) {
        this.art = art;
        this.isEdit = true;
      }
    }
  }

  saveArt(): void {
    if (this.isEdit) {
      this.artService.update(this.art);
    } else {
      this.artService.add(this.art);
    }
    this.router.navigate(['/arts']);
  }
}
