package org.wcci.apimastery.Controllers;

import org.springframework.web.bind.annotation.*;
import org.wcci.apimastery.Model.UserSubmission;
import org.wcci.apimastery.Storage.SubmissionStorage;

import java.util.Collection;

@RestController
public class LandingController {
    private SubmissionStorage submissionStorage;

    public LandingController(SubmissionStorage submissionStorage) {
        this.submissionStorage = submissionStorage;
    }

    public LandingController() {
    }


    @PostMapping("/submit")
    public void addNewSubmission(@RequestBody UserSubmission submissionToAdd) {
        submissionStorage.store(submissionToAdd);
    }

    @GetMapping("/submissions")
    public Collection<UserSubmission> retrieveUserSubmission() {
        return submissionStorage.findAllSubs();

    }


}

