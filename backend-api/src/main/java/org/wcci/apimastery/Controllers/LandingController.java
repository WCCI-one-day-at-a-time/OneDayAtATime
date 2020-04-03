package org.wcci.apimastery.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.wcci.apimastery.Model.UserSubmission;
import org.wcci.apimastery.Repositories.UserSubmissionRepository;

@Controller
    public class LandingController {
    UserSubmissionRepository userSubmissionRepo;

        @PostMapping("/submit")
        public UserSubmission addNewSubmission(@RequestBody UserSubmission submissionToAdd) {
            return userSubmissionRepo.save(submissionToAdd);
        }


}
