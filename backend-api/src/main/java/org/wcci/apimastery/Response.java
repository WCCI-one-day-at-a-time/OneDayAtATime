package org.wcci.apimastery;

import javafx.print.Collation;

import javax.persistence.*;
import java.net.CookieHandler;
import java.util.Collection;

@Entity
public class Response {
    @Id
    @GeneratedValue
    private Long id;
    private String rating;

    private Collection<String> lowResponse;
    private Collection<String> medResponse;
    private Collection<String> highResponse;

    protected Response() {

    }

    public Response(String... lowResponse, String... medResponse,String... highResponse) {
        this.rating = rating;
    }

    public Long getId() {
        return id;
    }

    public String getRating() {
        return rating;
    }

    public Collection<>
}


