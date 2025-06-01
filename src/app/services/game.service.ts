import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../interfaces/game';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class GameService {
    private apiUrl = `${environment.apiUrl}/game`;

    constructor(private http: HttpClient) {}

    criarJogo(game: Game): Observable<Game> {
        const { id, ...gameData } = game;
        
        const gameToSend = {
            ...gameData,
            releaseDate: game.releaseDate instanceof Date ? game.releaseDate.toISOString().split('T')[0] : game.releaseDate
        };
        
        return this.http.post<Game>(`${this.apiUrl}/criar`, gameToSend);
    }

    listarJogos(): Observable<Game[]> {
        return this.http.get<Game[]>(`${this.apiUrl}/listar`);
    }

    deletarJogo(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/deletar/${id}`);
    }
}