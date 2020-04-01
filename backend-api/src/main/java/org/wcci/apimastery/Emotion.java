package org.wcci.apimastery;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;

@Entity
public class Emotion {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    @ManyToMany(mappedBy = "emotion")
    private Collection<Rating> rating;

    protected Emotion (){

    }
    public Emotion(String name, Collection<Rating> rating){

        this.name = name;
        this.rating = rating;


    }

}
