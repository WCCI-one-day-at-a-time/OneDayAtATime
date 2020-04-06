package org.wcci.apimastery;

import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import org.wcci.apimastery.Model.UserSubmission;
import org.wcci.apimastery.Repositories.UserSubmissionRepository;
import org.wcci.apimastery.Storage.SubmissionStorage;

import java.util.Collection;
import java.util.Collections;



@Component
public class Populator implements CommandLineRunner {
  SubmissionStorage submissionStorage;

  public Populator(SubmissionStorage submissionStorage){
    this.submissionStorage = submissionStorage;

  }

  @Override
    public void run(String... args) {
      UserSubmission testSubmission = new UserSubmission();
     submissionStorage.store(testSubmission);
  }



}


