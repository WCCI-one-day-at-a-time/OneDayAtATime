package org.wcci.apimastery;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Response {
    @Id
    @GeneratedValue
    private Long id;


}
