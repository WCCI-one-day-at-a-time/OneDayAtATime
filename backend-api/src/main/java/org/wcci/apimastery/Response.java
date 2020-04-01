package org.wcci.apimastery;

import javafx.print.Collation;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class Response {
    @Id
    @GeneratedValue
    private Long id;
    private String rating;



    protected Response(){

    }


    public Response (Long id, String rating){
        this.id = id;
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public String getRating() {
        return rating;
    }
}
