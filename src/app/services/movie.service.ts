import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  moviesEndPoint = 'https://localhost:7088/api/Movies';

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.moviesEndPoint);
  }

  // deleteMovie(movieId: number) {
  //   this.httpClient.delete(this.moviesEndPoint, { movieId });
  // }
}
