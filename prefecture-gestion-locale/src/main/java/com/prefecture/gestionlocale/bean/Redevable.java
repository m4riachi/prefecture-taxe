package com.prefecture.gestionlocale.bean;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.prefecture.gestionlocale.bean.validator.enumClass.RedevableType;
import com.prefecture.gestionlocale.util.validator.ValueOfEnum;

import java.util.List;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
public class Redevable{
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull
	private String nom;

	@NotNull
	private String cin;

	private RedevableType type;


	@OneToMany(mappedBy = "redevable")
	@JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
	private List<Locale> locaux;

	public Redevable() {
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

	public RedevableType getType() {
		return type;
	}

	public void setType(RedevableType type) {
		this.type = type;
	}

	public String getCin() {
		return cin;
	}

	public void setCin(String cin) {
		this.cin = cin;
	}

	public List<Locale> getLocaux() {
		return locaux;
	}

	public void setLocaux(List<Locale> locaux) {
		this.locaux = locaux;
	}

}
