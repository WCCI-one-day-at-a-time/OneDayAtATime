package org.wcci.apimastery;

import java.util.Collection;

public class MedResponse {
    private String emotionName;

    public MedResponse(Collection<String> tools) {
        this.tools = tools;
    }
    public Collection<String> tools;

}