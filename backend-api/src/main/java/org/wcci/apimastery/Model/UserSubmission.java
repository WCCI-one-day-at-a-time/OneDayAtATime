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

    private String anxiousResponse;
    private String depressedResponse;
    private String sadResponse;
    private String lonelyResponse;
    private String exhaustedResponse;
    private String angryResponse;
    private String overwhelmedResponse;
    private String rejectedResponse;

    public UserSubmission() {
    }

    public UserSubmission(int month, int day, int year, String anxiousResponse, String depressedResponse, String sadResponse, String lonelyResponse, String exhaustedResponse, String angryResponse, String overwhelmedResponse, String rejectedResponse) {
        this.month = month;
        this.day = day;
        this.year = year;
        this.anxiousResponse = anxiousResponse;
        this.depressedResponse = depressedResponse;
        this.sadResponse = sadResponse;
        this.lonelyResponse = lonelyResponse;
        this.exhaustedResponse = exhaustedResponse;
        this.angryResponse = angryResponse;
        this.overwhelmedResponse = overwhelmedResponse;
        this.rejectedResponse = rejectedResponse;
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

    public String getAnxiousResponse() {
        return anxiousResponse;
    }

    public String getDepressedResponse() {
        return depressedResponse;
    }

    public String getSadResponse() {
        return sadResponse;
    }

    public String getLonelyResponse() {
        return lonelyResponse;
    }

    public String getExhaustedResponse() {
        return exhaustedResponse;
    }

    public String getAngryResponse() {
        return angryResponse;
    }

    public String getOverwhelmedResponse() {
        return overwhelmedResponse;
    }

    public String getRejectedResponse() {
        return rejectedResponse;
    }

    public Long getId() {
        return id;
    }
}
