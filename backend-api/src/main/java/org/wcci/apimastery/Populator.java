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
    UserSubmission testSubmission = new UserSubmission(1, 2, 3, "", "", "", "", "", "", "", "", "");
    userSubmissionRepository.save(testSubmission);

    UserSubmission testSubmission1 = new UserSubmission(4, 8, 2020, "high", "low", "med", "", "", "", "", "", "had midterms today");
  userSubmissionRepository.save(testSubmission1);
    UserSubmission testSubmission2 = new UserSubmission(4, 3, 2020, "med", "high", "low", "", "", "", "", "", "rough day");
      userSubmissionRepository.save(testSubmission2);
    UserSubmission testSubmission3 = new UserSubmission(4, 4, 2020, "", "", "", "low", "", "", "", "", "no one was home");
      userSubmissionRepository.save(testSubmission3);
    UserSubmission testSubmission4 = new UserSubmission(4, 5, 2020, "", "", "", "", "med", "", "", "", "just a long day");
      userSubmissionRepository.save(testSubmission4);
    UserSubmission testSubmission5 = new UserSubmission(4, 6, 2020, "", "", "", "", "", "", "low", "", "making to-do lists");
      userSubmissionRepository.save(testSubmission5);
    UserSubmission testSubmission6 = new UserSubmission(4, 7, 2020, "", "", "", "", "", "high", "", "", "monday after a browns game");
      userSubmissionRepository.save(testSubmission6);
     UserSubmission testSubmission7 = new UserSubmission(4, 8, 2020, "", "", "", "", "", "", "", "high", "got dumped");
      userSubmissionRepository.save(testSubmission7);
}


}


