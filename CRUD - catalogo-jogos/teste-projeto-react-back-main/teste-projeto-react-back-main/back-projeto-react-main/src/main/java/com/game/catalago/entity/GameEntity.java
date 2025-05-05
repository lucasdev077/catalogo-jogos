package com.game.catalago.entity;

import com.game.catalago.dto.GameDTO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "tb_game")
public class GameEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // ID gerado automaticamente pelo banco de dados

    private Long rawgId;  // rawgId será um campo adicional para referência à API RAWG
    private String image;
    private String name;
    private String description;
    private int rating;

    public GameEntity() { }

    public GameEntity(Long rawgId, String image, String name, String description, int rating) {
        this.rawgId = rawgId;
        this.image = image;
        this.name = name;
        this.description = description;
        this.rating = rating;
    }

    public void updatedDTO(GameDTO dto) {
        this.image = dto.image();
        this.name = dto.name();
        this.description = dto.description();
        this.rating = dto.rating();
    }

    // Getters e Setters
    public Long getRawgId() {
        return rawgId;
    }

    public void setRawgId(Long rawgId) {
        this.rawgId = rawgId;
    }

    // Outros getters e setters...

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}
  
    
}
    