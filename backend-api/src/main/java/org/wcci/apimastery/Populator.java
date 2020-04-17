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

    UserSubmission testSubmission1 = new UserSubmission(4, 13, 2020, "high", "low", "med", "low", "med", "high", "high", "low", "I feel like the world is agaisnt me");
      userSubmissionRepository.save(testSubmission1);
    UserSubmission testSubmission2 = new UserSubmission(4, 14, 2020, "high", "low", "med", "low", "med", "high", "high", "high", "My friends do not like me unless I pay the bill");
      userSubmissionRepository.save(testSubmission2);
    UserSubmission testSubmission3 = new UserSubmission(4, 15, 2020, "low", "low", "low", "low", "low", "low", "low", "low", "Went to the pet store!");
      userSubmissionRepository.save(testSubmission3);
    UserSubmission testSubmission4 = new UserSubmission(4, 16, 2020, "med", "med", "low", "low", "med", "low", "med", "med", "Rough day");
      userSubmissionRepository.save(testSubmission4);
    UserSubmission testSubmission5 = new UserSubmission(4, 17, 2020, "high", "low", "low", "low", "high", "med", "high", "low", "Had midterms today");
      userSubmissionRepository.save(testSubmission5);
    UserSubmission testSubmission6 = new UserSubmission(4, 18, 2020, "low", "low", "low", "low", "low", "low", "low", "low", "Went to park for two hours");
      userSubmissionRepository.save(testSubmission6);
    UserSubmission testSubmission7 = new UserSubmission(4, 19, 2020, "low", "low", "low", "low", "low", "low", "low", "low", "Making to-do lists");
      userSubmissionRepository.save(testSubmission7);
    UserSubmission testSubmission8 = new UserSubmission(4, 20, 2020, "low", "med", "med", "low", "med", "high", "med", "low", "Monday after a browns game");
      userSubmissionRepository.save(testSubmission8);
     UserSubmission testSubmission9 = new UserSubmission(4, 21, 2020, "low", "low", "low", "low", "low", "low", "low", "low", "Went to the park with a friend");
      userSubmissionRepository.save(testSubmission9);
}


}


