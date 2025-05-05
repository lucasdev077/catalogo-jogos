package com.game.catalago.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.game.catalago.entity.GameEntity;

public interface GameRepository extends JpaRepository<GameEntity, Long> {
}
