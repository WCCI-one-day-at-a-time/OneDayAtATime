package org.wcci.apimastery;

import javafx.print.Collation;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.Collection;

@Entity
public class Response {
    @Id
    @GeneratedValue
    private Long id;

    protected Response(){

    }



}
