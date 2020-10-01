package com.prefecture.gestionlocale.bean;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonFormat.Shape;

@Entity
public class Locale {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@NotNull
	private String nom;

	@NotNull
	@Size(min = 15, max = 15)
	private String ice;

	private int dernierTrimestreTaxeBoisson;
	private int dernierAnneeTaxeBoisson;

	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(shape = Shape.STRING, pattern = "yyyy-MM-dd")
	@NotNull
	private Date dateCreation;

	@Temporal(TemporalType.TIMESTAMP)
	@JsonFormat(shape = Shape.STRING, pattern = "yyyy-MM-dd")
	private Date dateFermeture;

	@ManyToOne
	@NotNull
	private Rue rue;

	@ManyToOne
	@NotNull
	private Redevable redevable;

	@ManyToOne
	@NotNull
	private Categorie categorie;

	public Locale() {
		super();
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

	public Date getDateCreation() {
		return dateCreation;
	}

	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public Date getDateFermeture() {
		return dateFermeture;
	}

	public void setDateFermeture(Date dateFermeture) {
		this.dateFermeture = dateFermeture;
	}

	public Rue getRue() {
		return rue;
	}

	public void setRue(Rue rue) {
		this.rue = rue;
	}

	public Redevable getRedevable() {
		return redevable;
	}

	public void setRedevable(Redevable redevable) {
		this.redevable = redevable;
	}

	public Categorie getCategorie() {
		return categorie;
	}

	public void setCategorie(Categorie categorie) {
		this.categorie = categorie;
	}

	public int getDernierTrimestreTaxeBoisson() {
		return dernierTrimestreTaxeBoisson;
	}

	public void setDernierTrimestreTaxeBoisson(int dernierTrimestreTaxeBoisson) {
		this.dernierTrimestreTaxeBoisson = dernierTrimestreTaxeBoisson;
	}

	public int getDernierAnneeTaxeBoisson() {
		return dernierAnneeTaxeBoisson;
	}

	public void setDernierAnneeTaxeBoisson(int dernierAnneeTaxeBoisson) {
		this.dernierAnneeTaxeBoisson = dernierAnneeTaxeBoisson;
	}

	public String getIce() {
		return ice;
	}

	public void setIce(String ice) {
		this.ice = ice;
	}
}
