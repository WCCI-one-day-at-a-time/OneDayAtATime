package org.wcci.apimastery;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.wcci.apimastery.Model.UserSubmission;
import org.wcci.apimastery.Repositories.UserSubmissionRepository;
//import org.wcci.apimastery.Storage.SubmissionStorage;



@Component
public class Populator implements CommandLineRunner {
  @Autowired
  UserSubmissionRepository userSubmissionRepository;


  @Override
  public void run(String... args) throws Exception {

    UserSubmission testSubmission1 = new UserSubmission(4, 2, 2020, "high", "low", "med", "low", "med", "high", "high", "low", "Had midterms today");
  userSubmissionRepository.save(testSubmission1);
    UserSubmission testSubmission2 = new UserSubmission(4, 3, 2020, "med", "high", "low", "low", "med", "low", "med", "med", "Rough day");
      userSubmissionRepository.save(testSubmission2);
    UserSubmission testSubmission3 = new UserSubmission(4, 4, 2020, "low", "low", "low", "low", "low", "low", "low", "low", "No one was home");
      userSubmissionRepository.save(testSubmission3);
    UserSubmission testSubmission4 = new UserSubmission(4, 5, 2020, "med", "low", "low", "med", "med", "med", "med", "low", "Just a long day");
      userSubmissionRepository.save(testSubmission4);
    UserSubmission testSubmission5 = new UserSubmission(4, 6, 2020, "low", "low", "low", "low", "low", "low", "low", "low", "Making to-do lists");
      userSubmissionRepository.save(testSubmission5);
    UserSubmission testSubmission6 = new UserSubmission(4, 7, 2020, "low", "med", "med", "low", "med", "high", "med", "low", "Monday after a browns game");
      userSubmissionRepository.save(testSubmission6);
     UserSubmission testSubmission7 = new UserSubmission(4, 8, 2020, "low", "low", "low", "low", "low", "low", "low", "low", "Went to the park with a friend");
      userSubmissionRepository.save(testSubmission7);
}


}


