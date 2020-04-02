package org.wcci.apimastery;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.wcci.apimastery.Repositories.ResponseRepository;

import java.util.Collection;
import java.util.Collections;

public class Populator implements CommandLineRunner {

    @Autowired
    private ResponseRepository responseRepository;


    @Override
    public void run(String... args) throws Exception{
        Response lowResponse = new Response();
        responseRepository.save(lowResponse);
        Response medResponse = new Response();
        responseRepository.save(medResponse);
        Response highResponse = new Response();
        responseRepository.save(highResponse);
    }


}
