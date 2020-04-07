package org.wcci.apimastery;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.Model.UserSubmission;
import org.wcci.apimastery.Repositories.UserSubmissionRepository;
import org.wcci.apimastery.Storage.SubmissionStorage;



@Component
public class Populator implements CommandLineRunner {
  @Autowired
  UserSubmissionRepository userSubmissionRepository;


  @Override
    public void run(String... args) throws Exception{
      UserSubmission testSubmission = new UserSubmission(1,2,3,"","","","","","","","");
      userSubmissionRepository.save(testSubmission);
  }



}


