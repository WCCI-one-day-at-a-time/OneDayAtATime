package org.wcci.apimastery;

import java.util.Collection;

public class HighResponse {
    private String contactInfo;

    public HighResponse(String contactInfo) {
        this.contactInfo = contactInfo;
    }

    public Collection<String> getContactInfo() {
        return contactInfo;
    }
}