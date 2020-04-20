package org.wcci.apimastery.Model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class UserSubmission {
    @Id
    @GeneratedValue
    private Long id;
private int month;

    private int day;
    private int year;

    private String anxious;
    private String depressed;
    private String sad;
    private String lonely;
    private String exhausted;
    private String angry;
    private String overwhelmed;
    private String rejected;
    private String note;

    public UserSubmission() {
    }

    public UserSubmission(int month, int day, int year, String anxious, String depressed, String sad, String lonely, String exhausted, String angry, String overwhelmed, String rejected, String note) {
        this.month = month;
        this.day = day;
        this.year = year;
        this.anxious = anxious;
        this.depressed = depressed;
        this.sad = sad;
        this.lonely = lonely;
        this.exhausted = exhausted;
        this.angry = angry;
        this.overwhelmed = overwhelmed;
        this.rejected = rejected;
        this.note = note;
    }

    public String getNote() {
        return note;
    }

    public int getDay() {
        return day;
    }

    public int getMonth() {
        return month;
    }

    public int getYear() {
        return year;
    }

    public String getAnxious() {
        return anxious;
    }

    public String getDepressed() {
        return depressed;
    }

    public String getSad() {
        return sad;
    }

    public String getLonely() {
        return lonely;
    }

    public String getExhausted() {
        return exhausted;
    }

    public String getAngry() {
        return angry;
    }

    public String getOverwhelmed() {
        return overwhelmed;
    }

    public String getRejected() {
        return rejected;
    }

    public Long getId() {
        return id;
    }
}
