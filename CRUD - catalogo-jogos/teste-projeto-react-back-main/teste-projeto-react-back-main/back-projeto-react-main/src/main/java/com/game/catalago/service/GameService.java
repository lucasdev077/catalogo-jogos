
package com.game.catalago.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.game.catalago.entity.GameEntity;
import com.game.catalago.repository.GameRepository;

@Service
public class GameService {

    @Autowired
    private GameRepository repo;

    public List<GameEntity> listarTodos() {
        return repo.findAll();
    }

    public GameEntity salvar(GameEntity Game) {
        return repo.save(Game);
    }

    public GameEntity buscarPorId(Long id) {
        return repo.findById(id).orElse(null);
    }

    public void deletar(Long id) {
    	repo.deleteById(id);
    }
}


