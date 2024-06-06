import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-details-viewer',
  templateUrl: './details-viewer.component.html',
  styleUrls: ['./details-viewer.component.scss'],
})
export class DetailsViewerComponent implements OnInit {
  searchTerm: string = '';
  wikiUrl: SafeResourceUrl | null = null;
  isContentLoading: boolean = true;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => (this.searchTerm = params['searchDetails'])
    );
    const encodedSearchTerm = encodeURIComponent(this.searchTerm);
    const url = `https://en.wikipedia.org/wiki/${encodedSearchTerm}`;
    this.wikiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  contentHasLoaded() {
    this.isContentLoading = false;
  }
}
