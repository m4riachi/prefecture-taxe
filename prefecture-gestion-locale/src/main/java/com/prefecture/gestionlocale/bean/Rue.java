package com.prefecture.gestionlocale.bean;

import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Rue{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull
	@Size(min = 2)
	private String nom;

	@ManyToOne
	@NotNull
	private Quartier quartier;

	@OneToMany(mappedBy = "rue")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private List<Locale> locaux;

	public Rue() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Quartier getQuartier() {
		return quartier;
	}

	public void setQuartier(Quartier quartier) {
		this.quartier = quartier;
	}

	public List<Locale> getLocaux() {
		return locaux;
	}

	public void setLocaux(List<Locale> locaux) {
		this.locaux = locaux;
	}

}
