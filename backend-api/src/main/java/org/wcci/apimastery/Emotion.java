package org.wcci.apimastery;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

@Entity
public class Emotion {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Rating rating;
    @ManyToMany(mappedBy = "Emotion")
    private Collection<Rating> rating;

    protected Emotion (){

    }
    public Emotion(String name, Rating rating){

        this.name = name;
        this.rating = rating;


    }

}
