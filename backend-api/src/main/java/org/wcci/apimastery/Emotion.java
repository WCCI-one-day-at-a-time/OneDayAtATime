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
    private String lowRating;
    private String medRating;
    private String highRating;

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    protected Emotion (){

    }



    public Emotion(String name){
        this.name = name;
    }




}
