package org.wcci.apimastery.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.Model.UserSubmission;
import org.wcci.apimastery.Repositories.UserSubmissionRepository;
import java.util.Collection;

@RestController
public class LandingController {
    private UserSubmissionRepository userSubmissionRepo;

    public LandingController(UserSubmissionRepository userSubmissionRepo) {
        this.userSubmissionRepo = userSubmissionRepo;
    }

    @PostMapping("/submit")
    public UserSubmission addNewSubmission(@RequestBody UserSubmission submissionToAdd) {
        return userSubmissionRepo.save(submissionToAdd);
    }

    @GetMapping("/response")
    public Collection<UserSubmission> retrieveUserSubmission() {
        return (Collection<UserSubmission>) userSubmissionRepo.findAll();

    }


}

