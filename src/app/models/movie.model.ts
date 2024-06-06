export class Movie {
  id: number;
  name: string;
  actorName: string;
  actressName: string;

  constructor(id: number, name: string, actorName: string, actress: string) {
    this.id = id;
    this.name = name;
    this.actorName = actorName;
    this.actressName = actress;
  }
}
