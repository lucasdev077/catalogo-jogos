package com.game.catalago.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.game.catalago.dto.GameDTO;
import com.game.catalago.entity.GameEntity;
import com.game.catalago.repository.GameRepository;
import com.game.catalago.service.GameService;

@CrossOrigin(origins = "*")@RestController
@RequestMapping("/Game")
public class GameController {

    @Autowired
    private GameService gameService;

    @Autowired
    private GameRepository repo;

    // Listar todos os jogos
    @GetMapping("/listar")
    public List<GameEntity> listar() {
        return gameService.listarTodos();
    }

    // Criar um novo jogo
    @PostMapping("/criar")
    public ResponseEntity<GameEntity> criar(@RequestBody GameDTO dto) {
        GameEntity entidade = new GameEntity();
        entidade.setRawgId(dto.rawgId()); // Mapeia o rawgId
        entidade.setName(dto.name());
        entidade.setImage(dto.image());
        entidade.setDescription(dto.description());
        entidade.setRating(dto.rating());  // Mapeia o rating

        // Salva a entidade no banco de dados
        GameEntity salvo = gameService.salvar(entidade);
        return new ResponseEntity<>(salvo, HttpStatus.CREATED);
    }

    // Buscar um jogo por ID
    @GetMapping("/listar/{id}")
    public ResponseEntity<GameEntity> buscarPorId(@PathVariable Long id) {
        GameEntity entidade = gameService.buscarPorId(id);
        return entidade != null
            ? ResponseEntity.ok(entidade)
            : ResponseEntity.notFound().build();
    }

    // Atualizar informações de um jogo
    @PutMapping("/atualizar/{id}")
    public ResponseEntity<GameEntity> atualizar(
        @PathVariable Long id,
        @RequestBody GameDTO dto
    ) {
        // Busca o jogo no banco de dados
        GameEntity game = repo.findById(id)
            .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Jogo não encontrado"));

        // Atualiza o jogo com as informações do DTO, incluindo o rating e rawgId
        game.updatedDTO(dto);

        // Salva o jogo atualizado
        GameEntity atualizado = repo.save(game);
        return ResponseEntity.ok(atualizado);
    }

    // Deletar um jogo pelo ID
    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        gameService.deletar(id);
        return ResponseEntity.noContent().build();
    }
}

		
