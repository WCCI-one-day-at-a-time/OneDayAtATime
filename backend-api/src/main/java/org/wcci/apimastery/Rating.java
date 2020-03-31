package org.wcci.apimastery;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Rating {
    @Id
    @GeneratedValue
    private Long id;
    private String lowRating;
    private String medRating;
    private String highRating;

    protected Rating (){

    }
    public Rating (Long id){
        this.id = id;
    }


}
