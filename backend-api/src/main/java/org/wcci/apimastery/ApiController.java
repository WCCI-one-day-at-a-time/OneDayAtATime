package org.wcci.apimastery;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.wcci.apimastery.Repositories.ResponseRepository;

import java.util.HashMap;


public class ApiController {
    private ResponseRepository responseRepository;



@GetMapping("/lowResponse/{emotion}")
    public LowResponse retrieveLowResponseEndPoint(@PathVariable String emotion){
    return responseRepository
}






//@GetMapping("/medResponse/{emotion}")
//
//
//@GetMapping("/highResponse/{emotion}")

}
