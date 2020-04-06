package org.wcci.apimastery.Controllers;

import org.apache.catalina.User;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.wcci.apimastery.Model.UserSubmission;
import org.wcci.apimastery.Repositories.UserSubmissionRepository;

import java.util.Collection;

@Controller
    public class LandingController {
    UserSubmissionRepository userSubmissionRepo;



    @PostMapping("/submit")
        public UserSubmission addNewSubmission(@RequestBody UserSubmission submissionToAdd) {
            return userSubmissionRepo.save(submissionToAdd);
        }

    @GetMapping("/submissions")
    public Collection<UserSubmission> retrieveUserSubmission() {
        return (Collection<UserSubmission>) userSubmissionRepo.findAll();

    }

    public LandingController(UserSubmissionRepository userSubmissionRepo) {
        this.userSubmissionRepo = userSubmissionRepo;
    }
}
