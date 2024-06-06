import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[];
  showTable = false;

  constructor(private moviesService: MovieService) {
    this.movies = [];
  }

  ngOnInit(): void {
    this.moviesService
      .getMovies()
      .subscribe((response) => (this.movies = response));
  }
}
