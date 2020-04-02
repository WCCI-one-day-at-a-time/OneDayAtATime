package org.wcci.apimastery;

import java.util.Collection;

public class LowResponse {
    private String instructions;

    public LowResponse(String instructions){
        this.instructions = instructions;

    }
    public Collection<String> getInstructions(){
        return instructions;

}


}
